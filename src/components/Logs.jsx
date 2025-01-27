import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import impactSoundWater from "../assets/audio/bomb-explosion-water.mp3";
import impactSoundShip from "../assets/audio/bomb-explosion-ship.mp3";

const Logs = () => {
  const { logs } = useSelector((state) => state.game);
  const impactWaterAudioRef = useRef(null);
  const impactShipAudioRef = useRef(null);

  useEffect(() => {
    // Configurar el volumen de los audios
    if (impactWaterAudioRef.current) impactWaterAudioRef.current.volume = 0.1;
    if (impactShipAudioRef.current) impactShipAudioRef.current.volume = 0.3;
  }, []);

  useEffect(() => {
    if (logs[0]?.includes("IMPACTO")) {
      if (impactShipAudioRef.current) {
        impactShipAudioRef.current.currentTime = 0;
        impactShipAudioRef.current.play().catch((err) => console.error(err));
      }
    }

    if (logs[0]?.includes("AGUA")) {
      if (impactWaterAudioRef.current) {
        impactWaterAudioRef.current.currentTime = 0;
        impactWaterAudioRef.current.play().catch((err) => console.error(err));
      }
    }
  }, [logs]);

  return (
    <section className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-md font-serif">
      <h3 className="text-lg font-bold mb-3 text-white">Registro de Batalla</h3>
      <article className="h-40 overflow-y-auto bg-black/20 p-2 rounded">
        {logs.map((log, i) => (
          <div
            key={i}
            className="text-sm py-1 border-b border-white/30 text-white"
          >
            {log}
          </div>
        ))}
      </article>
      <audio ref={impactWaterAudioRef} src={impactSoundWater} preload="auto" />
      <audio ref={impactShipAudioRef} src={impactSoundShip} preload="auto" />
    </section>
  );
};

export default Logs;
