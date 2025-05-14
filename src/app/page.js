import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-10 p-10 w-dvw h-[80vh] items-center relative">
        <div className="h-full w-3/4 relative">
          <Image
            fill
            objectFit="cover"
            alt="Picture of an artist"
            src="/images/artist.png"
          />
        </div>
        <div className=" w-2/4 flex flex-col items-start gap-3">
          <h2 className="text-3xl font-bold">
            Discover the Art of Sculpture – Where Every Shape Tells a Story
          </h2>
          <p className="opacity-50 leading-[1.3]">
            Explore breathtaking sculptures, meet talented artists, and
            experience art in 3D and AR.
          </p>
          <button className="text-[#FF4E14] font-semibold border-2 border-[#FF4E14] px-2 py-1 rounded-sm cursor-pointer hover:bg-[#FF4E14] hover:text-black transition">
            <Link href="/shop">Explore Gallery</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
