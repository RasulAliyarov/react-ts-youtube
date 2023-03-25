import { FC } from 'react'
import "./Video.scss"
import IVideos from "../../types/types"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface IVideo {
    video: IVideos
}

const Video: FC<IVideo> = ({ video }) => {
    const videos = useSelector((state: RootState) => state.videos);
    return (
        <Link to={`/videodetail/${video.id.videoId}`} className={videos.backgroundState ? "videoCard" : "changeColor tester videoCard"}>
            <div className="videoCard__top">
                <img src={video.snippet.thumbnails?.medium?.url} alt="" />
            </div>
            <div className="videoCard__bottom">
                <div className="videoCard__bottom__left"></div>
                <div className="videoCard__bottom__right">
                    <h1 className="videoCard__bottom__right__title">{video.snippet.title}</h1>
                    <h2 className="videoCard__bottom__right__author">{video.snippet.channelTitle}</h2>
                    <div className='videoCard__bottom__right__info'>
                        <span className="videoCard__bottom__right__info__date">{video.snippet.publishedAt.slice(0, 10)}</span>
                        <span className='dot'>•</span>
                        <span className="videoCard__bottom__right__info__view">1301 view</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Video