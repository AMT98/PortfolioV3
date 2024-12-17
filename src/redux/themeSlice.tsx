import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light', 
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode(state) {
      state.theme = 'dark';
    },
    setLightMode(state) {
      state.theme = 'light';
    },
  },
});

export const { setDarkMode, setLightMode } = themeSlice.actions;

export default themeSlice.reducer;
