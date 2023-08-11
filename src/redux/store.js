import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from './slices/user'

export const store = configureStore({
   reducer: {
      user: userReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);
