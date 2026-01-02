"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FiltersSidebar from "../components/FiltersSidebar";
import { newArrivals } from "../data/products";

export default function NewArrivalsPage() {
  const [filters, setFilters] = useState({
    price: 3000,
    color: "",
    size: "",
    style: "",
  });

  const [sort, setSort] = useState("");

  const filteredProducts = newArrivals
    .filter((p) => {
      return (
        p.price <= filters.price &&
        (filters.color === "" || p.color === filters.color) &&
        (filters.size === "" || p.size.includes(filters.size)) &&
        (filters.style === "" || p.style === filters.style)
      );
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />

      <section className="px-10 py-10 flex gap-8">
        <FiltersSidebar filters={filters} setFilters={setFilters} />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">New Arrivals</h1>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="">Sort by</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((item, i) => (
              <Link
                key={i}
                href={`/product/${item.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className="bg-gray-100 p-6 rounded-xl cursor-pointer hover:shadow-md transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-40 w-full object-cover rounded mb-4"
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="font-bold mt-1">₹{item.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="mt-10 text-gray-500">
              No products match the selected filters.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
