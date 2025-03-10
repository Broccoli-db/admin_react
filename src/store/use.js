import { createSlice } from "@reduxjs/toolkit";
const use = createSlice({
  name: "use",
  initialState: {
    user: "",
    width: 0,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setWidth: (state, action) => {
      console.log(action.payload);

      state.width = action.payload;
    },
  },
});

export const { setUser, setWidth } = use.actions;
export default use.reducer;
