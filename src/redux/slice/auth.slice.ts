import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  forgetPassword: boolean;
  loginRegister: boolean;
}

const initialState: AuthState = {
  forgetPassword: false,
  loginRegister: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setForgetPassword(state, action: PayloadAction<boolean>) {
      state.forgetPassword = action.payload;
    },
    setLoginRegister(state, action: PayloadAction<boolean>) {
      state.loginRegister = action.payload;
    },
  },
});

export const { setForgetPassword, setLoginRegister } = authSlice.actions;
export default authSlice.reducer;
