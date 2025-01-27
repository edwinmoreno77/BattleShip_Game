/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { playerAttack } from "../store/game/gameSlice";
import ShipIcon from "../icons/ship.svg";

const Cell = ({ x, y, isEnemy }) => {
  const dispatch = useDispatch();
  const board = useSelector((state) =>
    isEnemy ? state.game.computerBoard : state.game.playerBoard
  );
  const { isPlayerTurn, gameStatus } = useSelector((state) => state.game);
  const cell = board[x][y];

  const handleClick = () => {
    if (gameStatus === "playing" && isPlayerTurn && isEnemy && !cell.isHit) {
      dispatch(playerAttack({ x, y }));
    }
  };

  // Determinar el color de fondo según el estado de la celda
  let bgColor = "bg-blue-100"; // Fondo azul claro por defecto
  if (cell.isHit) bgColor = cell.hasShip ? "bg-red-600" : "bg-blue-600"; // Golpe: rojo si hay barco, azul oscuro si no
  if (!isEnemy && cell.hasShip && !cell.isHit) bgColor = "bg-slate-700"; // Barcos del jugador: gris claro si no están golpeados

  return (
    <div
      onClick={handleClick}
      className={`w-8 h-8 border border-blue-300 cursor-pointer transition-colors ${bgColor}
        ${!isEnemy || gameStatus !== "playing" ? "cursor-default" : ""}
        ${isPlayerTurn && isEnemy && !cell.isHit ? "hover:bg-blue-300" : ""}
        relative flex items-center justify-center`}
    >
      {cell.hasShip && (!isEnemy || cell.isHit) && (
        <ShipIcon
          className={`w-6 h-6 ${
            cell.isHit ? "text-red-300 animate-pulse" : "text-white"
          }`}
        />
      )}
    </div>
  );
};

export default Cell;
