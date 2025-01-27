/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const BackgroundMusic = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    audio.play().catch((err) => {
      console.warn("El audio no se pudo reproducir automáticamente:", err);
    });

    // Pausar el audio al salir del componente
    return () => {
      if (audio) audio.pause();
    };
  }, []);

  return <audio ref={audioRef} src={src} loop />;
};

export default BackgroundMusic;
