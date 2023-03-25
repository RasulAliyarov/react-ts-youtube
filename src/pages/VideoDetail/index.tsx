import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import "./VideoDetail.scss"
import { Icons } from '../../config/path';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { videoDetailReduce } from "../../redux/VideosSlice/videosSlice"
import List from '../../components/List';
import IVideos from "../../types/types"
import Video from '../../components/Video/Video';

function VideoDetail() {
  const id = useParams()
  const videos = useSelector((state: RootState) => state.videos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    videos.videos.map(v => v?.id?.videoId?.includes(`${id.id}`) ? dispatch(videoDetailReduce(v)) : null)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
  })
  }, [id])


  return (
    <div className={videos.backgroundState ? "videoDetail" : "changeColor videoDetail"}>
      <div className="videoDetail__left">
        <iframe title='youtube video' width="860" height="484" src={`https://www.youtube.com/embed/${id.id}?autoplay=1&loop=1&playsinline=1&playlist=${id.id}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        <div className='videoDetail__left__info'>
          <h1>{videos?.videoDetailState?.snippet?.title}</h1>
          <span>
            <Link target="_blank" to={`https://www.youtube.com/@${videos?.videoDetailState?.snippet?.channelTitle.split(/\s+/).join('')}`} className='scrbBtn'>
              {Icons.Subscribe}
              {videos?.videoDetailState?.snippet?.channelTitle}
            </Link>
            <span className='likeDisLike'>
              {Icons.Like}
              {Icons.DisLike}
            </span>
          </span>
          <p>
            {videos?.videoDetailState?.snippet?.description}
          </p>
        </div>
      </div>
      <aside className="videoDetail__right">
        <List items={videos.videos.slice(0,20).reverse()} renderItem={(video: IVideos) => <Video key={video.id.videoId} video={video} />} />
      </aside>
    </div>
  )
}

export default VideoDetail