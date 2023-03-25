import { HiMenu, HiOutlineRefresh, } from "react-icons/hi"
import { IoMdArrowDropright, IoMdArrowDropleft, IoIosSearch } from "react-icons/io"
import { SlHome } from "react-icons/sl"
import { MdOutlineSubscriptions,MdPortrait, MdOutlineWatchLater, MdOutlineVideoLibrary } from "react-icons/md"
import { AiOutlineHistory, AiOutlineLike } from "react-icons/ai"
import { VscColorMode } from "react-icons/vsc"
import { BiFullscreen, BiDislike } from "react-icons/bi"

import Logo from "../images/Logo.png"
import Preloader from "../images/Preloader.gif"
import Up from "../images/Up.png"
import Monkey from "../images/Monkey.png"


export const Images = {
    Logo: Logo,
    Preloader: Preloader,
    Up: Up,
    Monkey: Monkey,
}
export const Icons = {
    Menu: <HiMenu />,
    Refresh: <HiOutlineRefresh />,
    ArrowDropright: <IoMdArrowDropright />,
    ArrowDropleft: <IoMdArrowDropleft />,
    Search: <IoIosSearch />,
    Home: <SlHome />,
    Subscribe: <MdOutlineSubscriptions />,
    History: <AiOutlineHistory />,
    Like: <AiOutlineLike />,
    DisLike: <BiDislike />,
    Watch: <MdOutlineWatchLater />,
    Library: <MdOutlineVideoLibrary />,
    BgColor: <VscColorMode />,
    Fullscreen: <BiFullscreen />,
    Portrait: <MdPortrait />,
}