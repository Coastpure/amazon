import React from 'react'



const Add = () => {
    const buttons=["Christmas Deals","Today's Deals", "New Releases", "Gift Cards", "Pets"]
  return (
    <div className="bg-[#232f3e]">
        
        <div className='hidden sm:flex items-center justify-between h-8 sm:max-w-[80vw] md:max-w-[80vw] lg:max-w-[55vw] mx-auto sm:px-10 text-[15px] sm:[16px]'>
             {buttons.map((button) => (
                <div className="group whitespace-nowrap cursor-pointer">
                    <div className=" text-gray-200/70 hover:text-white px-[0.7rem]">{button} </div> 
                    <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
                </div>
             ))}
        </div>

    </div>
  );
};

export default Add