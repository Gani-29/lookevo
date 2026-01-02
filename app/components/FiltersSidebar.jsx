"use client";

export default function FiltersSidebar({ filters, setFilters }) {
  // 🔒 SAFETY GUARD (prevents undefined crash)
  if (!filters || !setFilters) {
    return null;
  }

  return (
    <aside className="w-64 bg-white p-6 rounded-xl border border-gray-200">
      <h3 className="font-bold mb-4 flex justify-between items-center">
        Filters
        <span className="text-sm">⚙️</span>
      </h3>

      {/* ---------------- PRICE FILTER ---------------- */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Price</p>

        <input
          type="range"
          min="299"
          max="799"
          value={filters.price}
          onChange={(e) =>
            setFilters({
              ...filters,
              price: Number(e.target.value),
            })
          }
          className="w-full"
        />

        <div className="flex justify-between text-xs mt-1">
          <span>₹299</span>
          <span>₹{filters.price}</span>
        </div>
      </div>

      <hr className="my-4" />

      {/* ---------------- COLOR FILTER ---------------- */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Colors</p>

        <div className="flex flex-wrap gap-2">
          {[
            { name: "black", cls: "bg-black" },
            { name: "white", cls: "bg-white border" },
            { name: "red", cls: "bg-red-500" },
            { name: "blue", cls: "bg-blue-500" },
          ].map((c) => (
            <button
              key={c.name}
              onClick={() =>
                setFilters({
                  ...filters,
                  color: filters.color === c.name ? "" : c.name,
                })
              }
              className={`w-6 h-6 rounded-full ${c.cls} ${
                filters.color === c.name ? "ring-2 ring-black" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* ---------------- SIZE FILTER ---------------- */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Size</p>

        <div className="flex flex-wrap gap-2 text-xs">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              onClick={() =>
                setFilters({
                  ...filters,
                  size: filters.size === size ? "" : size,
                })
              }
              className={`px-3 py-1 rounded-full border ${
                filters.size === size ? "bg-black text-white" : "bg-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="my-4" />

      {/* ---------------- DRESS STYLE FILTER ---------------- */}
      <div className="mb-6">
        <p className="font-semibold mb-2">Dress Style</p>

        {["Casual", "Formal"].map((style) => (
          <p
            key={style}
            className={`cursor-pointer mb-1 ${
              filters.style === style ? "font-bold text-black" : "text-gray-600"
            }`}
            onClick={() =>
              setFilters({
                ...filters,
                style: filters.style === style ? "" : style,
              })
            }
          >
            {style}
          </p>
        ))}
      </div>

      {/* ---------------- CLEAR FILTERS ---------------- */}
      <button
        onClick={() =>
          setFilters({
            price: 799,
            color: "",
            size: "",
            style: "",
          })
        }
        className="mt-4 w-full bg-black text-white py-2 rounded-full"
      >
        Clear Filters
      </button>
    </aside>
  );
}
