import React from 'react'
import Banner from '../assets/Banner4.jpg'

const SalesBanner = () => {
  return (
    <div className='w-full bg-gray-100 flex flex-col justify-center items-center lg:h-[500px] h-[450px] pb-28'>
      {/* Banner with Background Image */}
      <div
        className='w-full lg:px-20 px-6 lg:py-24 py-12 flex flex-col space-y-4 justify-center items-center lg:h-[450px] h-[350px] bg-center bg-cover text-center'
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1 className='text-xl lg:text-2xl font-bold text-white'>
          Limited Time Offer
        </h1>
        <h1 className='text-3xl lg:text-5xl font-bold text-white'>
          Special Edition
        </h1>
        <p className='text-sm lg:text-md font-semibold text-white max-w-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reprehenderit
          pariatur dolore dolores excepturi dolor voluptatum ea suscipit repellat? Nisi
          libero dignissimos minus minima!
        </p>
        <h1 className='text-sm lg:text-lg font-bold text-white'>
          Buy this Stylish Overcoat at 20% Discount, Use Code FIRST20
        </h1>
        <button className='mt-4 bg-white px-6 py-3 uppercase font-semibold text-black rounded-lg hover:bg-black transition hover:text-white'>
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default SalesBanner

