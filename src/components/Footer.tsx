"use client"
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";


import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black bottom-0 w-full px-6 py-8">

        <div className='flex justify-around  text-white '>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm'>
    {/* 1st column */}
            <div className='font-helvetica-neue font-semibold leading-[32.67px]'>
                <h4>FIND A STORE</h4>
                <h4>BECOME A MEMBER</h4>
                <h4>SIGN UP FOR EMAIL</h4>
                <h4>Send Us Feedback</h4>
                <h4>STUDENT DISCOUNTS</h4>
            </div>
    {/* 2nd column */}
            <div className='space-y-4'>
                <h4 className='font-bold font-helvetica weight-400 leading-[24px] letter-[0.5px]'>GET HELP</h4>
                <ul className='space-y-2 font-helvetica weight-400 leading-[28px]'>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>
                    <li>Payment Options</li>
                    <li>Contact Us On Nike.com Inquiries</li>
                    <li>Contact Us On All Other Inquiries</li>
                </ul>
            </div>
    {/* 3rd column */}
            <div className='space-y-4'>
                <h4 className='font-bold font-helvetica weight-400 leading-[24px] letter-[0.5px]'>ABOUT NIKE</h4>
                <ul className='space-y-2 font-helvetica weight-400 leading-[28px]'>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
            </div>
    {/* 4th column */}
           
        <div className="flex mx-16 space-x-4 mt-2 md:mt-0">
            <Link href=""><FaTwitter className="w-8 h-8 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><FaFacebookF className="w-8 h-8 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><TiSocialYoutubeCircular className="w-8 h-8 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><ImInstagram className="w-8 h-8 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
        </div>

            </div>
        </div>

{/* bottom */}

<div className='flex flex-wrap justify-between gap-6 text-sm text-gray-400 mt-8'>

    <div className="flex gap-6 md:gap-8">

    <h6 className="flex gap-2"><FaLocationDot className="mr-0.5 my-1"/>India</h6>
    <p className="flex gap-2"><FaRegCopyright className="mr-0.5 my-1"/>2023 Nike Inc. All Rights Reserved</p>
    
    </div>

    <div className='flex flex-wrap justify-end gap-6 text-sm text-gray-400'>
        <span>Guides</span>
        <span>Terms of Sale</span>
        <span>Terms of Use</span>
        <span>Nike Privacy</span>
    </div>

    </div>
      
</footer>
</div>
  )
}

export default Footer
