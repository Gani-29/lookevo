import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b">
      {/* TOP OFFER BAR */}
      <div className="bg-black text-white text-sm text-center py-2 flex justify-center items-center gap-2">
        <span>Sign up and get 20% off your first order.</span>

        <Link href="/signup" className="underline font-medium">
          Sign Up Now
        </Link>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-4">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          LOOKEVO.IN
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/on-sale">On Sale</Link>
          </li>
          <li>
            <Link href="/new-arrivals">New Arrivals</Link>
          </li>
          <li>Brands</li>
        </ul>

        {/* SEARCH */}
        <input
          className="hidden md:block px-4 py-2 rounded-full bg-gray-100 w-72"
          placeholder="Search for products..."
        />

        {/* ICONS */}
        <div className="flex items-center gap-5">
          <Link href="/cart">
            <ShoppingCart className="cursor-pointer" />
          </Link>

          <Link href="/signup">
            <User className="cursor-pointer" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
