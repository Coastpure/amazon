import React from 'react'
import logo from '../assets/logo.png'
import { BsCart2} from 'react-icons/bs';


const Navbar = () => {
  return (
    <div className='bg-[#131921] p-4 flex items-center justify-between'>
      {/* Left */}
      <div className="h-10 flex">
        <img src={logo} alt="" className='object-cover' />
      </div>



      {/* Middle */}
      {/* Right*/}
      <div className="relative flex items-center justify-center  text-white text-[28px]">
       < BsCart2 />
       <div className=" < absolute text-[16px] h-full -top-3.5 right-2.1 text-orange-400">
        <p>0</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar