"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

type Product = {
    _id: string;
    productName: string;
    imageUrl: string;
    colors: string[];
    price: number;
    description: string;
    category: string;
    inventory: number;
};

export default function Product() {
    const [products, setProducts] = useState<Product[]>([]);    
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query = ` 
                  *[_type == "product"]{
                    _id,
                    productName,
                    "imageUrl": image.asset->url,
                    colors,
                    price,
                    description,
                    category,
                    inventory
                  }
                `;
                const fetchedProducts = await client.fetch(query);
                setProducts(fetchedProducts);
            }
            catch (error) {
                console.error("Error fetching products:", error);
                setError("An error occurred while fetching products");
            }
        };
        fetchProducts();
    }, []);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {error && <p>{error}</p>}
            {products.map((product) => (
                <Link href={`/product/${product._id}`} key={product._id}>
                    <div className="border p-4">
                        <img src={product.imageUrl} alt={product.productName} className="w-full mb-4" />
                        <h2 className="text-lg font-medium">{product.productName}</h2>
                        <p>{product.colors.join(", ")}</p>
                        <p>Rs. {product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
