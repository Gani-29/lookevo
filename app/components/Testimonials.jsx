export default function Testimonials() {
  const users = ["Sarah M.", "Alex K.", "James L."];

  return (
    <section className="px-10 py-14 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-black">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user}
            className="border border-gray-200 p-6 rounded-xl bg-white"
          >
            ⭐⭐⭐⭐⭐
            <h3 className="font-bold mt-2 text-black">{user}</h3>
            <p className="text-gray-600 text-sm mt-2">
              Great quality and amazing style selection.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
