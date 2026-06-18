"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OrdersPage() {

    const [orders, setOrders] = useState([]);
    const [email, setEmail] = useState("");
    const [checkingAuth, setCheckingAuth] = useState(true);


    const router = useRouter();
    useEffect(() => {

        const userEmail =
            localStorage.getItem("userEmail");

        if (!userEmail) {

            router.push("/login");

            return;
        }
        if (checkingAuth) {
            return null;
        }
        setEmail(userEmail);
        setCheckingAuth(false);

    }, [router]);

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const res = await fetch(`/api/orders/${email}`);

                const data = await res.json();

                if (data.success) {
                    setOrders(data.orders);
                }

            } catch (error) {
                console.log(error);
            }

        };

        if (email) {
            fetchOrders();
        }

    }, [email]);

    const getColor = (status) => {

        switch (status) {

            case "Pending":
                return "text-yellow-400";

            case "Processing":
                return "text-blue-400";

            case "Shipped":
                return "text-purple-400";

            case "Delivered":
                return "text-green-400";

            case "Cancelled":
                return "text-red-400";

            default:
                return "text-white";
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-10" style={{ paddingTop: '130px' }}>

            <h1 className="text-4xl font-bold mb-10">
                My Orders
            </h1>

            {orders.length === 0 ? (
                <p>No Orders Found</p>
            ) : (
                orders.map((order) => (

                    <div
                        key={order._id}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-5 flex justify-around gap-6 "
                        style={{ padding: '20px', margin: '20px' }}
                    >
                        <img
                            src={order.productImage}
                            alt={order.productTitle}
                            style={{
                                width: '200px',
                                height: '300px'
                            }}
                        />

                        <div className="flex flex-col" >
                            <h2 className="text-2xl font-bold">
                                {order.productTitle}
                            </h2>

                            <p className="text-[#b08d57] text-xl mt-2">
                                ₹{order.productPrice}
                            </p>

                            <p className="mt-4">
                                Status :
                                <span className={`ml-2 font-bold ${getColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </p>

                            <div className="mt-5">

                                <div className="flex items-center gap-5 justify-between text-sm mb-3">

                                    <span className={
                                        order.status === "Pending" ||
                                            order.status === "Processing" ||
                                            order.status === "Shipped" ||
                                            order.status === "Delivered"
                                            ? "text-green-400"
                                            : "text-zinc-500"
                                    }>
                                        📦 Order Placed
                                    </span>

                                    <span className={
                                        order.status === "Processing" ||
                                            order.status === "Shipped" ||
                                            order.status === "Delivered"
                                            ? "text-green-400"
                                            : "text-zinc-500"
                                    }>
                                        ⚙️ Processing
                                    </span>

                                    <span className={
                                        order.status === "Shipped" ||
                                            order.status === "Delivered"
                                            ? "text-green-400"
                                            : "text-zinc-500"
                                    }>
                                        🚚 Shipped
                                    </span>

                                    <span className={
                                        order.status === "Delivered"
                                            ? "text-green-400"
                                            : "text-zinc-500"
                                    }>
                                        🎉 Delivered
                                    </span>

                                </div>

                                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">

                                    <div
                                        className="h-full bg-[#b08d57] transition-all duration-500"
                                        style={{
                                            width:
                                                order.status === "Pending"
                                                    ? "25%"
                                                    : order.status === "Processing"
                                                        ? "50%"
                                                        : order.status === "Shipped"
                                                            ? "75%"
                                                            : order.status === "Delivered"
                                                                ? "100%"
                                                                : "0%",
                                        }}
                                    />

                                </div>

                            </div>
                        </div>
                    </div>

                ))
            )}

        </div>
    );
}