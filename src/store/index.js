import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
        state.push(action.payload);
    },
    removeMovie(state, action) {
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' if you want to call it (i.e. 'song/addSong')
    addSong(state, action) {
      state.push(action.payload);
    },
    // 'song' + '/' + 'removeSong' if you want to call it (i.e. 'song/removeSong')
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
