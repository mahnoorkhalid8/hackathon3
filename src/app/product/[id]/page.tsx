import Product from "@/components/Product";
import ProductDetail from "@/components/ProductDetal";
import { client } from "@/sanity/lib/client";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const productId = (await params).id; // Ensure params.id is extracted correctly
    console.log("params", productId);
  
    const query = `
    *[_type == "product" && _id == $productId][0]{
      _id,
      productName,
      "imageUrl": image.asset->url,
      colors,
      price,
      description,
      status,
      category,
      inventory
    }
  `;
  const product = await client.fetch(query, { productId });
  
  
    
    console.log(product)
  
    if (!product) {
      return <p>Product not found!</p>;
    }
  
    return (
      <div>
        <ProductDetail product={product} />
        <Product />
      </div>
    );
  }
  