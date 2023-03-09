import { createSlice } from "@reduxjs/toolkit";
import { reset } from '../actions';

const moviesSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
      // 'movie' + '/' + 'addMovie' if you want to call it (i.e. 'movie/addMovie')
      addMovie(state, action) {
        state.push(action.payload);
      },
      // 'movie' + '/' + 'removeMovie' if you want to call it (i.e. 'movie/removeMovie')
      removeMovie(state, action) {
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      },
    },
    extraReducers(builder) {
      builder.addCase(reset, (state, action) => {
        return [];
      });
    },
  });

  export const { addMovie, removeMovie } = moviesSlice.actions;
  export const moviesReducer = moviesSlice.reducer;
  