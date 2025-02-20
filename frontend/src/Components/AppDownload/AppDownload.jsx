import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="appDownload " id='AppDownload'>
        <p>
            For Better Experience Download <br />Tomato App 
        </p>
        <div className="app_download_platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default AppDownload;
