'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${params.id}`);
                const data = await res.json();

                if (data.success) {
                    setProduct(data.product);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (params?.id) {
            fetchProduct();
        }
    }, [params]);

    if (!product) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    background: "#0a0a0a",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                }}
            >
                Loading Product...
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#0a0a0a",
                color: "white",
                padding: "120px 60px",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "center",
                }}
            >
                {/* Image Section */}
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: "100%",
                            maxHeight: "750px",
                            objectFit: "cover",
                            borderRadius: "20px",
                        }}
                    />
                </div>

                {/* Content Section */}
                <div>
                    <p
                        style={{
                            color: "#b08d57",
                            textTransform: "uppercase",
                            letterSpacing: "3px",
                            marginBottom: "15px",
                        }}
                    >
                        {product.category}
                    </p>

                    <h1
                        style={{
                            fontSize: "60px",
                            marginBottom: "20px",
                            lineHeight: "1.1",
                        }}
                    >
                        {product.title}
                    </h1>

                    <h2
                        style={{
                            color: "#b08d57",
                            fontSize: "38px",
                            marginBottom: "30px",
                        }}
                    >
                        ₹{product.price}
                    </h2>

                    <p
                        style={{
                            color: "#cccccc",
                            lineHeight: "1.8",
                            fontSize: "18px",
                            marginBottom: "40px",
                        }}
                    >
                        {product.description}
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                        }}
                    >

                        <Link href={`https://wa.me/919462971381?text=Hello%20I%20want%20to%20order%20${product.title}`} target="_blank" rel="noopener noreferrer">
                            <button
                                style={{
                                    padding: "16px 40px",
                                    background: "#b08d57",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                }}
                            >
                                Order on WhatsApp
                            </button>
                        </Link>

                        <button
                            style={{
                                padding: "16px 40px",
                                background: "transparent",
                                color: "white",
                                border: "1px solid #444",
                                borderRadius: "10px",
                                cursor: "pointer",
                                fontSize: "16px",
                            }}
                        >
                            Buy Now
                        </button>
                    </div>

                    <div
                        style={{
                            marginTop: "50px",
                            paddingTop: "30px",
                            borderTop: "1px solid #222",
                        }}
                    >
                        <p>
                            <strong>Category:</strong> {product.category}
                        </p>

                        <p style={{ marginTop: "10px" }}>
                            <strong>Brand:</strong> Ink & Thread
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}