import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const Subscription = () => {
  return (
    <div>
    <div className='flex justify-center mt-44'>
    <div className='flex-col'>
    <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-center mt-6">Subscribe Our Newsletter</h3>
    <p className='text-center'>Get the latest information and promo offers directly</p>
    <div className='flex mt-6 justify-between'>
    <div className="flex sm:flex w-full justify-center items-center gap-x-4">
      <Input type="email" placeholder="Input Your Email" className="h-10  border-2 border-black px-3 py-2 text-sm flex-grow" />
      <Button className='bg-black text-white justify-center items-center font-medium p-2' type="submit">Get started</Button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Subscription