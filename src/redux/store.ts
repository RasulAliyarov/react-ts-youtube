import { configureStore } from '@reduxjs/toolkit'
import VideosSlice from "./VideosSlice/videosSlice"

export const store = configureStore({
    reducer: {
        videos: VideosSlice.reducer
    }
})

export type  RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;