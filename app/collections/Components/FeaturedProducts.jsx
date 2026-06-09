import React from "react";

function FeaturedProducts() {

  const products = [
    {
      name: "Black Hoodie",
      price: "₹2999",
      image: "/A1.jpeg",
    },
    {
      name: "Retro Jacket",
      price: "₹3999",
      image: "/A2.jpeg",
    },
    {
      name: "Silver Ring",
      price: "₹899",
      image: "/A3.jpeg",
    },
    {
      name: "Leather Bracelet",
      price: "₹699",
      image: "/LB4.jpeg",
    },
  ];

  return (
    <section className="featured-products">

      <h2 className="featured-title">
        Featured Products
      </h2>

      <div className="products-grid">

        {products.map((item, index) => (

          <div className="product-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="product-image"
            />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;