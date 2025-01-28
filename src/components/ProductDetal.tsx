"use client";

import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "@/context/CartContext";

interface Product {
    _id: string;
    productName: string;
    imageUrl: string;
    colors: string[];
    price: number;
    description: string;
}

export default function ProductDetail ({product} : {product : Product}) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart ({
            id: product._id,
            name: product.productName,
            price: product.price,
            imageUrl: product.imageUrl,
            quantity: 1,
        });

        toast.success (`${product.productName} added to your cart!!!` , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                <img src={product.imageUrl} alt={product.productName} className="w-full h-96 rounde-lg shadow-md"/>
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl font-bold mb-4">{product.productName}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-900 text-lg font-semibold mb-4">Price: Rs.{product.price}</p>

                    {product.colors && (
                        <div className="mb-4">
                            <h2 className="font-medium mb-2">Available Colors:</h2>
                            <div className="flex gap-2">
                                {product.colors.map((color, index) => (
                                    <span key={index} className="block w-6 h-6 rounded-full border border-gray-300" 
                                    style={{backgroundColor: color }}></span>
                                ))}
                            </div>
                        </div>
                    )}
                    <button className="bg-black text-white py-2 px-4 rounded mt-6 hover:bg-gray-300" 
                    onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>

            {/* toast container */}
            <ToastContainer/>
        </div>
    );
};