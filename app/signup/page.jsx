import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md border rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Create Account
          </h1>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 px-4 py-2 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 border rounded"
          />

          <button className="w-full bg-black text-white py-3 rounded-full">
            Sign Up
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span className="underline cursor-pointer">Login</span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
