import "./Navbar.scss"
import { Icons, Images } from '../../config/path'
import { NavLink, useNavigate } from "react-router-dom"
import 'react-datalist-input/dist/styles.css';
import axios from 'axios'
import { AppDispatch, RootState } from '../../redux/store';
import { videosReduce, boorgerReduce, loadingReduce, keyPressBtnReduce, searchReduce } from "../../redux/VideosSlice/videosSlice"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

function Navbar() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const videos = useSelector((state: RootState) => state.videos);

    useEffect(() => {
        searchHandler()
    }, [videos.keyPressBtnState, videos.loadMoreState])
    async function searchHandler() {
        dispatch(loadingReduce(true))

        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                q: `${videos.searchState ? videos.searchState : "lofi"}`,
                part: 'snippet,id',
                regionCode: 'US',
                maxResults: videos.loadMoreState,
                order: 'relevance'
            },
            headers: {
                'X-RapidAPI-Key': '1adf8337e2msh3a4fbf1b604a687p1dd180jsn977a6f31636f',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            dispatch(videosReduce(response.data.items))
            dispatch(loadingReduce(false))
            dispatch(searchReduce(""))
        }).catch(function (error) {
            console.error(error);
        });
        dispatch(keyPressBtnReduce("Default"))
    }

    return (
        <div className={videos.backgroundState ? "nav" : "changeColor nav"}>
            <div className="nav__wrapper container">
                <div className="nav__wrapper__left">
                    <span onClick={() => {
                        dispatch(boorgerReduce(!videos.boorgerState))
                    }}>{Icons.Menu}</span>
                    <NavLink to="/" onClick={() => {
                        if (videos.videos.length > 1) return
                        searchHandler()
                    }}>
                        <img src={Images.Logo} alt="Logo" />
                        <span>MyVidi</span>
                    </NavLink>
                </div>
                <div className="nav__wrapper__middle">
                    <span>
                        <input className='nav__wrapper__middle__searchInput' type="text"
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    if (videos.searchState.length === 0) return
                                    dispatch(keyPressBtnReduce(`${e.key}`))
                                    navigate("/")
                                }
                            }}
                            onChange={(e) => dispatch(searchReduce(e.target.value))}
                            placeholder="Enter a request"
                        />
                        {Icons.Search}
                    </span>
                </div>

                <div className="nav__wrapper__right"></div>
            </div>
            <button style={videos.scrollState ? { display: "block" } : { display: "none" }} onClick={() =>
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            } className='UpToTop'><img src={Images.Up} alt="" /></button>
        </div >
    )
}

export default Navbar