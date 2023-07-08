import React from 'react'
import logo from "/public/logo.webp"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
const Header = () => {
  const cartValue = 0;
  return (
    <div className='grid grid-cols-12 place-items-center justify-items-end sm:flex py-3 sm:justify-between sm:items-center'>
        <Link href = {'/'} className={'col-span-6'}>
        <Image  src = {logo} alt = "logo" className = "w-40"/>
        </Link>
        <div className = 'flex justify-evenly items-center gap-x-16'>
        <ul className = 'hidden lg:flex lg:gap-x-9'>
            <li className = 'text-lg'>
                <Link href = {"category/Female"}>Female</Link>
            </li>
            <li className = 'text-lg'>
                <Link href = {"category/Male"}>Male</Link>
            </li>
            <li className = 'text-lg'>
                <Link href = {"category/kids"}>kids</Link>
            </li>
            <li className = 'text-lg'>
                <Link href = {"products"}>All Products</Link>
            </li>
        </ul>
        </div>
 
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
        </span>
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  )
}

export default Header