import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { computerAttack } from "../store/game/gameSlice";

export const useComputerAttack = (gameStatus, isPlayerTurn) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (gameStatus === "playing" && !isPlayerTurn) {
      const timeout = setTimeout(() => dispatch(computerAttack()), 500); // tiempo de ataque de la computadora
      return () => clearTimeout(timeout);
    }
  }, [gameStatus, isPlayerTurn, dispatch]);
};
