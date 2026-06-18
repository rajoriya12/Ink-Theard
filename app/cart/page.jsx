"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {



    const [cart, setCart] = useState([]);


    useEffect(() => {
        const userData = localStorage.getItem("user");

        if (!userData) {
            alert("Please login first");
            router.push("/login");
            return;
        }

        const items =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCart(items);

    }, [router]);




    const router = useRouter();
    useEffect(() => {

        const email =
            localStorage.getItem("userEmail");

        if (!email) {

            router.push("/login");
            return;
        }

        const items =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

        setCart(items);

    }, [router]);



    const removeItem = (id) => {

        const updatedCart =
            cart.filter(
                (item) => item.id !== id
            );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };


    const increaseQty = (id) => {

        const updatedCart = cart.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: (item.quantity || 1) + 1,
                }
                : item
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    const decreaseQty = (id) => {

        const updatedCart = cart.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity:
                        (item.quantity || 1) > 1
                            ? item.quantity - 1
                            : 1,
                }
                : item
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };


    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                ((Number(item.price) || 0) *
                    (item.quantity || 1)),
            0
        );
    return (
        <div
            className="min-h-screen bg-black text-white  mx-auto px-5 py-10"
            style={{
                paddingTop: "130px",
                margin: '10px'
            }}
        >
            <h1 className="text-5xl font-bold mb-10">
                Shopping Cart
            </h1>

            {cart.length === 0 ? (

                <div className="text-center text-zinc-400 text-xl">
                    Cart is Empty
                </div>

            ) : (

                <>
                    <div className="space-y-6" >

                        {cart.map((item) => (

                            <div
                                key={item.id}
                                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center"
                                style={{ margin: '10px' }}
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-40 h-40 object-cover rounded-xl"
                                    style={{
                                        width: '250px',
                                        padding: '15px',
                                    }}
                                />

                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold">
                                        {item.title}
                                    </h2>

                                    <p className="text-[#b08d57] text-xl mt-3">
                                        ₹{item.price}
                                    </p>

                                    <div className="flex items-center gap-4 mt-4">

                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="bg-zinc-700 px-3 py-1 rounded"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity || 1}
                                        </span>

                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="bg-zinc-700 px-3 py-1 rounded"
                                        >
                                            +
                                        </button>

                                    </div>

                                    <p className="text-green-400 mt-3">
                                        Item Total:
                                        ₹{item.price * (item.quantity || 1)}
                                    </p>

                                </div>

                                <div className="flex flex-col gap-3">

                                    <Link href={`/chakeout?id=${item.id}`}>

                                        <button
                                            className="bg-[#b08d57] text-black px-5 py-3 rounded-lg font-semibold"
                                            style={{ padding: '5px 10px', marginRight: '30px' }}
                                        >
                                            Buy Now
                                        </button>

                                    </Link>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="bg-red-500 px-5 py-3 rounded-lg"
                                        style={{ padding: '5px 10px', marginRight: '30px' }}
                                    >
                                        Remove
                                    </button>



                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="border-t border-zinc-800 pt-8 flex justify-between items-center"
                        style={{
                            marginTop: '20px',
                            paddingTop: '50px'
                        }}>

                        <h2 className="text-3xl font-bold">
                            Total: ₹{total}
                        </h2>

                        <button
                            className="bg-zinc-700 text-white px-8 py-4 rounded-xl font-bold"
                            style={{
                                padding: '5px 15px',
                                marginRight: '30px'
                            }}
                        >
                            Checkout All (Coming Soon)
                        </button>

                    </div>
                </>
            )}
        </div>
    );
}