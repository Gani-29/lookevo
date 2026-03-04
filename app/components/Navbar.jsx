"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();

  /* GET USER */

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

  /* LOGOUT */

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, Logout",
    });

    if (confirm.isConfirmed) {
      await supabase.auth.signOut();
      window.location.reload();
    }
  };

  /* GET FIRST LETTER */

  const firstLetter = user?.email?.charAt(0).toUpperCase();

  return (
    <header className="border-b">

      {/* NAVBAR */}
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* CART */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="cursor-pointer" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* USER PROFILE */}
          {!user ? (
            <Link
              href="/login"
              className="border px-4 py-1 rounded"
            >
              Login
            </Link>
          ) : (
            <div className="relative">

              {/* CIRCLE AVATAR */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold"
              >
                {firstLetter}
              </button>

              {/* DROPDOWN */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg p-3">

                  <p className="text-sm mb-2 truncate">
                    {user.email}
                  </p>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 hover:underline"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>
      </nav>
    </header>
  );
}