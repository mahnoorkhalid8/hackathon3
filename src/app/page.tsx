"use client"

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

   useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in ms
          once: true, // Animation happens only once
        });
      }, []);

  return (
   <div className="w-full p-8 md:p-6 m-2">

      <div className="text-center mb-4 font-bold text-lg md:text-xl weight-500 leading-[16px]">
        Hello Nike App</div>

        <div className="text-center mb-4 text-sm md:text-base weight-400 leading-[24px]">
        Download the app to access everything Nike.
         <span className="weight-500 leading-[24px] font-semibold underline block md:inline">Get Your Great</span>
        </div>

     <img src="Image.png" alt="shoes" className="w-full h-auto md:h-[977px] object-cover rounded-md mb-8" data-aos="fade-up" /> 
   
      <div className="flex flex-col text-center items-center space-y-4 mb-8">

        <h6 className="font-medium weight-500 leading-[24px]">
        First Look</h6>
    
        <h1 className="font-bold weight-500 leading-[24px] text-xl md:text-2xl ">
        NIKE AIR MAX PULSE</h1>
   
        <p className="font-medium weight-400 leading-[24px] text-sm md:text-base">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse 
        -designed to push you past your limits and help you go to the max.</p>

      <div className="flex gap-4 mt-4">
        <button className="bg-black text-white px-4 py-2 rounded-full">Notify Me</button>
        <button className="bg-black text-white px-4 py-2 rounded-full">Shop Air Max</button>
      </div> 

   </div>

{/* 1st div */}
   <div className="flex justify-between items-center mb-6">
   
      <h1 className="font-bold h-[27px] w-[161.59px] text-lg weight-500 leading-[28px]">
      Best of Air Max</h1>

      <div className="flex gap-2">
        <h6 className="flex font-[helvetica neue] mx-4 weight-500 leading-[24px]">Shop
        <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
        <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/></h6>
      </div>

    </div>

{/* images */}
   <div className="flex flex-wrap justify-center md:justify-around gap-6 py-6 ">

{/* img1 */}
      <div className="w-full md:w-[441.36px] h-auto md:h-[441.36px]" >
        <img src="Image (1).png" alt="shoe1" className="w-full md:w-[441.36px] h-[441.36px] object-cover rounded-lg" data-aos="fade-up"/>
        
          <div className="flex justify-between items-center mt-2">
            <h4 className="flex font-bold text-sm">Nike Air Max Pulse</h4>
            <h4 className="font-medium text-base flex items-center">
            <FaRupeeSign  className="mr-1"/>13 995</h4>
          </div>

          <p className="text-gray-500">Women&apos;s Shoes</p>
      </div>

{/* img2 */}
      <div className="w-full md:w-[441.36px] h-auto md:h-[441.36px]" >
        <img src="Image (1).png" alt="shoe2" className="w-full md:w-[441.36px] h-[441.36px] object-cover rounded-lg" data-aos="fade-up"/>
      
          <div className="flex justify-between">
            <h4 className="flex font-bold text-sm">Nike Air Max Pulse</h4>
            <h4 className="font-medium text-base flex items-center justify-center">
            <FaRupeeSign  className="mr-1"/>13 995</h4>
          </div>
          <p className="text-gray-500">Men&apos;s Shoes</p>
      </div>

{/* img3 */}
      <div className="w-full md:w-[441.36px] h-auto md:h-[441.36px]">
        <img src="Image (2).png" alt="shoe3" className="w-full md:w-[441.36px] h-[441.36px] object-cover rounded-lg" data-aos="fade-up"/>
        
          <div className="flex justify-between">
            <h4 className="flex font-bold text-sm">Nike Air Max 97 SE</h4>
            <h4 className="font-medium text-base flex items-center justify-center">
            <FaRupeeSign  className="mr-1"/>16 995</h4>
          </div>
          <p className="text-gray-500">Men&apos;s Shoes</p>
      </div>

  </div>

{/* featured div */}
      <h1 className="font-bold h-[27px] w-[161.59px] text-lg weight-500 leading-[28px] mt-8 mb-4">Featured</h1>
      <img src="Image (3).png" alt="featured" className="w-full h-auto md:h-[700px] object-cover rounded-md mb-8" data-aos="fade-up"/>
    
      <div className="text-center space-y-3">
      
      <h1 className="font-bold text-3xl md:text-4xl leading-[60px]">STEP INTO WHAT FEELS GOOD</h1>
      
      <p className="text-sm md:text-base leading-[24px]">
        Cause everyone should know the feeling of running in that perfect pair</p>

      <button className=" bg-black text-white pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] rounded-full">Find Your Shoe</button>
    
    </div>

{/* gear up div */}
      <h1 className="font-bold h-[27px] w-[161.59px] text-lg weight-500 leading-[28px] mt-8 mb-4">Gear Up</h1>

      <div className="flex flex-wrap justify-center md:justify-between gap-6 py-6">

{/* Shop Men's */}
      <div className="w-full md:w-[666px] h-auto md:h-[509px]">

{/* heading + arrow icons */}
      <div className="flex justify-end gap-2 ">
        <h4 className="font-bold text-md">Shop Men&apos;s</h4>
        <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
         <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      </div>

{/* image div */}
      <div className="flex flex-wrap justify-center md:justify-between gap-2">

  {/* image1 */}
      <div className="w-full md:w-[300px] h-auto md:h-[300px]">
        <img src="Image (4).png" alt="Half sleeves" className="w-full md:w-[300px] h-auto md:h-[300px] object-cover rounded-lg" data-aos="fade-up" />

        <div className="flex font-semibold md:justify-between items-center mt-5 ">
          <h1 className="font-semibold text-sm">Nike Dri-FIT ADV TechKnit Ultra</h1>
          <h1 className="flex items-center text-sm"><FaRupeeSign  className="mb-0.5"/>3 895</h1>
        </div>

        <p className="text-gray-500">Men&apos;s Short-Sleeves</p>
        <p className="text-gray-500">Running Top</p>
      </div>

  {/* image2 */}
      <div className="w-full md:w-[300px] h-auto md:h-[300px]">
        <img src="Image (5).png" alt="Shorts" className="w-full md:w-[300px] h-auto md:h-[300px] object-cover rounded-lg" data-aos="fade-up" />

        <div className="flex font-semibold md:justify-between items-center mt-5 ">
          <h1 className="font-semibold text-sm">Nike Dri-FIT Challenger </h1>
          <h1 className="flex items-center text-sm"><FaRupeeSign  className="mb-0.5"/>2 495</h1>
      </div>
    
        <p className="text-gray-500">Men&apos;s 8cm (approx.) 2-in-1 Versatile Short</p>
      </div>

    </div>

  </div>

{/* Shop Women's */}
    <div className="w-full md:w-[666px] h-auto md:h-[509px]">

{/* heading + arrow icons */}
    <div className="flex justify-end gap-2 ">
      <h4 className="font-bold text-md">Shop Women&apos;s</h4>
      <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
    </div>

{/* image div */}
    <div className="flex flex-wrap justify-center md:justify-between gap-2">

  {/* image1 */}
    <div className="w-full md:w-[300px] h-auto md:h-[300px]">
      <img src="Image (6).png" alt="Full sleeves" className="w-full md:w-[300px] h-auto md:h-[300px] object-cover rounded-lg" data-aos="fade-up" />

      <div className="flex font-semibold md:justify-between items-center mt-5 ">
        <h1 className="font-semibold text-sm">Nike Dri-FIT ADV Run Division </h1>
        <h1 className="flex items-center text-sm"><FaRupeeSign  className="mb-0.5"/>5 295</h1>
      </div>

      <p className="text-gray-500">Women&apos;s Long-Sleeves</p>
      <p className="text-gray-500">Running Top</p>
    </div>

  {/* image2 */}
      <div className="w-full md:w-[300px] h-auto md:h-[300px]">
        <img src="Image (7).png" alt="leggings" className="w-full md:w-[300px] h-auto md:h-[300px] object-cover rounded-lg" data-aos="fade-up"/>

      <div className="flex font-semibold md:justify-between items-center mt-5">
        <h1 className="font-semibold text-sm">Nike Fast </h1>
        <h1 className="flex items-center text-sm"><FaRupeeSign  className="mb-0.5"/>3 795</h1>
      </div>

        <p className="text-gray-500">Women&apos;s Mid-Rise 7/8 Running</p>
        <p className="text-gray-500">Leggings with Pocket</p>
      </div>

  </div>

  </div>

</div>

{/* don't miss */}
      <h1 className="font-bold h-[27px] w-[161.59px] text-lg weight-500 leading-[28px] mt-8 mb-4">Don&apos;t Miss</h1>
      <img src="Image (8).png" alt="coat" className="w-full h-auto md:h-[700px] object-cover rounded-md mb-8" data-aos="fade-up"/>

      <div className="text-center space-y-3">
        <h1 className="font-bold text-4xl leading-[60px]">FLIGHT ESSENTIALS</h1>
        <p className="text-sm leading-[24px]">You built-to-last, all week wears-but with style only Jordan Brand can deliver</p>
        <button className="bg-black text-white pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] rounded-full">Shop</button>
      </div>

{/* the essentials */}
      <h1 className="font-bold h-[27px] w-[161.59px] text-lg weight-500 leading-[28px]">The Essentials</h1>
   
      <div className="flex flex-wrap justify-center md:justify-around gap-4 py-6">

      <div className="relative w-full md:w-[440px] h-auto md:h-[540px]">

        <img src="ess1.png" alt="Men's" className="w-[44opx] h-[540px] object-cover rounded-lg" data-aos="fade-up"/>
        <button className="absolute top-[450px] left-10 bg-white text-black px-5 py-2 rounded-full shadow-md font-semibold-">Men&apos;s</button>
      </div>

      <div className="relative w-full md:w-[440px] h-auto md:h-[540px]">

        <img src="ess2.png" alt="Women's" className="w-[44opx] h-[540px] object-cover rounded-lg" data-aos="fade-up"/>
        <button className="absolute top-[450px] left-10 bg-white text-black px-5 py-1 rounded-full shadow-md font-semibold-">Women&apos;s</button>
      </div>

      <div className="relative w-full md:w-[440px] h-auto md:h-[540px]">
        
        <img src="ess3.png" alt="kids" className="w-[440px] h-[540px] object-cover rounded-lg" data-aos="fade-up"/>
        <button className="absolute top-[450px] left-10 bg-white text-black px-5 py-1 rounded-full shadow-md font-semibold-">Kids</button>
      </div>
  </div>
    
{/* ending */}
<div className='container grid justify-between items-center grid-cols-1 md:grid-cols-4 text-base p-16 '>
  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] w-[38.45px] h-[17px] '>Icons</h4>
      <ul className='space-y-2 font-[helvetica neue]  w-[184px] h-[144px]'>
        <li>Air Force</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 90</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] w-[38.45px] h-[17px] '>Shoes</h4>
      <ul className='space-y-2 font-[helvetica neue] w-[184px] h-[144px]'>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue]w-[38.45px] h-[17px]'>Clothing</h4>
      <ul className='space-y-2 font-[helvetica neue]  w-[184px] h-[144px] '>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] w-[38.45px] h-[17px]'>Kids&apos;</h4>
      <ul className='space-y-2 font-[helvetica neue] w-[184px] h-[144px]'>
        <li>Infant & Toddler Shoes</li>
        <li>Kids&apos; Shoes</li>
        <li>Kids&apos; Jordan Shoes</li>
        <li>Kids&apos; Basketball Shoes</li>
      </ul>
  </div>
</div>

</div>
  );
}


