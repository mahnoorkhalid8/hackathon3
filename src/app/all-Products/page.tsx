"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export interface Product {
  _id: string;
  productName: string;
  category: string;
  colors: string;
  price: string;
  image: string;
  description: string;
}

const ProductList: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "product" && productName match "${searchQuery}*"] {
          _id,
          productName,
          category,
          colors,
          price,
          "image":image.asset->url
        }`;
        const result: Product[] = await client.fetch(query);
        console.log("Products fetched:", result);
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggleWishlist = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);

    let updatedWishlist;
    if (isInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== product._id);
    } else {
      updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item._id === productId);
  };

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Filters</h2>
          <input
            type="text"
            placeholder="Search by product name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <h2 className="text-lg font-bold mt-6">Categories</h2>
          <ul className="space-y-2">
            <li className="text-gray-700 font-medium">Shoes</li>
            <li className="text-gray-700 font-medium">Sports Bras</li>
            <li className="text-gray-700 font-medium">Tops &amp; T-Shirts</li>
            <li className="text-gray-700 font-medium">Hoodies &amp; Sweatshirts</li>
            <li className="text-gray-700 font-medium">Jackets</li>
            <li className="text-gray-700 font-medium">Trousers &amp; Tights</li>
            <li className="text-gray-700 font-medium">Shorts</li>
            <li className="text-gray-700 font-medium">Tracksuits</li>
            <li className="text-gray-700 font-medium">Jumpsuits &amp; Rompers</li>
            <li className="text-gray-700 font-medium">Socks</li>
          </ul>
        </div>

        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.length > 0 ? (
              data.map((product) => (
                <div
                  key={product._id}
                  className="relative border border-gray-200 rounded-2xl p-5 bg-white shadow-lg transition-transform transform hover:scale-105"
                >
                  <div className="w-full h-48 relative mb-5 overflow-hidden rounded-xl">
                    <img
                      alt={product.productName}
                      className="w-full h-full object-contain"
                      src={urlFor(product.image).url()}
                    />
                    <button
                      className="absolute top-2 right-2 text-xl text-red-600 bg-white rounded-full p-1 shadow-md focus:outline-none"
                      onClick={() => toggleWishlist(product)}
                    >
                      {isInWishlist(product._id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>

                  <div className="inline-block bg-red-100 text-red-600 text-xs font-semibold rounded-full px-3 py-1 mb-2">
                    Just In
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {product.productName}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-sm text-gray-500">
                    Available Colors: {product.colors}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mt-3">
                    MRP: {product.price}
                  </p>
                  <a
                    href={`product/${product._id}`}
                    className="block mt-5 bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View Details
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
