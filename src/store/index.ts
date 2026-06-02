import { configureStore } from "@reduxjs/toolkit";
import promotionsReducer from "./slices/promotionsSlice";
import segmentsReducer from "./slices/segmentsSlice";

export const store = configureStore({
  reducer: {
    promotions: promotionsReducer,
    segments: segmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;