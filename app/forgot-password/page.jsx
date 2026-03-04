"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");

  const handleReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:3000/reset-password",
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: "Check your email to reset password.",
      });
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md border rounded-xl p-8">

          <h1 className="text-3xl font-bold mb-6 text-center">
            Reset Password
          </h1>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-6 px-4 py-2 border rounded"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={handleReset}
            className="w-full bg-black text-white py-3 rounded-full"
          >
            Send Reset Link
          </button>

        </div>
      </section>

      <Footer />
    </>
  );
}