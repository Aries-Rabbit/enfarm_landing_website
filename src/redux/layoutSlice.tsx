import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: 0,
  tabsKnowledge: 0,
};

const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
    setTabsKnowledge: (state, { payload }) => {
      state.tabsKnowledge = payload;
    },
  },
});

export const { setActivePage, setTabsKnowledge } = layoutSlice.actions;

export default layoutSlice.reducer;
