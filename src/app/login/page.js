"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import GoogleSignInButton from "../components/GoogleSignInButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setError(error.message);
    router.push("/account");
  };

  return (
    <div className=" flex mt-12 justify-center px-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[var(--primary)]">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Login to your account
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-2 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <GoogleSignInButton text="Log in with Google" />
        </div>
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[var(--primary)] underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
