import { useSelector } from "react-redux";
import Board from "./components/Board";
import Controls from "./components/Controls";
import { useConfetti } from "./hooks/useConfetti";

function App() {
  const { isPlayerTurn, gameStatus, logs, computerBoard } = useSelector(
    (state) => state.game
  );
  useConfetti(gameStatus, computerBoard, isPlayerTurn);

  return (
    <main className="min-h-screen relative p-5">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#111827_35%,#3b82f6_100%)]"></div>

      <div className="max-w-4xl mx-auto relative z-20">
        <section className="text-center py-4">
          <h1 className="inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-6xl font-bold text-transparent font-serif">
            Battle Ship
          </h1>
        </section>

        <Controls />

        <section className="flex flex-wrap gap-8 justify-center mb-8 font-serif">
          <div>
            <h2 className="text-base mb-2 font-semibold text-white italic">
              Tu Flota
            </h2>
            <Board />
          </div>

          <div>
            <h2 className="text-base mb-2 font-semibold text-red-300 italic">
              Flota Enemiga
            </h2>
            <Board isEnemy />
          </div>
        </section>

        <section className="bg-white/20 backdrop-blur-sm p-4 rounded-lg shadow-md font-serif">
          <h3 className="text-lg font-bold mb-3 text-white">
            Registro de Batalla
          </h3>
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
        </section>

        {gameStatus === "gameover" && (
          <div className="mt-4 text-center text-xl font-bold text-white bg-black/40 p-4 rounded-lg">
            {logs[0]}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
