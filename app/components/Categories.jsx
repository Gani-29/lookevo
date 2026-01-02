import Link from "next/link";

export default function Categories() {
  const categories = [
    {
      name: "Casual",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMfEmZnxMkcJ8WzIrSYwevVHg3kDhLyVBuQ&s",
      link: "/new-arrivals?style=Casual",
    },
    {
      name: "Formal",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
      link: "/new-arrivals?style=Formal",
    },
    {
      name: "Party",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      link: "/new-arrivals?style=Party",
    },
    {
      name: "Gym",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
      link: "/new-arrivals?style=Gym",
    },
  ];

  return (
    <section className="px-10 py-14">
      <h2 className="text-3xl font-bold text-center mb-10">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.link}>
            <div className="relative h-48 rounded-xl overflow-hidden cursor-pointer group">
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text */}
              <div className="relative z-10 p-6 text-white font-bold text-2xl">
                {cat.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
