import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="flex items-center justify-between px-10 py-4">
        <h1 className="text-2xl font-bold">LOOKEVO.IN</h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/on-sale">On Sale</Link>
          </li>
          <li>
            <Link href="/new-arrivals">New Arrivals</Link>
          </li>
          <li>Brands</li>
        </ul>

        <input
          className="hidden md:block px-4 py-2 rounded-full bg-gray-100 w-72"
          placeholder="Search for products..."
        />
      </nav>
    </header>
  );
}
