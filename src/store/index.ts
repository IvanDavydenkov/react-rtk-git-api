import {configureStore} from "@reduxjs/toolkit";
import {githubApi} from "./github/github.api.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {gitHubReducer} from "./github/github.slice.ts";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: gitHubReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>