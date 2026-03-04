"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Swal from "sweetalert2";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
      });

      router.push("/");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md border rounded-xl p-8">

          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 px-4 py-2 border rounded"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* FORGOT PASSWORD */}
          <div className="text-right mb-6">
            <Link href="/forgot-password" className="text-sm underline">
              Forgot Password?
            </Link>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-full"
          >
            Login
          </button>

          {/* SIGNUP LINK */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link href="/signup" className="underline">
              Sign Up
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}