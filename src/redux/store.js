import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./content/contentSlice";

export const store = configureStore({
  reducer: {
    content: contentSlice,
  },
});
