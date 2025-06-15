"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { User } from "lucide-react";
import Image from "next/image";

export default function UserStatus() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get current user on mount
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    // Listen to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  if (user) {
    const avatarUrl = user.user_metadata?.avatar_url;

    return (
      <Link
        href="/account"
        title="Account"
        className="inline-block rounded-full overflow-hidden border border-[var(--primary)] w-8 h-8 md:w-11 md:h-11 hover:brightness-90 transition"
      >
        {avatarUrl ? (
          <Image
            width={100}
            height={100}
            src={avatarUrl}
            alt="User Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <User size={22} className="text-[var(--primary)] m-auto" />
        )}
      </Link>
    );
  }

  return (
    <Link
      href="/signup"
      className="bg-[#FF4E14] text-sm sm:text-base text-white font-bold py-2 px-5 rounded-sm cursor-pointer hover:opacity-90"
    >
      Sign Up
    </Link>
  );
}
