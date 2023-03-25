import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import SideBar from './SideBar'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';

function MainRoot() {
  const dispatch = useDispatch<AppDispatch>();
  const videos = useSelector((state: RootState) => state.videos);
  
  return (
    <div className='layout' style={videos.backgroundState ? {backgroundColor: " #0f0f0f"} : {backgroundColor: "white"}}>
      <Navbar /> 
      <div className='layout__content container'>
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainRoot