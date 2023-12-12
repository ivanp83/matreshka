const builder = require("xmlbuilder");

export async function GET() {
  const p = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`);
  const products = await p.json();
  const c = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/categories`
  );
  const categories = await c.json();

  const feed = builder.create("yml_catalog", {
    encoding: "utf-8",
    version: "1.0",
    date: "new Date().toISOString()",
  });

  const shop = feed
    .ele("shop")
    .ele("name", "Матрёшка")
    .up()
    .ele("company", "Цветочная мастерская ")
    .up()
    .ele("url", process.env.NEXT_PUBLIC_DOMAIN)
    .up()
    .ele("currencies", { id: "RUB", rate: "1" })
    .up();
  const cats = shop.ele("categories");
  for (let i = 0; i < categories.length; i++) {
    cats
      .ele("category", { id: categories[i].id }, categories[i].name)

      .up();
  }
  shop.ele("categories").ele("category", { id: "2731707003" }, "Худи");
  shop.ele("delivery-options").ele("option", { cost: 400, days: "1" });
  shop.ele("delivery-options").ele("option", { cost: 1200, days: "1" });

  const offers = shop.ele("offers");

  for (let i = 0; i < products.length; i++) {
    offers
      .ele("offer", {
        id: products[i].name + " " + products[i]._id,
        available: "true",
      })
      .ele("url", `${process.env.NEXT_PUBLIC_DOMAIN}/product/${products[i].id}`)
      .up()
      .ele("price", products[i].price)
      .up()
      .ele("currencyId", "RUB")
      .up()
      .ele("categoryId", products[i].category_id)
      .up()
      .ele(
        "picture",
        `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${products[i].big}`
      )
      .up()
      .ele("name", products[i].name)
      .up()
      .ele("description", products[i].name)
      .up();
  }
  const result = feed.end({ pretty: true });

  return new Response(result, { headers: { "Content-Type": "text/xml" } });
}
