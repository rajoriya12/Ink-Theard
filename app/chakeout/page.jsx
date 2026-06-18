"use client";
export const dynamic = "force-dynamic";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  useEffect(() => {
  const userData = localStorage.getItem("user");

  if (!userData) {
    alert("Please login first");
    window.location.replace("/login");
    return;
  }
}, []);
  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();

        if (data.success) {
          setProduct(data.product);
        }
      } catch (error) {
        console.error("Product Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrder = async () => {
    try {
      const user = JSON.parse(
        localStorage.getItem("user")
      );

      ```
if (!user) {
  alert("Please login first");
  return;
}

const response = await fetch("/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    ...formData,

    user,

    productId: product._id,
    productTitle: product.title,
    productPrice: product.price,
    productImage: product.image,

    status: "Pending",
  }),
});

const data = await response.json();

if (data.success) {
  alert("Order Placed Successfully!");

  setFormData({
    customerName: "",
    customerEmail: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
} else {
  alert(data.message);
}
```

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading Checkout...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white pt-45 pb-20 px-5 md:px-10 flex flex-col items-center justify-center">
      <div className="text-center mb-14">
        <p className="text-[#b08d57] uppercase tracking-[4px] text-sm mb-3">
          Secure Checkout
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold"
          style={{ marginTop: "30px" }}
        >
          Complete Your Order
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div
          className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl"
          style={{ padding: "15px" }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-105 object-cover"
          />

          <div className="p-8">
            <p className="text-[#b08d57] uppercase tracking-[3px] text-sm mb-2">
              {product.category}
            </p>

            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

            <p className="text-gray-400 leading-7 mb-6">
              {product.description}
            </p>

            <div className="text-4xl font-bold text-[#b08d57]">
              ₹{product.price}
            </div>
          </div>
        </div>

        <div
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl"
          style={{
            padding: "20px",
            margin: "10px",
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Shipping Information
          </h2>

          <div
            className="space-y-5 mt-3"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="customerName"
              placeholder="Full Name"
              value={formData.customerName}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
              style={{ padding: '5px 15px' }}
            />

            <input
              type="email"
              name="customerEmail"
              placeholder="Email Address"
              value={formData.customerEmail}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
              style={{ padding: '5px 15px' }}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
              style={{ padding: '5px 15px' }}
            />

            <textarea
              rows="4"
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4 resize-none"
              style={{ padding: '5px 15px' }}
            />

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
                style={{ padding: '5px 15px' }}
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
                style={{ padding: '5px 15px' }}
              />
            </div>

            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full bg-black border border-zinc-700 rounded-xl px-5 py-4"
              style={{ padding: '5px 15px' }}
            />

            <div className="border-t border-zinc-700 pt-6 mt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-lg">
                  Total Amount
                </span>

                <span className="text-[#b08d57] text-3xl font-bold">
                  ₹{product.price}
                </span>
              </div>

              <button
                onClick={handleOrder}
                className="w-full bg-[#b08d57] text-black font-bold py-4 rounded-xl hover:opacity-90 transition"
                style={{ padding: '5px 15px' }}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
          Loading Checkout...
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}