import { NextResponse } from "next/server";

export async function GET() {
  try {
    const domain = "x0jy0f-2a.myshopify.com";
    const storefrontAccessToken = "67a0618f67f86ccdfa4cbd75ef6bea11";

    const response = await fetch(`https://${domain}/api/2023-01/graphql.json`, {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          {
            products(first: 20) {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from Shopify", status: response.status },
        { status: response.status }
      );
    }

    const data = response.json();

    const products = data.data.products.edges.map(({ node }) => ({
      id: node.id,
      name: node.title,
      slug: node.handle,
      description: node.description,
      price: parseFloat(node.priceRange.minVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
      src: node.images?.edges?.[0]?.node?.url || null,
      altText: node.images?.edges?.[0]?.node?.altText || node.title,
    }));

    return NextResponse.json(products);
  } catch (err) {
    console.error("Unexpected server error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
