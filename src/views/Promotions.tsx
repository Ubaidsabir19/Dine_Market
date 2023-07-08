import React from 'react'
import pro1 from "/public/pro1.webp"
import pro2 from "/public/pro2.webp"
import pro3 from "/public/pro3.webp"
import Image from "next/image"
import { Button } from '@/components/ui/button'

const Promotions = () => {
  return (
    <section>
        <div className = 'flex flex-col justify-center items-center mt-12'>
        <small className="text-sm leading-none text-blue-700 font-bold mt-5">PROMOTIONS</small>
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight mt-6 text-center">Our Promotions Events</h1>
        </div>
      
    {/* Left Div */}
    <div className='flex-1 sm:flex md:flex lg:flex justify-between mt-12'>
       <div className='flex-col items-start mt-5'>
        <div className= ' bg-[#d6d6d8] flex lg:justify-between gap-y-8 lg:flex lg:px-14' >
          <div className='flex-col col-center lg:ml-12 lg:mt-20'>
          <h3 className='lg:text-3xl font-bold text-black text-center'>Get Up To 60%</h3>
          <p className='lg:text-md text-black text-center mt-2'>For the summer season</p>
          </div>
        <div className='flex'>
        < Image src = {pro1} alt = 'promotion'/>
        </div>
        </div>
        <div className= 'bg-black py-4 mt-6 px-8'>
        <div className='flex justify-center'>
         <div className= 'flex-col'>
          <h3 className='lg:text-2xl font-bold text-white text-center mt-8'>GET 30% OFF</h3>
          <p className='text-sm text-white text-center'>USE PROMO CODE</p>
          <Button className=' bg-gray[300] h-10 px-8 mt-8 mb-6'>DINEWEEKENDSALE</Button>
        </div>
        </div>
        </div>
      </div>
       {/* Right Div */}
      <div className='md:flex sm:flex mt-5 justify-between gap-x-10 '>
        <div className='flex-col bg-[#efe1c7] sm:px-18'>
          <h3 className='text-md font-bold  text-black mt-6  ml-6 '>Flex Sweatshirt</h3>
          <p className='text-md text-black ml-6 font-bold mb-5'><span>75.00 80.00</span></p>
          < Image src = {pro2} alt = 'promotion'  />
        </div>
        <div className='flex-col bg-[#d7d7d9]'>
          <h3 className='text-md font-bold text-black mt-6 ml-6'>Flex Push Button Bomber</h3>
          <p className='text-md text-black ml-6 font-bold mb-4 '><span>190.00 200.00</span></p>
          < Image src = {pro3} alt = 'promotion'  />
        </div>
      </div>
    </div>
      
        



     
      

    </section>
  )
}

export default Promotions