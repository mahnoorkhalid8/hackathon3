"use client";

import React from 'react';
import { CiSearch } from "react-icons/ci";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';


const ContactUs = () => {
  return (
    <div className='flex flex-col items-center px-4 md:px-10 lg:px-20 py-8'>
        <h1 className='font-Helvetica text-3xl md:text-4xl text-center font-bold'>GET HELP</h1>
        
        <div className=' relative w-full md:w-1/2 lg:w-[40%] rounded-sm mt-5'>
            <input type="text" placeholder='What can we help you with?' className='w-full p-3 border rounded-md'/>
            <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 trext-grey-400'/>
        </div>

<div className='flex flex-col md:flex-row mt-8 gap-8 w-full'>
        {/* left section */}
    <div className='w-full md:w-[60%]'>
        <h1 className='font-bold text-xl md:text-2xl '>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
        
        <div className='p-5 text-sm  text-gray-800'>

        <p className='mb-4 '>We want to make buying your favourite Nike shoes and gear online fast and
        easy, and we accept the following payment options:</p>

        <p className='mb-4 mx-6'>Visa, Mastercard, Diners Club, Discover, American Express,
        Visa Electron, Maestro</p>

        <p className='mb-4 mx-6'>If you enter your PAN information at checkout, you&apos;ll be able to pay for
        your order with PayTM or a local credit or debit card.</p>

        <p className='mb-4 mx-6'>Apple Pay</p>

        <p className='mb-4'>
        <strong>Nike Members</strong>
         can store multiple debit or credit cards in their profile for faster checkout.
         If you&apos;re not already a Member, <Link href="/join-us" 
         className='underline hover:text-gray-300'>join us</Link> today.</p>

        </div>

        {/* buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/join-us"><button className="bg-black text-white px-6 py-2 rounded-full">JOIN US</button></Link>
            <Link href="/all-Products"><button className="bg-black text-white px-6 py-2 rounded-full">SHOP NIKE</button></Link>
        </div>

        {/* FAQ */}
        <h1 className='font-bold text-xl py-2 mt-6'>FAQS</h1>

        {/* Q/A */}
        <div>
        <h3 className='font-bold py-1'>Does my card need international purchases enabled?</h3>
        <p className='text-sm'>Yes, we recommend asking your bank to enable international purchases on your card. 
        You will be notified at checkout if international purchases need to be enabled.</p>

        <p className='text-sm pt-6'>Please note, some banks may charge a small 
        transaction fee for international orders.</p>

        <h3 className='font-bold pt-6'>Can I pay for my order with multiple methods?</h3>
        <p className='text-sm'>No, payment for Nike orders can&apos;t be split between multiple payment methods.</p>

        <h3 className='font-bold pt-6'>What payment method is accepted for SNKRS orders?</h3>
        <p className='text-sm'>You can use any accepted credit card to pay for your SNKRS order.</p>

        <h3 className='font-bold pt-6'>Why don&apos;t I see Apple Pay as an option?</h3>
        <p className='text-sm'>To see Apple Pay as an option in the Nike App or on Nike.com, you&apos;ll need to use a 
        compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported 
        card in your Wallet. Additionally, you&apos;ll need to use Safari to use Apple Pay on Nike.com.</p>
        </div>

        {/* feedback */}
        <p className='text-xs pt-6 pb-2'>Was this answer helpful?</p>
        <div className='flex gap-2'>
        <BsFillHandThumbsUpFill />
        <BsFillHandThumbsDownFill />
        </div>

        <h4 className='text-gray-400 pt-2'>RELATED</h4>
        <p className=' hover:text-gray-400 py-1'><a href="#"><u>WHAT ARE NIKE&apos;S DELIVERY OPTIONS?</u></a></p>
        <p className=' hover:text-gray-400 py-1'><a href="#"><u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u></a></p>

        </div>

        {/* right section */}
        <div className='w-full md:w-[40%] text-center'>

            {/* contact us */}
                <h1 className='font-semibold text-xl mb-6'>CONTACT US</h1>
                <ImMobile className='mx-auto text-4xl mb-4'/>
                <div className='mb-6 text-sm text-grey-400 '>
                <p>000 800 919 0566</p>
                <p>Products & Orders: 24 hours a day, 7 days a week</p>
                <p>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                </div>

            {/* message */}
                <RiMessage2Fill className='mx-auto text-4xl mb-4'/>
                <div className='mb-6 text-sm text-grey-400'>
                <p>24 hours a day</p>
                <p>7 days a week</p>
                </div>

            {/* mail */}
                <IoMdMail className='mx-auto text-4xl mb-4'/>
                <div className='mb-6 text-sm text-grey-400]'>
                <p>We&apos;ll reply within five business days</p>
                </div>

            {/* location */}
            <img src="location nike.png" alt="location" className='mx-auto text-4xl mb-8'/>
                <div className='mb-10 mx-auto text-sm text-grey-400'>
                <h6>STORE LOCATION</h6>
                <p>Find Nike retail stores near you</p>
                </div>

        </div>
        
</div>

    </div>
  )
}

export default ContactUs
