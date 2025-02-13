import { createSlice } from "@reduxjs/toolkit";
const use = createSlice({
  name: "use",
  initialState: {
    user: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = use.actions;
export default use.reducer;
