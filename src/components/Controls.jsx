import { useDispatch } from "react-redux";
import { startGame, resetGame } from "../store/game/gameSlice";
import { useRef } from "react";
import clickSound from "../assets/audio/mouse-click.mp3"; // Sonido para ambos botones

const Controls = () => {
  const dispatch = useDispatch();
  const clickSoundRef = useRef(null);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      // Reinicia el tiempo de reproducción para permitir clics rápidos
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play();
    }
  };

  const handleStartGame = () => {
    playClickSound();
    dispatch(startGame());
  };

  const handleResetGame = () => {
    playClickSound();
    dispatch(resetGame());
  };

  return (
    <section className="flex gap-10 justify-center items-center mb-6 mt-4">
      <button
        onClick={handleStartGame}
        className="transition-background inline-flex h-12 items-center justify-center rounded-md border-2 hover:border-white border-gray-800 bg-gradient-to-r from-blue-800 via-[#6eb2ff] to-[#0433b3] bg-[length:200%_200%] bg-[0%_0%] px-3 font-medium text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Nuevo Juego
      </button>

      <button
        onClick={handleResetGame}
        className="transition-background inline-flex h-12 items-center justify-center rounded-md border-2 hover:border-white border-gray-800 bg-gradient-to-r from-red-600 via-[#ff7b7b] to-[#8d0202] bg-[length:200%_200%] bg-[0%_0%] px-7 font-medium text-white duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Reiniciar
      </button>

      <audio ref={clickSoundRef} src={clickSound} preload="auto" />
    </section>
  );
};

export default Controls;
