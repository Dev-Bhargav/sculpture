import products from "@/app/data/products";

export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    if(!res.ok){
      return products;
    }
    const data = await res.json();
    return data;
  } catch (e) {
    // console.error("Fetch error:", e);
    return products; // fallback to local data on network/JSON error
  }
}
