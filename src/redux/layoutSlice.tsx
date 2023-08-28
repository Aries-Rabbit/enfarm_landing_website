import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 0,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
  },
});

export const { setActivePage } = layoutSlice.actions;

export default layoutSlice.reducer;
