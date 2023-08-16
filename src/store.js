import { configureStore } from "@reduxjs/toolkit";
import game  from "./features/game";

export const store = configureStore({
  reducer: {
    game,
  },
});
