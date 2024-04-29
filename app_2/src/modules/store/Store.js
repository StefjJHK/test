import { configureStore } from '@reduxjs/toolkit'
import {dataApi} from "../api/Api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {termsOfUseReducer, termsOfUseReducerPath} from "../terms-of-use/TermsOfUseSlice";

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer,
    [termsOfUseReducerPath]: termsOfUseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
})

setupListeners(store.dispatch);