'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Grid() {
    const [products, setProducts] = useState([]);

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

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section
            style={{
                padding: "80px 40px",
                backgroundColor: "#0a0a0a",
                color: "#fff",
            }}
        >
            <h2
                style={{
                    textAlign: "center",
                    fontSize: "48px",
                    marginBottom: "50px",
                }}
            >
                Our Collection
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "30px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                {products.map((product) => (

                    <div
                        key={product._id}
                        style={{
                            backgroundColor: "#151515",
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "1px solid #222",
                        }}
                    >
                        {console.log("Image URL:", product.image)}
                        <img
                            src={product.image || "/no-image.jpg"}
                            alt={product.title}
                            onError={(e) => {
                                e.currentTarget.onerror = null; // infinite loop stop
                                e.currentTarget.src = "/no-image.jpg";
                            }}
                            style={{
                                width: "100%",
                                height: "350px",
                                objectFit: "cover",
                            }}
                        />

                        <div style={{ padding: "20px" }}>
                            <h3>{product.title}</h3>

                            <p
                                style={{
                                    color: "#b08d57",
                                }}
                            >
                                {product.category}
                            </p>

                            <h4>₹{product.price}</h4>

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
                                        marginTop: "10px",
                                        border: "none",
                                        borderRadius: "8px",
                                        backgroundColor: "#b08d57",
                                        color: "#fff",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    View Product
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}