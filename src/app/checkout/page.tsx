"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { RiShoppingBagLine } from "react-icons/ri";
import { TbMessage2Minus } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa6";
import { PiMailbox } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const { cart, clearCart } = useCart(); // Access clearCart function
  const router = useRouter(); // Initialize useRouter for navigation

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pan: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const { firstName, lastName, email, phone, pan, addressLine1 } = formData;

    if (!firstName || !lastName || !email || !phone || !pan || !addressLine1) {
      toast.error("All required fields must be filled!");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("Order placed successfully!");

    // Delay the redirect and clear cart data to show the toast message
    setTimeout(() => {
      clearCart(); // Clear the cart state
      localStorage.removeItem("cart"); // Remove cart data from localStorage
      window.location.href = "/thankyou"; // Navigate to the thank-you page
    }, 2000); // Set a 2-second delay
  };

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 md:px-6 bg-gray-50">
        <img src="nike.png" alt="logo" className="w-10 h-10 md:w-12 md:h-12" />
        <div className="flex gap-4 md:gap-6 text-sm md:text-base text-black">
          <span>
            <p>000 800 100 9538</p>
          </span>
          <span>
            <TbMessage2Minus className="text-xl" />
          </span>
          <span>
            <RiShoppingBagLine className="text-xl" />
          </span>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 md:space-x-10 mx-auto p-4 md:p-8">
        {/* Left Section */}
        <div className="md:w-[40%] space-y-6">
          <h1 className="font-semibold text-xl md:text-2xl">
            How would you like to get your order?
          </h1>
          <p className="text-sm md:text-lg text-gray-400 mt-2">
            Customs regulation for India require a copy of the recipient&apos;s
            KYC. The address on the KYC needs to match the shipping address.{" "}
            <a href="#" className="hover:text-black">
              <u>Learn More</u>
            </a>
          </p>
          <div className="flex border-2 border-black text-lg font-semibold items-center gap-2 p-4 mt-4 rounded-md">
            <PiMailbox className="my-1 text-xl" />
            <h2>Deliver It</h2>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <h1 className="font-semibold text-3xl py-4 mt-5">
              Enter your name and address:
            </h1>
            <fieldset className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
            </fieldset>

            <fieldset className="space-y-2">
              <input
                type="text"
                placeholder="Address Line 1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
              <input
                type="text"
                placeholder="Address Line 2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                name="addressLine3"
                value={formData.addressLine3}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
            </fieldset>

            {/* Contact Info */}
            <h1 className="font-semibold text-3xl py-4 mt-5">
              What&apos;s your contact information?
            </h1>
            <fieldset className="mt-3">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
            </fieldset>
            <fieldset className="mt-3">
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
            </fieldset>

            {/* PAN */}
            <h1 className="font-semibold text-3xl py-4 mt-5">What&apos;s your PAN?</h1>
            <fieldset className="mt-3">
              <input
                type="text"
                placeholder="PAN"
                name="pan"
                value={formData.pan}
                onChange={handleInputChange}
                className="text-black w-full p-3 border-2 border-black rounded-md mb-3"
              />
            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gray-100 text-gray-500 mt-20 text-center w-full py-5 mb-8 text-xl rounded-full"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[30%] space-y-3">
          <h1 className="font-semibold text-2xl">Order Summary</h1>
          <ul className="space-y-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <li key={item.id} className="flex items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-[128px] h-[128px] rounded-md border mr-4"
                  />
                  <div>
                    <p className="font-normal text-sm">{item.name}</p>
                    <p className="text-gray-400">Qty: {item.quantity}</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </ul>
          <hr />
          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-gray-400">
              <p>Subtotal:</p>
              <p className="flex">
                <FaRupeeSign className="mr-1 my-1" />
                {cart
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 w-full bottom-0 text-center md:text-left">
        <div className="text-gray-400 text-sm md:text-base">
          © 2025 Nike, Inc. All Rights Reserved.
        </div>
        <ul className="flex gap-6 mt-4 text-gray-400">
          <li>Guides</li>
          <li>Terms of Use</li>
          <li>Terms of Sale</li>
          <li>Company Details</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}
