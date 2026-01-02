"use client";

import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { newArrivals, topSelling } from "../../data/products";

export default function ProductDetail() {
  const { slug } = useParams();

  const allProducts = [...newArrivals, ...topSelling];

  const product = allProducts.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!product) {
    return <p className="p-10">Product not found</p>;
  }

  return (
    <>
      <Navbar />

      <section className="px-10 py-16 grid md:grid-cols-2 gap-10">
        <img src={product.image} className="rounded-xl w-full" />

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          {product.originalPrice && (
            <p className="text-gray-500 line-through">
              ₹{product.originalPrice}
            </p>
          )}

          <p className="text-2xl font-bold mb-4">₹{product.price}</p>

          <p className="mb-4">
            Style: <b>{product.style}</b>
          </p>

          <p className="mb-4">Available Sizes: {product.size.join(", ")}</p>

          <button className="bg-black text-white px-8 py-3 rounded-full">
            Add to Cart
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
