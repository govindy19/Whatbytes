"use client";
import { useCart } from '@/context/CartContext';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item: CartItem) => (
        <div key={item.id} className="flex justify-between items-center py-2 border-b">
          <div>{item.title}</div>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, +e.target.value)}
            className="w-16 border rounded"
          />
          <div>₹{item.price * item.quantity}</div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-4 font-bold">Total: ₹{total}</div>
    </div>
  );
}
