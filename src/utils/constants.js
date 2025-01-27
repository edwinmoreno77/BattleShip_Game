export const BOARD_SIZE = 10;
// Portaaviones: 5 espacios, Acorazado: 4 espacios, Crucero: 3 espacios, Submarino: 3 espacios, Destructor: 2 espacios.
export const SHIPS = [5, 4, 3, 3, 2];

export const initialState = {
  playerBoard: [],
  computerBoard: [],
  gameStatus: "setup", // 'playing', 'gameover'
  isPlayerTurn: true,
  logs: [
    "Portaaviones: 5 espacios, Acorazado: 4 espacios, Crucero: 3 espacios, Submarino: 3 espacios, Destructor: 2 espacios.",
  ],
};
