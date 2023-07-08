import React from 'react'
import DescriptionCard from '@/components/DescriptionCard'
import desc from "/public/desc.webp"
import Image from "next/image"
import { Button } from '@/components/ui/button'

const Description = () => {
    return (
    <section className='flex flex-col lg:flex-row gap-y-10 py-6 gap-x-8 justify-center items-center mt-4'>
    <div className='flex-1'>
    <ul className='flex justify-between'>
      <li ><DescriptionCard  title='Using Good Quality Materials' description= 'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'/></li>
      <li ><DescriptionCard  title='Modern Fashion Design' description= 'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'/></li>
    </ul>
    <ul className='flex justify-between mt-8'>
      <li ><DescriptionCard  title='100% Handmade Products' description= 'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'/></li>
      <li ><DescriptionCard  title='Discount for Bulk Orders' description= 'Lorem ipsum dolor sit amt, consectetur adipiscing elit.'/></li>
    </ul>
    </div>
  

     {/* Right Div */}
    <div className= 'flex-1 justify-between flex-col lg:flex-row md:flex sm:flex gap-x-6'>
    < Image src = {desc} alt = 'description'/>
    <div className='flex-col mt-16'>
     <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
     <Button className='bg-black h-12 px-12 mt-8'>All products</Button>
    </div>
    </div>
    </section>
    )
  }
  
  export default Description