import { createBrowserRouter } from "react-router-dom"
import MainRoot from "../components/MainRoot"
import Home from "../pages/Home"
import VideoDetail from "../pages/VideoDetail"
import PageNotFound from "../pages/PageNotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot/>,
        children:[
            {
                path: "",
                element: <Home/>
            },
            {
                path: "videodetail/:id",
                element: <VideoDetail/>
            },
            {
                path: "*",
                element: <PageNotFound/>
            },
        ]
    }
])