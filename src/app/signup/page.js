"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      seterrorMsg(error.message);
    } else {
      seterrorMsg("Check your email for confirmation!");
    }
  };

  return (
    <section className="flex items-center justify-center px-4 mt-12">
      <div className="max-w-md w-full bg-white rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        {errorMsg && (
          <p className="text-red-500 text-sm text-center mb-4">{errorMsg}</p>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <GoogleSignInButton text="Sign Up with Google"/>
        </div>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[var(--primary)] underline">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
}
