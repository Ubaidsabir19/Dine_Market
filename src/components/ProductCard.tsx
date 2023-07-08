import React from 'react'
import Link from 'next/link'

import Image , { StaticImageData } from "next/image"
function ProductList(
    props:{
        title:string , 
        price:number , 
        img:StaticImageData , 
        category: string , 
        height: number , 
        width: number , 
        id : number
    }) {
    return (
        <Link href={`/products/${props.id}`} >
        <div className='py-5'>
        <Image src = {props.img} alt = 'product' height = {props.height} width={props.width}/>
        <h3 className = 'font-bold mt-4 text-lg'>{props.title}</h3>
        <h3 className = 'font-bold text-lg'>${props.price}</h3>
        <h3 className = 'font-bold text-lg'> 
        Category {" "} <span className='text-base fornt-normal'>{props.category} </span></h3>
        </div>
        </Link>
    )
  }
  
  export default ProductList