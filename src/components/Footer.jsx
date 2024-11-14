import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      {/* Top Announcement Bar */}
      <div className='w-full lg:px-20 px-6 border border-r-0 border-l-0 border-gray-300 h-[40px] flex justify-center items-center'>
        <h1 className='lg:text-xl text-sm font-semibold uppercase text-center'>
          Sale upto 70% off for all cloths and fashion items, on all brands
        </h1>
      </div>

      {/* Main Footer Content */}
      <div className='w-full lg:px-20 px-6 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 justify-center items-start py-10'>
        {/* Brand Section */}
        <div className='flex flex-col space-y-3 text-center lg:text-left'>
          <h1 className='text-5xl font-brandFont text-headingColor'>DNK</h1>
          <p className='text-xl font-semibold'>The best look anytime, anywhere.</p>
        </div>

        {/* For Her Section */}
        <div className='flex flex-col space-y-3 lg:items-start items-center'>
          <h1 className='text-lg font-semibold'>For Her</h1>
          <ul className='text-[15px] leading-7'>
            <li>Women's Jeans</li>
            <li>Dresses</li>
            <li>Shirts</li>
            <li>Skirts</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* For Him Section */}
        <div className='flex flex-col space-y-3 lg:items-start items-center'>
          <h1 className='text-lg font-semibold'>For Him</h1>
          <ul className='text-[15px] leading-7 text-gray-600'>
            <li>Men's Jeans</li>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Shorts</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className='flex flex-col space-y-3 lg:items-start items-center'>
          <h1 className='text-lg font-semibold'>Subscribe</h1>
          <input
            type="email"
            placeholder='example@gmail.com'
            className='w-full max-w-xs px-3 py-2 border-2 rounded-lg focus:outline-none'
          />
          <button className='bg-headingColor text-white px-4 py-2 rounded-lg mt-2'>SUBSCRIBE</button>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className='w-full bg-gray-100 lg:px-20 px-6 border-t border-gray-300 py-5'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <p className='text-sm font-semibold text-gray-600 text-center lg:text-left'>
            &copy; 2024 SJ Coding. Powered by SJ Coding.
          </p>
          <div className='flex gap-5 text-headingColor pt-4 lg:pt-0'>
            <FaFacebook />
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
