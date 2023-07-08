import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import heroImage from "/public/poster.webp"
import Bazar from "/public/bazar.webp"
import Bustle from "/public/bustle.webp"
import Versace from "/public/versace.webp"
import Style from "/public/style.webp"
import Image from "next/image"
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6 justify-center items-center mt-6'>
        {/* Left Div */}
        <div className='flex-1'>
           <Badge className = 'py-2 px-6 rounded-lg bg-blue-200 text-blue-600 hover:bg-none font-bold text-lg'>70% OFF</Badge>
           <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
           </h1>
           <p className='leading-7 [&:not(:first-child)]:mt-8'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
           <Button className='bg-black h-12 px-8 mt-8'> <ShoppingCart className="mr-4 h-8 w-6" /> Start Shopping</Button>
           <div className='flex justify-between mt-28 flex-col sm:flex-row gap-y-4'>
            <ul className='flex justify-center gap-x-20'>
                <li>< Image src = {Bazar} alt = 'bazar' /></li>
                <li>< Image src = {Bustle} alt = 'bustle' /></li>
            </ul>
            <ul className='flex justify-center gap-x-20'>
                <li>< Image src = {Versace} alt = 'versace' /></li>
                <li>< Image src = {Style} alt = 'style' /></li>
            </ul>
            </div>
        </div>


        {/* Right Div */}
        <div className=' bg-[#ffece3] flex-1 rounded-full md:flex sm:flex'>
            <Image src = {heroImage} alt = 'poster' />
        </div>

    </section>
  )
}

export default Hero
