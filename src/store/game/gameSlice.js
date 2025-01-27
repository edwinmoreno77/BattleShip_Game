import { createSlice } from "@reduxjs/toolkit";
import { BOARD_SIZE, initialState } from "../../utils/constants";
import {
  checkGameOver,
  checkShipSunk,
  generateEmptyBoard,
  placeShips,
} from "./thunks";

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.playerBoard = placeShips(generateEmptyBoard());
      state.computerBoard = placeShips(generateEmptyBoard());
      state.gameStatus = "playing";
      state.logs = ["¡Juego iniciado! Comienza el jugador"];
    },

    playerAttack: (state, action) => {
      if (state.gameStatus !== "playing" || !state.isPlayerTurn) return;

      const { x, y } = action.payload;
      const computerCell = state.computerBoard[x][y];

      if (!computerCell.isHit) {
        computerCell.isHit = true;
        const logMsg = `Jugador ataca (${String.fromCharCode(65 + x)},${y}) - ${
          computerCell.hasShip ? "IMPACTO!" : "AGUA"
        }`;
        state.logs.unshift(logMsg);

        if (
          computerCell.hasShip &&
          checkShipSunk(state.computerBoard, computerCell.shipId)
        ) {
          state.logs.unshift("¡Barco enemigo hundido!");
        }

        if (checkGameOver(state.computerBoard)) {
          state.gameStatus = "gameover";
          state.logs.unshift("¡VICTORIA! Todos los barcos enemigos hundidos");
          return;
        }

        state.isPlayerTurn = false;
      }
    },

    computerAttack: (state) => {
      if (state.gameStatus !== "playing" || state.isPlayerTurn) return;

      let x, y;
      do {
        x = Math.floor(Math.random() * BOARD_SIZE);
        y = Math.floor(Math.random() * BOARD_SIZE);
      } while (state.playerBoard[x][y].isHit);

      const playerCell = state.playerBoard[x][y];
      playerCell.isHit = true;
      const logMsg = `PC ataca (${String.fromCharCode(65 + x)},${y}) - ${
        playerCell.hasShip ? "IMPACTO!" : "AGUA"
      }`;
      state.logs.unshift(logMsg);

      if (
        playerCell.hasShip &&
        checkShipSunk(state.playerBoard, playerCell.shipId)
      ) {
        state.logs.unshift("¡Un barco tuyo ha sido hundido!");
      }

      if (checkGameOver(state.playerBoard)) {
        state.gameStatus = "gameover";
        state.logs.unshift("¡DERROTA! Todos tus barcos hundidos");
        return;
      }

      state.isPlayerTurn = true;
    },

    resetGame: () => initialState,
  },
});

export const { startGame, playerAttack, computerAttack, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;
