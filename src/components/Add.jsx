import React from 'react'



const Add = () => {
    const buttons=["Today's Deals", "New Releases", "Gift Cards", "Pet Supplies", "Handmade", "Coupons"]
  return (
    <div className="bg-[#232f3e]">
        
        <div className='flex items-center justify-between h-8 md:max-w-[70vw] mx-auto px-10'>
             {buttons.map((button) => (
                <div className="group whitespace-nowrap cursor-pointer">
                    <div className="text-gray-200/70 hover:text-white px-[0.7rem]">{button} </div> 
                    <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
                </div>
             ))}
        </div>

    </div>
  );
};

export default Add