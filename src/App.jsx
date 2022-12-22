import React from 'react';
import Add from './components/Add';
import Hero  from './components/Hero';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className=''>
      

    {/* Navbar */}
    <Navbar />
    {/* Add */}
    <Add />
    {/* Hero */}
    <Hero />
    {/* Products */}
    <Products />
    {/* Deals */}
    {/* Trending */}
    {/* Footer */}
    <div className=" bg-[#eaeded] h-screen"></div>
    </div>
  )
}

export default App