"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    const res = await fetch(
      "/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (data.success) {

      alert("Registration Successful");

      router.push("/login");

    } else {

      alert(data.message);

    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex justify-center items-center px-5"
    >
      <form
        onSubmit={handleRegister}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
        style={{
            padding:'50px',
            margin:'20px',
            display:'flex',
            flexDirection:'column',
            gap:'20px'
        }}
      >

        <h1 className="text-4xl font-bold mb-8">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-black rounded-xl"
           style={{
            padding:'15px 25px'
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-4 bg-black rounded-xl"
           style={{
            padding:'15px 25px'
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-4 bg-black rounded-xl"
           style={{
            padding:'15px 25px'
          }}
        />

        <button
          className="w-full bg-[#b08d57] text-black font-bold py-4 rounded-xl"
           style={{
            padding:'15px 25px'
          }}
        >
          Register
        </button>

      </form>
    </div>
  );
}