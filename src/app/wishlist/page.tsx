"use client";

import { useWishlist } from "@/context/WishlistContext";
import React from "react";
import Link from "next/link";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishList } = useWishlist();
  console.log(wishlist);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="font-semibold text-2xl text-gray-600 mb-4">Your Wishlist is Empty</h2>
          <Link href="/">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-200">
              Explore Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-700">Items in your wishlist: {wishlist.length}</h2>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition duration-200"
              onClick={clearWishList}
            >
              Clear Wishlist
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
                <Link href={`/all-Products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={`Image of ${product.name}`}
                    className="w-full h-auto object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 truncate mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-base mb-4">Rs. {product.price}</p>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-200"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
