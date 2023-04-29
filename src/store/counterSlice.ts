import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type counterState = {
  number: number;
};

const initialState: counterState = {
  number: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.number = state.number + action.payload;
    },
    mul: (state, action: PayloadAction<number>) => {
      state.number = state.number * action.payload;
    },
    reset: (state) => {
      state.number = 0;
    },
  },
});

export const { add, mul, reset } = counterSlice.actions;

export default counterSlice.reducer;
