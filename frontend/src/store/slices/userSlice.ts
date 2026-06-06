import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/types";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logout(state) {
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
