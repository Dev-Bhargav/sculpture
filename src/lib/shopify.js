const domain = "x0jy0f-2a.myshopify.com";
const storefrontAccessToken = "67a0618f67f86ccdfa4cbd75ef6bea11";

export async function getProducts() {
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

  const json = await response.json();
  if(json.errors){
    console.error(json.error)
    return[]
  }
   return json.data.products.edges.map(({ node }) => ({
    id: node.id,
    name: node.title,
    slug: node.handle,
    description: node.description,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    currency: node.priceRange.minVariantPrice.currencyCode,
    src: node.images?.edges?.[0].node.url || null, // fallback empty string if no image
    altText: node.images.edges[0]?.node.altText || node.title,
  })); 
}
