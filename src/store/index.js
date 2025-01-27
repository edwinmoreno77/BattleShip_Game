import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../store/game/gameSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
