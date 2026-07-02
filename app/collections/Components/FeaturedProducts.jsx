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
      image: "/ab2.jpeg",
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
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#b08d57] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-100 object-scale-down hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;