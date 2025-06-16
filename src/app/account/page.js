"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut, User, User2 } from "lucide-react";
import Image from "next/image";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
      } else {
        setUser(user);
      }
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (!user) return <p className="p-6 text-center">Loading...</p>;
  else {
    avatar_url = user.user_metadata?.avatar_url;
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-md">
          <div className="flex flex-col items-center gap-2 mb-6">
            {avatar_url ? (
              <Image
                width={100}
                height={100}
                src={avatar_url}
                alt="User Avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <User size={22} className="text-[var(--primary)] m-auto" />
            )}
            <h1 className="text-2xl font-bold">Welcome</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/shop"
              className="w-full py-2 rounded-md border border-[var(--primary)] text-[var(--primary)] font-medium hover:bg-[var(--primary)] hover:text-white transition-all text-center"
            >
              Shop Now
            </Link>

            <button
              onClick={handleLogout}
              className="w-full py-2 rounded-md border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}
