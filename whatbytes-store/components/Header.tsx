import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow bg-blue-500 text-white">
      <Link href="/" className="font-bold text-xl">Whatbytes</Link>
      <input type="text" placeholder="Search..." className="border px-2 py-1 rounded w-1/3" />
      <div className="flex gap-4 items-center">
        <Link href="/cart"><ShoppingCart /></Link>
        <User />
      </div>
    </header>
  );
}
