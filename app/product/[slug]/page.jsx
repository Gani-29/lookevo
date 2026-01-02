"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { newArrivals, topSelling } from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetailPage() {
  /* ----------------------------------------
     1️⃣ DATA & PARAMS (NO HOOKS YET)
  ---------------------------------------- */
  const { slug } = useParams();
  const { addToCart } = useCart();

  const allProducts = [...newArrivals, ...topSelling];

  const product = allProducts.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  /* ----------------------------------------
     2️⃣ HOOKS (MUST BE AT TOP – SAFE INIT)
  ---------------------------------------- */
  const [activeImage, setActiveImage] = useState(
    product ? product.images[0] : null
  );

  const [selectedColor, setSelectedColor] = useState(
    product ? product.colors[0] : null
  );

  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : "M"
  );

  const [qty, setQty] = useState(1);

  /* ----------------------------------------
     3️⃣ CONDITIONAL RETURN (AFTER HOOKS)
  ---------------------------------------- */
  if (!product) {
    return (
      <>
        <Navbar />
        <p className="p-10 text-xl">Product not found</p>
        <Footer />
      </>
    );
  }

  /* ----------------------------------------
     4️⃣ DERIVED VALUES
  ---------------------------------------- */
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: activeImage,
      color: selectedColor,
      size: selectedSize,
      qty,
    });
  };

  /* ----------------------------------------
     5️⃣ UI
  ---------------------------------------- */
  return (
    <>
      <Navbar />

      <section className="px-10 py-16 grid md:grid-cols-2 gap-14">
        {/* LEFT – IMAGES */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-24 object-cover rounded cursor-pointer border ${
                  activeImage === img ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full rounded-xl"
            />
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div>
          <h1 className="text-4xl font-extrabold mb-3">
            {product.name.toUpperCase()}
          </h1>

          <div className="text-yellow-400 mb-3">
            ⭐⭐⭐⭐⭐ <span className="text-gray-500">4.5/5</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold">₹{product.price}</span>

            {product.originalPrice && (
              <>
                <span className="line-through text-gray-400">
                  ₹{product.originalPrice}
                </span>
                <span className="text-red-500">-{discount}%</span>
              </>
            )}
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* COLORS */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Select Colors</p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`w-9 h-9 rounded-full border ${
                    selectedColor === c ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="mb-6">
            <p className="font-semibold mb-2">Choose Size</p>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === s ? "bg-black text-white" : "bg-gray-100"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QTY + CART */}
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center bg-gray-100 rounded-full px-5 py-2">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="text-xl"
              >
                −
              </button>
              <span className="mx-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-xl">
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-10 py-3 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
