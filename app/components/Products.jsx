const newArrivals = [
  {
    name: "T-shirt with Tape Details",
    price: "₹799",
    image:
      "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/32650057/2025/4/7/8b53c03d-2f21-4b30-aa8a-514d019a46b21744006316093-Tape-Mens-Tee-1121744006315669-1.jpg",
  },
  {
    name: "Skinny Fit Jeans",
    price: "₹799",
    image:
      "https://cdn18.nnnow.com/web-images/large/styles/5VO7ZWYBTYH/1711009557835/1.jpg",
  },
  {
    name: "Checked Shirt",
    price: "₹799",
    image:
      "https://campussutra.com/cdn/shop/files/CSMSSRT7738_1_3b3a4a5e-5da6-48a2-9bb3-c4bfdbe43f3f.jpg?v=1731147468",
  },
  {
    name: "Striped T-shirt",
    price: "₹799",
    image: "https://m.media-amazon.com/images/I/71Pu7Wk+8wL._AC_UY1100_.jpg",
  },
];

const topSelling = [
  {
    name: "Oversized Hoodie",
    price: "₹999",
    image:
      "https://nobero.com/cdn/shop/files/Go_through_front.jpg?v=1732862026",
  },
  {
    name: "Denim Jacket",
    price: "₹1,299",
    image:
      "https://jimmyluxury.in/cdn/shop/files/IMG_5185copy.jpg?v=1765618387&width=2048",
  },
  {
    name: "Casual Shirt",
    price: "₹1,499",
    image:
      "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/f/5/n/xl-1-n-jio-houseofcommon-original-imah9nbhyqputg9z.jpeg?q=90",
  },
  {
    name: "Slim Fit Shirt",
    price: "₹899",
    image:
      "https://wrogn.com/cdn/shop/files/1_920f0125-3396-4dea-a612-aa090f16405d.webp?v=1738837944",
  },
];

export default function Products({ title }) {
  const products = title === "New Arrivals" ? newArrivals : topSelling;

  return (
    <section className="px-10 py-14 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        {title}
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {products.map((item, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-black">{item.name}</h3>
            <p className="font-bold mt-1 text-black">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
