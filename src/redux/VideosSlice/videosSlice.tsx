import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IVideos from "../../types/types"


interface VideosState {
    videos: IVideos[],
    searchState: string,
    loadingState: boolean,
    scrollState: boolean,
    loadMoreState: number,
    boorgerState: boolean,
    backgroundState: boolean,
    keyPressBtnState: string,
    videoDetailState: IVideos,
}

const initialState: VideosState = {
    videos: [],
    searchState: "lofi",
    loadingState: true,
    scrollState: false,
    loadMoreState: 50,
    boorgerState: false,
    backgroundState: true,
    keyPressBtnState: "Default",
    videoDetailState: {} as IVideos,
}

const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        videosReduce: (state, action: PayloadAction<IVideos[]>) => {
            state.videos = action.payload
        },
        searchReduce: (state, action: PayloadAction<string>) => {
            state.searchState = action.payload
        },
        loadingReduce: (state, action: PayloadAction<boolean>) => {
            state.loadingState = action.payload
        },
        scrollReduce: (state, action: PayloadAction<boolean>) => {
            state.scrollState = action.payload
        },
        IncReduce: (state, action: PayloadAction<number>) => {
            state.loadMoreState += action.payload
        },
        DecReduce: (state, action: PayloadAction<number>) => {
            state.loadMoreState -= action.payload
        },
        DefautMoreReduce: (state, action: PayloadAction<number>) => {
            state.loadMoreState = action.payload
        },
        boorgerReduce: (state, action: PayloadAction<boolean>) => {
            state.boorgerState = action.payload
        },
        backgroundReduce: (state, action: PayloadAction<boolean>) => {
            state.backgroundState = action.payload
        },
        keyPressBtnReduce: (state, action: PayloadAction<string>) => {
            state.keyPressBtnState = action.payload
        },
        videoDetailReduce: (state, action: PayloadAction<IVideos>) => {
            state.videoDetailState = action.payload
        },
    }
})

export const { videosReduce,
    loadingReduce,
    DefautMoreReduce,
    keyPressBtnReduce,
    IncReduce,
    DecReduce,
    scrollReduce,
    boorgerReduce,
    videoDetailReduce,
    backgroundReduce,
    searchReduce } = videosSlice.actions
export default videosSlice