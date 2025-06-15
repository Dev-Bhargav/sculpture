import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import ShopButton from "./components/ShopButton";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <section className="flex mx-4">
        <div className="w-dvw flex h-fit flex-col lg:flex-row gap-4 md:gap-8 p-5 md:mt-5 items-center justify-around">
          <div className="w-full max-w-[550px] lg:w-3/4 md:w-fit flex  flex-col items-center lg:items-start gap-1 md:gap-2 text-center lg:text-start">
            <h2 className="text-[26px] sm:text-3xl leading-7 md:leading-none py-2 md:text-4xl font-black">
              Shop handcrafted sculptures that make a statement
            </h2>
            <p className="opacity-50 text-sm px-5 sm:px-20 lg:px-0 leading-[1.3] sm:text-base">
              Each Sculpture is Handcrafted with Care, So You Can Bring Home
              More Than Just Art — Bring Home Meaning.
            </p>
            <div className="flex items-center gap-4 py-2">
              <Link
                href="/about-us"
                className="text-sm sm:text-base underline underline-offset-2 text-[var(--primary)]"
              >
                Learn More
              </Link>
              <ShopButton />
            </div>
          </div>
          <div className="w-fit h-fit">
            <Image
              src="/images/home-banner.jpg"
              width={1000}
              height={400}
              className="w-full max-w-[1000px] h-auto object-cover rounded-sm"
              alt="Home Banner"
            />
          </div>
        </div>
      </section>
      <section className="mx-4 mt-10">
        <div>
          <div className="flex justify-between px-3 gap-4">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl lg:text-3xl font-bold"> New Arrival</h1>
              <Link
                className="text-sm lg:text-base inline-flex items-center gap-1 text-[var(--primary)] underline underline-offset-2"
                href="/shop"
              >
                See all <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 py-5 px-[20px] mx-3 overflow-x-auto no-scrollbar">
            {products.map((product, index) => (
              <Link
                href={`/shop/${product.slug}`}
                className="cursor-pointer"
                key={index}
              >
                <div className="h-fit w-[200px] lg:w-[350px] bg-[#F2F2F2] rounded-t-sm px-2 py-4 flex justify-center">
                  <Image
                    src={product.src}
                    height={200}
                    width={200}
                    className="h-[180px] lg:h-[250px] w-[200px] object-contain"
                    alt={product.name}
                  />
                </div>
                <div className="rounded-b-sm px-2">
                  <p className="text-lg">{product.name}</p>
                  <p className="text-md opacity-70">₹{product.price}.00</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
