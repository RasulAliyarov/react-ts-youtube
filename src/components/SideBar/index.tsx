import React from 'react'
import "./SideBar.scss"
import { scrollReduce } from "../../redux/VideosSlice/videosSlice"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { Icons, Images } from '../../config/path';
import { searchReduce, boorgerReduce, backgroundReduce } from "../../redux/VideosSlice/videosSlice"
import { Link, useNavigate } from "react-router-dom"

function SideBar() {
    const dispatch = useDispatch<AppDispatch>();
    const videos = useSelector((state: RootState) => state.videos);

    window.onscroll = function (event) {
        let scroll = window.pageYOffset;
        if (80 < scroll) {
            dispatch(scrollReduce(true))
        }
        else {
            dispatch(scrollReduce(false))
        }
    }

    return (
        <aside className={videos.boorgerState ? "sideBar" : "sideBarNone"} >
            <div className={videos.backgroundState ? "sideBar__wrapper" : "changeColor sidebarCngCl sideBar__wrapper"}>
                <div className="nav__wrapper__left">
                </div>
                <ul>
                    <li>{Icons.Home}Home</li>
                    <li>{Icons.History}History</li>
                    <li>{Icons.Like}Liked</li>
                    <li>{Icons.Watch}Watch Later</li>
                    <li>{Icons.Library}Library </li>
                    <li>{Icons.Subscribe}Subscriptions</li>
                    <li onClick={() => {
                        dispatch(backgroundReduce(!videos.backgroundState))
                    }}>{Icons.BgColor}Background color</li>
                   <a target="_blank" href="https://rasulaliyarov.netlify.app"><li>{Icons.Portrait}Aliyar Portfolio</li></a>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar