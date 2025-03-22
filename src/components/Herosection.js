import React from 'react';
import Navbar from './Navbar';

function Herosection() {
    return (
        <div className=''>
            <div className='absolute w-[100%]'>
                <Navbar />
            </div>
            {/* <img src="/assets/hero.svg" alt="" /> */}
            <video
            className='video'
             autoPlay 
             loop 
             muted 
             src="/assets/herovideo.mp4"></video>
        </div>
    );
}

export default Herosection;
