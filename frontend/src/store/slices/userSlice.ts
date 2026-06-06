import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/types";

interface UserState {
  user: User | null;
  isLogin: boolean;
}

const user = JSON.parse(localStorage.getItem("user") || "null");

const initialState: UserState = {
  user,
  isLogin: !!user,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      state.isLogin = true;
    },

    logout(state) {
      state.user = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.isLogin = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
