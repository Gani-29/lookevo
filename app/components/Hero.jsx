export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-16 bg-[#FAFAFA]">
      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-5xl font-extrabold leading-tight text-black">
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </h2>

        <p className="text-gray-600 mt-4 max-w-md">
          Browse through our diverse range of garments crafted to bring out your
          individuality.
        </p>

        <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:opacity-90">
          Shop Now
        </button>

        <div className="flex gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-black">200+</h3>
            <p className="text-gray-500 text-sm">International Brands</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">2,000+</h3>
            <p className="text-gray-500 text-sm">High-Quality Products</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black">30,000+</h3>
            <p className="text-gray-500 text-sm">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <div className="w-full max-w-lg h-[520px] rounded-xl overflow-hidden">
          <img
            src="https://www.urbanofashion.com/cdn/shop/files/a-full-body-shot-of-a-caucasian-model-we_9YkfJXZiRRCL3NZIhnYEnQ_Kw1EUCafR9WeEDmCoyzu6g.jpg?v=1742898186"
            alt="fashion"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
