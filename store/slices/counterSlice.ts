import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "#/store";

export interface CounterState {
  slide: boolean,  
}

const initialState: CounterState = {
  slide: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    slideStatus: (state, action) => {
      state.slide = action.payload;
    },
  }
});

export const { slideStatus } = counterSlice.actions;
export const selectSlide = (state: RootState) => state.counter.slide;
export default counterSlice.reducer;