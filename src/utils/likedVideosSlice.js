import { createSlice } from "@reduxjs/toolkit";

export const likedVideosSlice = createSlice({
  name: "likedVideos",
  initialState: {
    videos: [],
  },
  reducers: {
    addToLikedVideos: (state, action) => {
      state.videos.push(action.payload);
    },
  },
});

export const { addToLikedVideos } = likedVideosSlice.actions;

export const selectLikedVideos = (state) => state.likedVideos.videos;

export default likedVideosSlice.reducer;
