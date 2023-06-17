import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPods: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentPods = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentPods = action.payload?.data?.tracks;
      } else {
        state.currentPods= action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentPods[action.payload]?.track) {
        state.activeSong = state.currentPods[action.payload]?.track;
      } else {
        state.activeSong = state.currentPods[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentPods[action.payload]?.track) {
        state.activeSong = state.currentPods[action.payload]?.track;
      } else {
        state.activeSong = state.currentPodss[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
