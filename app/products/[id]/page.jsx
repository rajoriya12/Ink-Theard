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
            <div className="min-h-screen bg-black text-white flex items-center justify-center text-xl">
                Loading Product...
            </div>
        );
    }

    const addToCart = () => {

        const cart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

        const exists = cart.find(
            (item) => item.id === product._id
        );

        if (exists) {
            alert("Product already in cart");
            return;
        }
        const existingProduct = cart.find(
            (item) => item.id === product._id
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
            "cart",
            JSON.stringify(cart)
        );

        alert("Added To Cart");
    };




    return (
        <div className="min-h-screen bg-black text-white px-5 md:px-8 lg:px-12 py-28" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        }}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Product Image */}
                <div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto max-h-187.5 object-cover rounded-2xl"
                    />
                </div>

                {/* Product Content */}
                <div>

                    <p className="text-[#b08d57] uppercase tracking-[3px] mb-4 text-sm">
                        {product.category}
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                        {product.title}
                    </h1>

                    <h2 className="text-[#b08d57] text-3xl md:text-4xl mb-8 font-semibold">
                        ₹{product.price}
                    </h2>

                    <p className="text-gray-300 leading-8 text-base md:text-lg mb-10">
                        {product.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={addToCart}
                            className="retro-btn border border-gray-700 w-full sm:w-auto px-8 py-4 rounded-xl"
                        >
                            Add To Cart
                        </button>

                        <Link
                            href={`/chakeout?id=${product._id}`}
                        >
                            <button className="retro-btn border border-gray-700 w-full sm:w-auto px-8 py-4 rounded-xl">
                                Buy Now
                            </button>
                        </Link>

                    </div>

                    {/* Product Details */}
                    <div className="mt-12 pt-8 border-t border-zinc-800 space-y-3 text-gray-300">

                        <p>
                            <span className="font-semibold text-white">
                                Category:
                            </span>{" "}
                            {product.category}
                        </p>

                        <p>
                            <span className="font-semibold text-white">
                                Brand:
                            </span>{" "}
                            Ink & Thread
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
}