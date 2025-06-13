"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Filters */}
        <div>
          <h4 className="text-lg font-bold mb-4">Filters</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">@electronics</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">@wearables</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="hover:text-white/70" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="hover:text-white/70" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="hover:text-white/70" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-white/70 py-4 border-t border-white/20">
        © 2025 Whatbytes. All rights reserved.
      </div>
    </footer>
  );
}
