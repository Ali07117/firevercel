import React from 'react';
import Marquee from "react-fast-marquee";
function Bottomimages() {
  return (
    <>
        <div className='pt-[0px] bg-[black]'>
        <Marquee className='pt-[80px] marquee'>
        <div className='flex gap-[40px] marquee-inner my-[100px]'>
        <div className='flex flex-col rotate-[-16.69deg] first-card ml-[40px] gap-[20px] cards-wrapper hover:z-[99]'>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img1.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img2.png" alt="" />
        </div>
        <div className='flex flex-col rotate-[-16.69deg] gap-[20px] cards-wrapper hover:z-[99] card-2 relative top-[-60px] right-[20px] '>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img3.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img4.png" alt="" />
        </div>
        <div className='flex flex-col rotate-[-16.69deg] gap-[20px] cards-wrapper card-3 hover:z-[99] relative top-[-60px] right-[20px] '>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img5.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img6.png" alt="" />
        </div>
        <div className='flex flex-col rotate-[-16.69deg] card-4 relative top-[-60px] right-[20px]  gap-[20px] cards-wrapper hover:z-[99]'>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img7.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img8.png" alt="" />
        </div>
        <div className='flex flex-col rotate-[-16.69deg] gap-[20px] cards-wrapper hover:z-[99]'>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img9.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img10.png" alt="" />
        </div>
        <div className='flex flex-col rotate-[-16.69deg] gap-[20px] cards-wrapper hover:z-[99]'>
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] rounded-[16px] h-[48vh] object-cover' src="/assets/img11.png" alt="" />
            <img className=' hover:scale-[1.3] bottom-img hover:rotate-[16.69deg] duration-500 w-[16vw] shadow-box rounded-[16px] h-[48vh] object-cover' src="/assets/img1.png" alt="" />
        </div>
        </div>       
        </Marquee>
        </div>
    </>
  );
}

export default Bottomimages;
