import React from 'react'
import Image from "next/image"
import logo from "/public/logo.webp"
import { Twitter, FacebookIcon , Linkedin } from "lucide-react"

const Footer = () => {
    return (
    <div className=''>
    <div className='flex-1 flex flex-col lg:flex-row gap-y-10 py-6 justify-between  mt-44'>
    <ul className='mt-8'>
        <li><Image  src = {logo} alt = "logo" className = "w-40"/></li>
        <li className='mt-4'><p>Small , artisan label that offers a thoughtfully curated collection of</p></li>
        <li><p>high quality everyday essentials made.</p></li>
        <li className='flex gap-x-8 mt-8'>
                 <Twitter />
                 <FacebookIcon />
                 <Linkedin />
        </li>
    </ul>
    <ul className='mt-8 '>
        <li className='font-bold text-xl'><h3>Company</h3></li>
        <li className='mt-4 leading-none'><p>About</p></li>
        <li className='mt-4'><p>Terms of Use</p></li>
        <li className='mt-4'><p>Privacy Policy</p></li>
        <li className='mt-4'><p>How it Works</p></li>
        <li className='mt-4'><p>Contact Us</p></li>
    </ul>
    <ul className='mt-8 '>
        <li className='font-bold text-xl'><h3>Support</h3></li>
        <li className='mt-4'><p>Support Carrer</p></li>
        <li className='mt-4'><p>24h Service</p></li>
        <li className='mt-4'><p>Quick Chat</p></li>
    </ul>
    <ul className='mt-8 '>
        <li className='font-bold text-xl'><h3>Contact</h3></li>
        <li className='mt-4'><p>Whatsapp</p></li>
        <li className='mt-4'><p>Support 24h</p></li>
    </ul>
    </div>
    <div className='border-t border-black flex flex-wrap justify-between gap-3 py-4 mt-14'>
        <label className='text-gray-500'>Copyright © 2023 Dine Market</label>
        <label className='text-gray-500'>
            Designed by 
            <span className='font-semibold text-black'> ZERO Designs</span>
        </label>
        <label className='text-gray-500'>
            Developed by 
            <span className='font-semibold text-black'> Ubaid ur rehman</span>
        </label>



    </div>
    </div>
  
    )
  }
  
  export default Footer