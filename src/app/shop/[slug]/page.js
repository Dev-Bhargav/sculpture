import ModelViewer from "@/app/components/ModelViewer";
import { getProducts } from "@/lib/shopify";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }) {
  const { slug } = await params;
  const products = await getProducts();
  const product = products.find((item) => item.slug === slug);

  if (product.length == 0) {
    notFound();
  }

  return (
    <section className="w-full mt-12 px-5 sm:px-10 lg:px-20">
      <div className="w-full flex flex-col lg:flex-row gap-10">
        <div className="image lg:w-1/2">
          <div className="bg-[#e2e2e2] xl:max-w-[950px] rounded-sm py-4">
            <ModelViewer glbSrc="/Duck.glb" alt="Duck" />
          </div>
        </div>
        <div className="description lg:w-[40%] flex flex-col gap-4 mb-5">
          <div className="flex lg:block items-start justify-between">
            <div>
              <h1 className="font-bold text-3xl">{product.name}</h1>
            </div>
            <p className="pt-1 inline-flex gap-1 font-semibold text-xl">
               <span className="text-xl">₹</span>
              {product.price}.00
            </p>
          </div>

          <div className="colors">
            <h1 className="mb-2 py-1 font-bold text-lg">Product Details</h1>
            <div className="px-2 text-[#828282]">
              <p>
                <strong>Material:</strong> Hand-carved sandstone
              </p>
              <p>
                <strong>Size:</strong> 12 × 8 × 5
              </p>
              <p>
                <strong>Weight:</strong> 2.4 kg
              </p>
              <p>
                <strong>Finish:</strong> Matte, natural tone
              </p>
            </div>
          </div>
          <div>
            <h1 className="py-1 font-bold text-lg">Description</h1>
            <p className="text-[#828282] px-2">{product.description}</p>
          </div>
          <button className="bg-[#FF4E14] w-full text-white rounded-sm font-semibold py-2 px-7 lg:rounded-sm cursor-pointer ">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
