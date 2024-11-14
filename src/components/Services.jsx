import React from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import best from '../assets/best.png'
import price from '../assets/price.png'

const Services = () => {
  return (
    <div className='w-full bg-gray-100 lg:px-20 px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center pb-[80px] gap-10'>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <img src={shipping} alt="Worldwide Shipping" className='w-[50px] md:w-[60px]' />
        <h1 className='text-lg md:text-xl text-black font-semibold'>Worldwide Shipping</h1>
        <p className='text-sm md:text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <img src={best} alt="Best Quality" className='w-[50px] md:w-[60px]' />
        <h1 className='text-lg md:text-xl text-black font-semibold'>Best Quality</h1>
        <p className='text-sm md:text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <img src={price} alt="Best Offers" className='w-[50px] md:w-[60px]' />
        <h1 className='text-lg md:text-xl text-black font-semibold'>Best Offers</h1>
        <p className='text-sm md:text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <img src={payment} alt="Secure Payment" className='w-[50px] md:w-[60px]' />
        <h1 className='text-lg md:text-xl text-black font-semibold'>Secure Payment</h1>
        <p className='text-sm md:text-[17px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Services