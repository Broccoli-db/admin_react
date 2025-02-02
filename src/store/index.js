import { configureStore } from "@reduxjs/toolkit";
import use from "./use";
const store = configureStore({
  reducer: {
    use,
  },
});
export default store;
