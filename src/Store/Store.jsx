import { configureStore } from "@reduxjs/toolkit";

import Cartslices from "./Slices/Cartslices";

const store = configureStore({
  reducer: {
    cart: Cartslices,
  },
});
export default store;
