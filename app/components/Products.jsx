const newArrivals = [
  {
    name: "T-shirt with Tape Details",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    name: "Skinny Fit Jeans",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
  },
  {
    name: "Checked Shirt",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    name: "Striped T-shirt",
    price: "₹799",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a",
  },
];

const topSelling = [
  {
    name: "Oversized Hoodie",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
  },
  {
    name: "Denim Jacket",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  },
  {
    name: "Casual Shirt",
    price: "₹1,499",
    image:
      "https://www.slikk.club/_next/image?url=https%3A%2F%2Fslikk-dev-assets-public.s3.amazonaws.com%2Fproduct%2F420x315%2F21131f2ddaf84293bc005386a1c4b5e5catalogimages2F0924SHWFYD06012F0924SHWFYD06011_3462404fd7334f8b88e285a6b6e70a8f.webp&w=256&q=75",
  },
  {
    name: "Slim Fit Shirt",
    price: "₹899",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
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
