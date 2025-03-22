import React from 'react';

function Navbar() {
  return (
    <div className='px-[100px] cursor-pointer py-[24px] nav-container flex items-center justify-between w-[100%]'>
        <img className='cursor-pointer logo' src="/assets/logo.svg" alt="" />
        <a href="https://x.com/FireFrenzNFT" target='blank'><img className='cursor-pointer xlogo ' src="/assets/crossicon.svg" alt="" /></a>
    </div>
  );
}

export default Navbar;
