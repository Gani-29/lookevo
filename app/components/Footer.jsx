export default function Footer() {
  return (
    <footer className="px-10 py-14 text-sm text-gray-600 bg-white">
      <div className="grid md:grid-cols-5 gap-6">
        <div>
          <h3 className="font-bold text-black">LOOKEVO.IN</h3>
          <p className="mt-2">Clothes that suit your style and confidence.</p>
        </div>

        <div>
          <h4 className="font-bold text-black">COMPANY</h4>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <h4 className="font-bold text-black">HELP</h4>
          <p>Support</p>
          <p>Delivery</p>
        </div>

        <div>
          <h4 className="font-bold text-black">FAQ</h4>
          <p>Orders</p>
          <p>Payments</p>
        </div>

        <div>
          <h4 className="font-bold text-black">RESOURCES</h4>
          <p>Free eBooks</p>
          <p>Tutorials</p>
        </div>
      </div>

      <p className="text-center mt-10">
        © 2000–2023 Lookevo.in. All rights reserved.
      </p>
    </footer>
  );
}
