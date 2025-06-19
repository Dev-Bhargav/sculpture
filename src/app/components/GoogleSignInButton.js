"use client";

import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";

export default function GoogleSignInButton({ text = "Sign in with Google" }) {
  const handleGoogleSignIn = async () => {
    const redirectUrl = `${window.location.origin}/account`; // ✅ dynamic origin

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });

    if (error) console.error("Google sign-in error", error.message);
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full bg-white border border-gray-300 text-black py-2 px-4 rounded hover:bg-gray-100 flex justify-center items-center gap-2 cursor-pointer"
    >
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        width={20}
        height={20}
      />
      {text}
    </button>
  );
}
