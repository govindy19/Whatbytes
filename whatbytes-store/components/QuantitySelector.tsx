"use client";
import { useState } from "react";

export default function QuantitySelector({ onChange }: { onChange: (value: number) => void }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (val: number) => {
    const newVal = Math.max(1, val);
    setQuantity(newVal);
    onChange(newVal);
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => handleChange(quantity - 1)} className="border px-2">-</button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        className="w-12 border text-center"
      />
      <button onClick={() => handleChange(quantity + 1)} className="border px-2">+</button>
    </div>
  );
}
