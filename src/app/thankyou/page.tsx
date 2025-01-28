"use client"
import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

export default function ThankYou() {
  const handleContinueShopping = () => {
    window.location.href = "/"; // Forces a page reload and navigates to the home page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Success Icon and Message */}
      <div className="text-center space-y-6">
        <FaRegCheckCircle className="text-green-500 text-7xl m-auto" />
        <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
        <p className="text-gray-600 text-lg">
          We&apos;ve received your order and will process it shortly.
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-8 w-full max-w-lg text-center">
        <h2 className="font-semibold text-xl">Order Details</h2>
        <p className="text-gray-600 mt-4">
          You can track your order status in your account under "My Orders."
        </p>
      </div>

      {/* Continue Shopping Button */}
      <button
        onClick={handleContinueShopping}
        className="mt-10 bg-black text-white py-3 px-8 rounded-full flex items-center gap-2 hover:bg-gray-800"
      >
        <RiShoppingBagLine className="text-xl" />
        Continue Shopping
      </button>
    </div>
  );
}
