"use client";

import React from 'react'
import { FaRupeeSign } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";


const Product_Detail = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center'>
        
        {/* image */}
        <div className='w-full md:w-[50%]'>
            <img src="Rectangle.png" alt="Nike Air Force 1" className='w-[653px] h-[653px]' />
        </div>

        {/* detail */}
        <div className='w-full md:w-[50%] h-screen md:h-[653px] pt-0.5 gap-6'>
            <div className='flex flex-col gap-6'>
            <h1 className='h-4 font-bold text-3xl my-4'>Nike Air Force 1 PLT.AF.ORM</h1>
            <p className='w-[374.92px] h-[252px]'>{"Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its 'inside out'-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish."}</p></div>
             <h4 className="my-2 text-3xl flex weight-[500px] leading-7 font-Poppins gap-2">
            <FaRupeeSign  className=" mb-1"/>8 695.00</h4>
            <button className="flex justify-start gap-3 bg-black text-white font-poppins leading-[24px] weight-[500] px-4 rounded-full">
                <BsCart3 className='my-1' />Add To Cart</button>

        </div>
    </div>
  )
}

export default Product_Detail