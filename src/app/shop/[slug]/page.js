import products from "@/app/data/products";
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
      <div className="w-full flex flex-col lg:flex-row items-center gap-10 justify-center">
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
        <div className="description lg:w-[40%] flex flex-col gap-5">
          <div>
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <p className="text-gray-500">${product.price}</p>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="h-10 w-10 bg- rounded-full bg-gray-300" />
              <span>Gray</span>
            </div>
            <div>
              <div className="h-10 w-10 bg-[#765E5E] rounded-full " />
              <span>Brown</span>
            </div>
            <div>
              <div className="h-10 w-10 bg-teal-200 rounded-full " />
              <span>Teal</span>
            </div>
          </div>
          <p className="text-[#828282]">
            {` A minimalist, earthy-toned digital illustration featuring a stylized half-face design. Crafted with soft, warm neutrals and clean lines, this artwork blends elegance with introspective expression—perfect for modern spaces, portfolios, or branding visuals.`}
          </p>
          <button className="bg-[#FF4E14] w-full text-white rounded-sm font-semibold py-2 px-7 lg:rounded-sm cursor-pointer ">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
