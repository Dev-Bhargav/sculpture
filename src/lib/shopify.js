import products from "@/app/data/products";

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if (!res.ok){
      console.log(res.status)
      return products
    }
    console.log("Entering")
    return await res.json();
  } catch (e) {
    console.log("here here")
    console.error(e);
    return [];
  }
}
