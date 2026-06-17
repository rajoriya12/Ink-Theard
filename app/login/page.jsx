"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {

      localStorage.setItem(
        "userEmail",
        data.user.email
      );

      localStorage.setItem(
        "userName",
        data.user.name
      );

      localStorage.setItem(
        "userRole",
        data.user.role
      );

      alert("Login Successful");

      router.push("/");

    } else {

      alert(data.message);

    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-5">

      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md "
        style={{
            padding:'50px',
            margin:'20px',
            display:'flex',
            flexDirection:'column',  
            gap:'20px'
        }} 
      >

        <h1 className="text-4xl font-bold mb-8">
          Login
        </h1>

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
          Login
        </button>

      </form>

    </div>
  );
}