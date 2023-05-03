import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type userState = {
  email: string | null;
  token: string | null;
  id: string | null;
};

const initialState: userState = {
  email: null,
  token: null,
  id: null,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = counterSlice.actions;

export default counterSlice.reducer;
