import { useEffect } from "react";
import confetti from "canvas-confetti";
import { computerAttack } from "../store/game/gameSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";

export const useConfetti = (gameStatus, computerBoard, isPlayerTurn) => {
  const dispatch = useDispatch();
  const confettiFired = useRef(false);

  // Reiniciar confeti cuando comienza un nuevo juego
  useEffect(() => {
    if (gameStatus === "playing") {
      confettiFired.current = false;
    }
  }, [gameStatus]);

  const checkPlayerWins = () => {
    return computerBoard.every((row) =>
      row.every((cell) => !cell.hasShip || cell.isHit)
    );
  };

  useEffect(() => {
    if (gameStatus === "playing" && !isPlayerTurn) {
      const timeout = setTimeout(() => dispatch(computerAttack()), 100);
      return () => clearTimeout(timeout);
    }

    if (
      gameStatus === "gameover" &&
      checkPlayerWins() &&
      !confettiFired.current
    ) {
      confettiFired.current = true;

      const defaults = {
        origin: { y: 0.7 },
        zIndex: 1000,
      };

      // Fuego de artillería inicial
      confetti({
        ...defaults,
        particleCount: 100,
        spread: 70,
        startVelocity: 80,
        scalar: 1.2,
      });

      // Lluvia de confeti persistente
      const end = Date.now() + 250;
      const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

      (function frame() {
        confetti({
          ...defaults,
          particleCount: 50,
          angle: 60,
          spread: 80,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          ...defaults,
          particleCount: 50,
          angle: 120,
          spread: 80,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStatus, isPlayerTurn, dispatch, computerBoard]);
};
