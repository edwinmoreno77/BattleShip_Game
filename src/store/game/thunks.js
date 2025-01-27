import { BOARD_SIZE, SHIPS } from "../../utils/constants";

export const generateEmptyBoard = () =>
  Array(BOARD_SIZE)
    .fill()
    .map(() =>
      Array(BOARD_SIZE).fill({
        isHit: false,
        hasShip: false,
        shipId: null,
      })
    );

export const placeShips = (board) => {
  const newBoard = board.map((row) => [...row]);
  SHIPS.forEach((shipSize, shipId) => {
    let placed = false;
    while (!placed) {
      const vertical = Math.random() < 0.5;
      const x = Math.floor(
        Math.random() * (BOARD_SIZE - (vertical ? shipSize : 0))
      );
      const y = Math.floor(
        Math.random() * (BOARD_SIZE - (!vertical ? shipSize : 0))
      );

      let canPlace = true;
      for (let i = 0; i < shipSize; i++) {
        const checkX = vertical ? x + i : x;
        const checkY = vertical ? y : y + i;
        if (newBoard[checkX][checkY].hasShip) canPlace = false;
      }

      if (canPlace) {
        for (let i = 0; i < shipSize; i++) {
          const placeX = vertical ? x + i : x;
          const placeY = vertical ? y : y + i;
          newBoard[placeX][placeY] = {
            ...newBoard[placeX][placeY],
            hasShip: true,
            shipId,
          };
        }
        placed = true;
      }
    }
  });
  return newBoard;
};

export const checkShipSunk = (board, shipId) => {
  return !board.some((row) =>
    row.some((cell) => cell.shipId === shipId && !cell.isHit)
  );
};

export const checkGameOver = (board) => {
  return !board.some((row) => row.some((cell) => cell.hasShip && !cell.isHit));
};
