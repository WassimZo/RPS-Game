import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  userPick: undefined,
  computerPick: undefined,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    pick: (state, action) => {
      state.userPick = action.payload;
    },
    housePick: (state, action) => {
      state.computerPick = action.payload;
    },
    reset: (state, action) => {
      state.userPick = undefined;
      state.computerPick = undefined;
    },
  },
});

export const { pick, reset, housePick } = game.actions;
export default game.reducer;
