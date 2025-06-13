"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div className="flex gap-3 items-center">
        <Image
          src={item.image}
          alt={item.title}
          width={64}
          height={64}
          className="object-cover rounded"
        />
        <div>
          <h4 className="font-semibold">{item.title}</h4>
          <p>₹{item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          className="w-16 border rounded px-1 text-center"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, +e.target.value)}
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
