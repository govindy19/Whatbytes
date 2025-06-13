"use client";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  category?: string;
}

export default function ProductClientSection({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col gap-4 justify-center w-full md:w-1/2">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-xl text-green-700">₹{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded w-fit"
      >
        Add to Cart
      </button>
    </div>
  );
}
