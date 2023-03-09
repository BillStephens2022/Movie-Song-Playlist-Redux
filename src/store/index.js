import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction("app/reset");

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
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
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
