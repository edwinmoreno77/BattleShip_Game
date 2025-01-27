/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Cell from "./Cell";

const Board = ({ isEnemy }) => {
  const board = useSelector((state) =>
    isEnemy ? state.game.computerBoard : state.game.playerBoard
  );

  // Validar si el tablero está disponible, tiene datos y crear etiquetas para las coordenadas
  const rowLabels =
    board && board.length > 0
      ? Array.from({ length: board.length }, (_, i) =>
          String.fromCharCode(65 + i)
        ) // A, B, C, ...
      : [];
  const colLabels =
    board && board.length > 0
      ? Array.from({ length: board[0].length }, (_, i) => i) // 0, 1, 2, ...
      : [];

  return (
    <article className="flex flex-col items-center">
      {/* Etiquetas de columnas (encima del tablero) */}
      <div className="flex">
        <div className="w-8 h-8"></div> {/* Espacio vacío para la esquina */}
        {colLabels.map((label) => (
          <div
            key={label}
            className="w-8 h-8 flex items-center justify-center text-white font-bold"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Filas del tablero con etiquetas */}
      {board.map((row, x) => (
        <div key={x} className="flex">
          {/* Etiqueta de fila (a la izquierda) */}
          <div className="w-8 h-8 flex items-center justify-center text-white font-bold">
            {rowLabels[x]}
          </div>

          {/* Celdas del tablero */}
          {row.map((_, y) => (
            <Cell key={`${x}-${y}`} x={x} y={y} isEnemy={isEnemy} />
          ))}
        </div>
      ))}
    </article>
  );
};

export default Board;
