import React from 'react'

const Footer = () => {
  return ( 
    
    <div className='bg-[#232f3e] '>
        <div className="group h-[3rem] bg-[#37475a] font-semibold text-[14px] text-white flex items-center justify-center w-full cursor-pointer hover:bg-[#39476B] duration-100 ease-out ">
      <p className='group-hover:scale-150 duration-100 ease-out'> Back to Top</p>
    </div>
        <div className="text-[16px] py-4 px-10 sm:px-40 text-white flex flex-col sm:flex-row justify-between space-y-10 sm:space-y-0 ">
            <div className=''>  
              <p className="font-bold mb-1" >Get to Know Us</p>
                 <div className='text-gray-200/70 list-none text-[14px] space-y-1 '>
                        <li className='hover:text-white cursor-pointer'>Careers</li>
                        <li className='hover:text-white cursor-pointer'>Amazon Newsletter</li>
                        <li className='hover:text-white cursor-pointer'>About Amazon</li>
                        <li className='hover:text-white cursor-pointer'>Sustainability</li>
                        <li className='hover:text-white cursor-pointer'>Press Center</li>
                 </div> 
            </div>
            <div className=''>  
              <p className="font-bold mb-1" >Make Money with Us</p>
                 <div className='text-gray-200/70 list-none text-[14px] space-y-1'>
                        <li className='hover:text-white cursor-pointer'>Sell products on Amazon</li>
                        <li className='hover:text-white cursor-pointer'>Sell apps on Amazon</li>
                        <li className='hover:text-white cursor-pointer'>Supply to Amazon</li>
                        <li className='hover:text-white cursor-pointer'>Protect & Build Your Brand</li>
                        <li className='hover:text-white cursor-pointer'>Become an Affiliate</li>
                 </div> 
            </div>
            <div className=''>  
              <p className="font-bold mb-1" >Amazon Payment Products</p>
                 <div className='text-gray-200/70 list-none text-[14px] space-y-1  '>
                        <li className='hover:text-white cursor-pointer '>Amazon Rewards Visa Signature Cards</li>
                        <li className='hover:text-white cursor-pointer'>Amazon Store Card</li>
                        <li className='hover:text-white cursor-pointer'>Amazon Secured Card</li>
                        <li className='hover:text-white cursor-pointer'>Shop with Points</li>
                        <li className='hover:text-white cursor-pointer'>Amazon Currency Converter</li>
                 </div> 
            </div>

            <div className=''>  
              <p className="font-bold mb-1" >Get to Know Us</p>
                 <div className='text-gray-200/70 list-none text-[14px] space-y-1 max-w-[95%]'>
                        <li className='hover:text-white cursor-pointer'>Let Us Help You</li>
                        <li className='hover:text-white cursor-pointer'>Returns & Replacements</li>
                        <li className='hover:text-white cursor-pointer leading-4'>Your Recalls and Product Safety Alerts</li>
                        <li className='hover:text-white cursor-pointer'>Shipping Rates & Policies</li>
                        <li className='hover:text-white cursor-pointer'>Help</li>
                 </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer