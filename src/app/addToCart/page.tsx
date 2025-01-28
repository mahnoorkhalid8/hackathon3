"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function Shop() {
  const { cart, removeFromCart, updateCartProductQuantity } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from session storage
    const loginStatus = sessionStorage.getItem("isLogin");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row justify-between mx-auto p-4 md:p-8 gap-6">
      {/* left section */}
      <div className="w-full lg:w-[60%] mx-2 md:mx-10">
        <div className="bg-gray-200 border-solid p-4 mb-6">
          <h6 className="font-semibold">Free Delivery</h6>
          <div className="flex justify-between gap-20">
            <p>Applies to orders of Rs 14 000.00 or more.</p>
            <a href="#" className="underline">
              View details
            </a>
          </div>
        </div>

        <h3 className="font-bold text-xl md:text-2xl pt-4">Your Cart</h3>
        <div className="space-y-8 p-6">
          {cart.length === 0 ? (
            <div className="flex flex-wrap gap-4 ">
              <h1>Your Cart is Empty</h1>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-48 h-48 object-cover rounded-md border"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>Price: Rs. {item.price}</p>
                    <div className="flex items-center space-x-4">
                      <button
                        className="bg-black text-white rounded-full font-semibold px-2 py-1"
                        onClick={() =>
                          updateCartProductQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -{" "}
                      </button>

                      <p>Quantity: {item.quantity}</p>
                      <button
                        className="bg-black text-white rounded-full font-semibold px-2 py-1"
                        onClick={() =>
                          updateCartProductQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +{" "}
                      </button>
                    </div>

                    <button
                      className="bg-yellow-300 text-red-600 mt-2 px-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* right section */}
      <div className=" w-full md:w-[30%] mx-2 md:mx-10 space-y-6">
        <h1 className="font-semibold text-2xl lg:text-3xl">Summary</h1>

        <div className="flex justify-between text-gray-700">
          <p>Subtotal</p>
          <p className="flex">Rs {subTotal.toLocaleString()}</p>
        </div>

        <div className="flex justify-between text-gray-700">
          <p>Estimated Delivery & Handling:</p>
          <p>Free</p>
        </div>
        <hr />

        <div className="flex justify-between text-gray-700">
          <p>Total:</p>
          <p className="flex">Rs {subTotal.toLocaleString()}</p>
        </div>
        <hr />

        {/* button */}
        {isLoggedIn ? (
          <Link href="/checkout">
            <button className="bg-black text-white text-center w-full py-4 text-xl md:text-2xl rounded-full my-3">
              Member Checkout
            </button>
          </Link>
        ) : (
          <Link href="/login">
            <button className="bg-blue-500 text-white text-center w-full py-4 text-xl md:text-2xl rounded-full my-3 hover:bg-blue-600 transition duration-200">
              Sign In to Your Account
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
