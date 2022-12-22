import React from 'react'

const Product = ({title, image}) => {
  return (
    
    <div className='flex flex-col justify-center items-center bg-white w-full pb-8 rounded-[1rem]'>
        <p className="font-bold text-[20px] pt-2">{title}</p>
        <div className="bg-[#eaeded] p-4 rounded-[1rem] mt-2 mx-6">
        <img src = {image} className="h-[15rem] sm:h-[8rem] md:h-[6rem]"/>
        </div>
        
    </div>
  )
}

export default Product