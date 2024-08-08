// src/features/counter/movieSlice.js

import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const serverUrl = "https://gc01.projects.khanz1.dev";
export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    // `list` property to store the list of movies from `/pub/movies`
    // list: {
    //   data: [],
    //   totalPages: 0,
    //   currentPage: 0,
    //   totalData: 0,
    //   dataPerPage: 0
    // },
    // `detail` property to store the detail of a movie from `/pub/movies/:id`
    // detail: {}
  },
  reducers: {
    setMenus: (state, action) => {
      state.list.data = action.payload.data;
    },
    setMenu: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setMenus, setMenu } = menuSlice.actions;

export default menuSlice.reducer;