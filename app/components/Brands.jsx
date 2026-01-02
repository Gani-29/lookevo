export default function Brands() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

  return (
    <section className="bg-black text-white py-6 flex justify-center gap-10 text-xl font-semibold">
      {brands.map((brand) => (
        <span key={brand}>{brand}</span>
      ))}
    </section>
  );
}
