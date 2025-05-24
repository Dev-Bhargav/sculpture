import StarRating from "@/app/components/StarRating";
import products from "@/app/data/products";
import { Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }) {
  const { slug } = await params;
  const [product] = products.filter((item) => item.slug == slug);
  if (product.length == 0) {
    notFound();
  }

  return (
    <section className="w-full mt-12 lg:mt-20 px-5 sm:px-10 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <div className="image w-fit">
          <div className="bg-[#e2e2e2] xl:max-w-[950px] rounded-sm py-4">
            <Image
              src={product.src}
              height={1000}
              width={1000}
              className="w-[100vw] h-[70vw] lg:h-[37vw] max-h-[350px] lg:max-h-none xl:h-[30vw] xl:max-h-[600px] object-contain"
              alt={product.name}
            />
          </div>
        </div>
        <div className="description lg:w-[40%] flex flex-col gap-4 mb-5">
          <div className="flex lg:block items-start justify-between">
            <div>
              <h1 className="font-bold text-3xl">{product.name}</h1>
              <div className="flex py-1 gap-.5">
                <StarRating rating={product.rating} />
                <p className="text-sm pl-2 font-semibold">{product.rating}</p>
                <span className="pl-1 text-sm font-semibold text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>
            <p className="pt-3 inline-flex gap-1 font-bold text-3xl">
              <span className="text-xl">$</span>
              {product.price}.00
            </p>
          </div>

          <div className="colors">
            <h1 className="mb-2 py-1 font-bold text-lg">Select Color</h1>
            <div className="flex gap-2 text-sm text-center text-[#828282]">
              <div className="px-2">
                <div className="h-9 w-9 bg- rounded-full bg-gray-300 cursor-pointer" />
                <span>Gray</span>
              </div>
              <div>
                <div className="h-9 w-9 bg-[#765E5E] rounded-full cursor-pointer" />
                <span>Brown</span>
              </div>
              <div>
                <div className="h-9 w-9 bg-teal-200 rounded-full cursor-pointer" />
                <span>Teal</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="py-1 font-bold text-lg">Description</h1>
            <p className="text-[#828282] px-2">
              {` A minimalist, earthy-toned digital illustration featuring a stylized half-face design. Crafted with soft, warm neutrals and clean lines, this artwork blends elegance with introspective expression—perfect for modern spaces, portfolios, or branding visuals.`}
            </p>
          </div>
          <button className="bg-[#FF4E14] w-full text-white rounded-sm font-semibold py-2 px-7 lg:rounded-sm cursor-pointer ">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
