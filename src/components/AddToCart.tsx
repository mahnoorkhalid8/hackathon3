"use client";

import { useState } from "react";
import { client } from "@/sanity/lib/client";
import React, { useEffect } from "react";

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  color: number;
  type: string;
  status: string;
  count?: number;
}

const AddToCart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
                _id,
                productName,
                category,
                price,
                inventory,
                colors, 
                status,
                description,
                "image": image.asset._ref
                }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, count: 1 }];
    });
  };
  const removeFromCart = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.count! > 1
            ? { ...item, count: item.count! - 1 }
            : item
        )
        .filter((item) => item.count! > 0)
    );
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex gap-2 items-center">
            <div>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="flex justify-start gap-3 bg-black text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-gray-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeFromCart(product.id)}
              className="flex justify-start gap-3 bg-black text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-gray-300"
            >
              Remove From Cart
            </button>
          </li>
        ))}
      </ul>

      {/* cart item section */}
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex gap-2 items-center">
              <div>
                <h2>{item.name}</h2>
                <p>
                  Rs.{item.price} x {item.count} = Rs.
                  {(item.price * (item.count || 1)).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="flex justify-start 
                        gap-3 bg-green-500 text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-green-700"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="flex justify-start 
                        gap-3 bg-green-500 text-white font-poppins leading-[24px] weight-[500] px-4 py-2 my-3 mx-4 rounded-full hover:bg-green-700"
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AddToCart;
