import React from 'react'
import ProductCard from '@/components/ProductCard'
import { products } from '@/utils/mock';
import { StaticImageData } from 'next/image';
const ProductList = () => {

    const productChecks =  products.slice(0,3);
    return (
    <div>
      <div className = 'flex flex-col justify-center items-center mt-12'>
        <small className="text-sm leading-none text-blue-700 font-bold mt-5">PRODUCTS</small>
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight mt-6 text-center">Check What We Have</h1>
      </div>
      <div className = 'flex flex-col justify-between mt-24 lg:flex-row gap-y-8'>
        {
          productChecks.map((product) => (
            <ProductCard 
            key = {product.id} 
            title = {product.name} 
            price = {product.price} 
            img = {product.image as StaticImageData} 
            height = {350}
            width = {300}
            category= {product.category}
            id = {product.id}
            
            />
          ))
        }
      </div>
    </div>
    )
  }
  
  export default ProductList