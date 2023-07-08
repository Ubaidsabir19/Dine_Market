import React from 'react'
import {products} from '@/utils/mock'
import { StaticImageData } from 'next/image'
import ProductCard from '@/components/ProductCard'

const AllProducts = () => {
  return (
    <div className = 'flex flex-wrap justify-between mt-24 gap-y-6'>
        {
          products.map((product) => (
            <ProductCard 
            key = {product.id} 
            title = {product.name} 
            price = {product.price} 
            img = {product.image as StaticImageData} 
            height = {280}
            width = {280}
            id = {product.id}
            category= {product.category} />
          ))
        }
      </div>
  )
}

export default AllProducts