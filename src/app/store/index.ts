import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    fake: () => "qovuns_ozin",
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
