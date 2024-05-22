import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/Auth-slice";
import errorSlice from "./features/Error-slice";

// Configure Store Here
const Store = configureStore({
  reducer: {
    Auth: authSlice.reducer,
    ErrorReducer: errorSlice.reducer
  },
  devTools: true,
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
