'use client';

import { useEffect, useState } from "react";
import Link from "next/link";


export default function Grid() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Our Collection
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#999",
            marginBottom: "50px",
          }}
        >
          Discover premium fashion crafted for modern souls.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {products
            .slice(0, visibleProducts)
            .map((product) => (
              <div
                key={product._id}
                style={{
                  background: "#111",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid #222",
                }}
              >
                <img
                  src={product.image || "/no-image.jpg"}
                  alt={product.title}
                  onError={(e) => {
                    e.currentTarget.src =
                      "/no-image.jpg";
                  }}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <p
                    style={{
                      color: "#b08d57",
                      fontSize: "14px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {product.category}
                  </p>

                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    {product.title}
                  </h3>

                  <h4
                    style={{
                      fontSize: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    ₹{product.price}
                  </h4>

                  <Link
                    href={`/products/${product._id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <button
                      style={{
                        width: "100%",
                        padding: "12px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#b08d57",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      View Product
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {visibleProducts < products.length && (
          <div
            style={{
              textAlign: "center",
              marginTop: "50px",
             
            }}
          >
            <button className="hover:bg-[brown] transition-all"
              onClick={() =>
                setVisibleProducts(
                  visibleProducts + 8
                )
              }
              style={{
                padding: "14px 30px",
                background: "#b08d57",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
               
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}