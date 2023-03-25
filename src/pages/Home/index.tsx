import { useEffect } from 'react'
import Video from '../../components/Video/Video';
import List from '../../components/List';
import IVideos from "../../types/types"
import { videosReduce, DecReduce, IncReduce, loadingReduce, searchReduce, keyPressBtnReduce } from "../../redux/VideosSlice/videosSlice"
import { Icons, Images } from '../../config/path'
import "./Home.scss"
import { useNavigate } from "react-router-dom"
import 'react-datalist-input/dist/styles.css';
import axios from 'axios'
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const videos = useSelector((state: RootState) => state.videos);



  return (
    <div className='home'>
      {
        videos.loadingState ? (<div className='preloader'> <img src={Images.Preloader} alt="" /> </div>) :
          videos.videos.length === 0 ? (<div className={videos.backgroundState ? "preloader" : "changeColor preloader"}>
            <img src={Images.Monkey} alt="" />
            <p>
              Эта страница недоступна.<br />
              Может, поискать что-нибудь другое?
            </p>
          </div>) :

            <div className="home__wrapper">
              <List items={videos.videos} renderItem={(video: IVideos) => <Video key={video.id.videoId} video={video} />} />

              {/* <div className='home__wrapper__buttons'>
                <button className='home__wrapper__buttons__IncDecBtn' onClick={() => dispatch(DecReduce(50))}>{Icons.ArrowDropleft}   </button>
                <button className='home__wrapper__buttons__IncDecBtn' onClick={() => dispatch(IncReduce(50))}>{Icons.ArrowDropright} </button>
              </div> */}
            </div>
      }
    </div>
  )
}

export default Home