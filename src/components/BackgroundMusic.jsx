/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.1; // Ajusta el volumen (0.1 es el 10% del volumen máximo)
      audio.play().catch((err) => {
        console.warn("El audio no se pudo reproducir automáticamente:", err);
      });
    }

    // Pausar el audio al salir del componente
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  return <audio ref={audioRef} src={src} loop />;
};

export default BackgroundMusic;
