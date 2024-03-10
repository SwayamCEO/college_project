"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/app/controls/videoplayer';
export default function computer() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="../softtoyvp.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link>  
      <Link href='/softtoy'><button id="pretraining"  className="bi"/></Link>  
      <div className='pc'>
      <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={0}
        endTime={15}
        id={"start"}
        cn={"playbutton"}
      />
      <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={0}
        endTime={5}
        id={"first"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={5}
        endTime={10}
        id={"second"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={10}
        endTime={15}
        id={"third"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={2}
        endTime={8}
        id={"fourth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={8}
        endTime={14}
        id={"fifth"}
        cn={"playbutton"}
      />
            <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={13}
        endTime={15}
        id={"sixth"}
        cn={"playbutton"}
      /> 
                  <VideoPlayer
        src="./videos/Joren_Falls_Izu_Jap.mp4"
        startTime={3}
        endTime={10}
        id={"seventh"}
        cn={"playbutton"}
      /> 
      </div>
  </div>
    );
}



