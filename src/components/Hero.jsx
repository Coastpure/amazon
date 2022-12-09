import React from 'react';
import wallpaper from "../assets/wallpaper.jpg";
import '../index.css';

const Hero = () => {
  return (
    <div className="">
        <div className='absolute grad w-full flex h-[15rem] z-10'> 
            
        </div>
        
        <div className='w-full flex relative h-[15rem]'> 
            <img src={wallpaper} alt="" className='absolute object-cover w-full z-0 h-[15rem]'/>
        </div>
    </div>
  );
};

export default Hero