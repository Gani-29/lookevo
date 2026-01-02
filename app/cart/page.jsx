"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const discount = 200;
  const delivery = 68;
  const total = subtotal - discount + delivery;

  return (
    <>
      <Navbar />

      <section className="px-10 py-10 grid md:grid-cols-3 gap-10">
        {/* CART ITEMS */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-6">YOUR CART</h1>

          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="border rounded-xl p-6 h-fit">
          <h2 className="font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount (-20%)</span>
            <span>₹{discount}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Delivery Fee</span>
            <span>₹{delivery}</span>
          </div>

          <div className="flex justify-between font-bold mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              placeholder="Add promo code"
              className="border px-3 py-2 rounded w-full"
            />
            <button className="bg-black text-white px-4 rounded">Apply</button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full">
            Go to Checkout →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
