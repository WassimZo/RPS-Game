import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  userPick: undefined,
  housePick: undefined,
  user_winner: false,
  house_winner: false,
  in_game: false,
};

export const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    pick: (state, action) => {
      state.userPick = action.payload;
      state.in_game = true;
    },
    pick_house: (state, action) => {
      state.housePick = action.payload;
      console.log('done');
    },
    reset: (state, action) => {
      state.userPick = undefined;
      state.housePick = undefined;
      state.user_winner = false;
      state.house_winner = false;
      state.in_game = false;
    },
    win: (state, action) => {
      state.score = state.score + 1;
      state.user_winner = true;
      state.in_game = false;
    },
    loose: (state, action) => {
      state.score = state.score - 1;
      state.house_winner = true;
      state.in_game = false;
    },
  },
});

export const { pick, reset, pick_house, win, loose } = game.actions;
export default game.reducer;
