import React from 'react'
import logo from '../assets/logo.png'
import  kenya  from "../assets/kenya.png";
import { BsCart2} from 'react-icons/bs';
import { FiSearch} from 'react-icons/fi';
import { GoSettings} from 'react-icons/go';
import { GoLocation} from 'react-icons/go';


const Navbar = () => {
  return (
    <div className='bg-[#131921] p-4 flex items-center justify-between'>
      {/* Left */}
      <div className="flex items-center">
        <div className="h-10 flex">
          <img src={logo} alt="" className='object-cover' />
       </div>
       <div className="hidden text-white/70 pl-6 sm:flex items-center hover:scale-110">
       <GoLocation className='text-[20px] mr-1'/>
       <p className=''>Kenya 🇰🇪</p>
       </div>
      </div>

      {/* Middle */}
    <div className="">
      {/* iNPUT */}
      <div className="hidden sm:flex relative">
        <input type="search" placeholder='Search' className='w-[20rem] py-2 rounded-full pl-12 placeholder:text-  [#131921] outline-0'/>
        <button className='absolute bg-orange-400 h-full w-12 right-0 flex items-center justify-center  rounded-r-full'>
          <FiSearch /> 
        </button>
        <button className='absolute text-[#131921] bg-[#f3f3f3]  h-full w-12  flex items-center justify-center  rounded-l-full'>
          <GoSettings /> 
       </button>
     </div>
     {/* FLAG */}
     <div className="">
      <img src={kenya} alt="" srcset="" />
     </div>
    </div>
    



















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