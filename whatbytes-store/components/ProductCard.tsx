"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded p-4 shadow">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover mb-2"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
      </Link>
      <p className="text-green-600">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
