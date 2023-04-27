import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 md:text-3xl'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-3'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl md:text-3xl text-xl font-bold py-4 md:py-1'>Fast, flexible financing for</p>
          <Typed className='md:text-5xl md:text-3xl text-xl font-bold md:pl-4 pl-2 text-gray-500' strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-600 md:py-4'>Monitor your data analytics to Increase revenue for BTB, BTC & SASS</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-2 text-black  my-2'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero