import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 md:gap-10  p-5 md:mt-10 w-dvw h-[80vh] items-center relative">
        <div className="w-full md:w-3/4 flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl leading-7 md:leading-none py-2 md:text-4xl font-bold">
            Discover the Art of Sculpture – Where Every Shape Tells a Story
          </h2>
          <p className="opacity-50 leading-[1.3] text-lg md:px-56">
            Explore breathtaking sculptures, meet talented artists, and
            experience art in 3D and AR.
          </p>
          <button className="text-[#FF4E14] font-semibold border-1 border-[#FF4E14] px-2 py-1 rounded-sm cursor-pointer hover:bg-[#FF4E14] hover:text-black transition">
            <Link href="/shop">Explore Gallery</Link>
          </button>
        </div>
        <div className="h-full w-full md:w-3/4 relative">
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt="Picture of an artist"
            src="/images/artist.png"
          />
        </div>
      </div>
    </div>
  );
}
