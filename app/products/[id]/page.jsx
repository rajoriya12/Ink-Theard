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

                const res = await fetch(
                    `/api/products/${params.id}`
                );

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

    const addToCart = () => {

        const email =
            localStorage.getItem("userEmail");

        if (!email) {
            alert("Please login first");
            return;
        }

        const cartKey = `cart_${email}`;

        const cart =
            JSON.parse(
                localStorage.getItem(cartKey)
            ) || [];

        const existingProduct =
            cart.find(
                item => item.id === product._id
            );

        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push({
                id: product._id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            });

        }

        localStorage.setItem(
            cartKey,
            JSON.stringify(cart)
        );

        alert("Added To Cart");
    };

    if (!product) {

        return (

            <div
                style={{
                    minHeight: "100vh",
                    background: "#000",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px"
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
                background: "#000",
                color: "#fff",
                padding: "120px 20px 60px"
            }}
        >

            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(350px,1fr))",
                    gap: "60px",
                    alignItems: "center"
                }}
            >

                {/* IMAGE */}

                <div>

                    <img
                        src={product.image}
                        alt={product.title}
                        style={{
                            width: "100%",
                            borderRadius: "25px",
                            objectFit: "cover",
                            boxShadow:
                                "0 20px 50px rgba(0,0,0,.5)"
                        }}
                    />

                </div>

                {/* CONTENT */}

                <div>

                    <p
                        style={{
                            color: "#b08d57",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            marginBottom: "15px"
                        }}
                    >
                        {product.category}
                    </p>

                    <h1
                        style={{
                            fontSize: "60px",
                            fontWeight: "800",
                            lineHeight: "1.1",
                            marginBottom: "20px"
                        }}
                    >
                        {product.title}
                    </h1>

                    <h2
                        style={{
                            color: "#b08d57",
                            fontSize: "42px",
                            marginBottom: "30px"
                        }}
                    >
                        ₹{product.price}
                    </h2>

                    <p
                        style={{
                            color: "#cfcfcf",
                            lineHeight: "1.9",
                            fontSize: "18px",
                            marginBottom: "40px"
                        }}
                    >
                        {product.description}
                    </p>

                    {/* BUTTONS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            flexWrap: "wrap"
                        }}
                    >

                        <button
                            onClick={addToCart}
                            style={{
                                padding: "15px 35px",
                                background: "#b08d57",
                                color: "#000",
                                border: "none",
                                borderRadius: "12px",
                                fontWeight: "700",
                                cursor: "pointer",
                                fontSize: "16px"
                            }}
                        >
                            Add To Cart
                        </button>

                        <Link
                            href={`/chakeout?id=${product._id}`}
                        >

                            <button
                                style={{
                                    padding: "15px 35px",
                                    background: "transparent",
                                    color: "#fff",
                                    border:
                                        "1px solid #444",
                                    borderRadius: "12px",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                    fontSize: "16px"
                                }}
                            >
                                Buy Now
                            </button>

                        </Link>

                    </div>

                    {/* DETAILS */}

                    <div
                        style={{
                            marginTop: "50px",
                            borderTop:
                                "1px solid #222",
                            paddingTop: "30px"
                        }}
                    >

                        <p
                            style={{
                                marginBottom: "12px"
                            }}
                        >
                            <strong>
                                Category:
                            </strong>{" "}
                            {product.category}
                        </p>

                        <p>
                            <strong>
                                Brand:
                            </strong>{" "}
                            Ink & Thread
                        </p>

                    </div>

                </div>

            </div>

        </div>

    );
}