export default function Categories() {
  const categories = ["Casual", "Formal", "Party", "Gym"];

  return (
    <section className="px-10 py-14 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((c) => (
          <div
            key={c}
            className="bg-gray-100 h-48 rounded-xl flex items-start p-6 font-bold text-xl text-black"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
