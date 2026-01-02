export default function Newsletter() {
  return (
    <section className="bg-black text-white mx-10 rounded-xl p-10 flex flex-col md:flex-row justify-between items-center">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <div className="flex gap-3">
        <input
          className="px-4 py-2 rounded-full text-black"
          placeholder="Enter your email"
        />
        <button className="bg-white text-black px-6 rounded-full">
          Subscribe
        </button>
      </div>
    </section>
  );
}
