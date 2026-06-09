"use client";

import Link from "next/link";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState("");


    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await fetch("/api/products");
            const data = await res.json();

            if (data.success) {
                setProducts(data.products);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {

        if (!search.trim()) {
            setResults([]);
            return;
        }

        const filtered = products.filter((product) =>
            product.title
                .toLowerCase()
                .includes(search.toLowerCase())
        );

        setResults(filtered);

    }, [search, products]);
    return (
        <header className="navbar_sec">
            <div className="container-custom" >

                <div className="navbar_wrapper flex justify-between items-center" style={{
                    padding: '8px'
                }}>

                    {/* LOGO */}
                    <div className="logo">
                        <Link href="/">
                            <h2 className="text-3xl font-bold">
                                Ink<span>&</span>Thread
                            </h2>
                        </Link>
                    </div>

                    {/* MENU */}
                    <nav className="navbar_menu hidden lg:block">
                        <ul className="nav_list">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/collections">Collections</Link>
                            </li>

                            <li>
                                <Link href="/Lookbook">Lookbook</Link>
                            </li>

                            <li>
                                <Link href="/Community">Community</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* RIGHT SIDE */}
                    <div className="nav_icons flex items-center gap-6">

                        {/* SEARCH */}
                        <div className="searchbar hidden lg:block" style={{
                            position:'relative'
                        }}>
                            <input type="text" placeholder="Search..." value={search}
                                onChange={(e) => setSearch(e.target.value)} />
                        </div>

                        {results.length > 0 && (

                            <div
                                style={{
                                    position: "absolute",
                                    top: "50px",
                                    width: "250px",
                                    background: "#111",
                                    border: "1px solid #333",
                                    borderRadius: "8px",
                                    zIndex: 9999,
                                }}
                            >

                                {results.slice(0, 5).map((item) => (

                                    <Link
                                        key={item._id}
                                        href={`/products/${item._id}`}
                                        onClick={() => {
                                            setSearch("");
                                            setResults([]);
                                        }}
                                        style={{
                                            display: "block",
                                            padding: "12px",
                                            color: "white",
                                            textDecoration: "none",
                                            borderBottom: "1px solid #222",
                                        }}
                                    >
                                        {item.title}
                                    </Link>

                                ))}

                            </div>

                        )}

                        {/* ICONS */}
                        <FaRegHeart />

                        <HiOutlineShoppingBag />

                        {/* MOBILE MENU */}
                        <div className="mobile_menu_icon cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
                            <FiMenu size={20} />
                        </div>

                    </div>

                </div>

            </div>

            {openMenu && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        width: "280px",
                        height: "100vh",
                        background: "#0a0a0a",
                        zIndex: 9999,
                        padding: "30px",
                        color: "white",
                    }}
                >
                    <button
                        onClick={() => setOpenMenu(false)}
                        style={{
                            fontSize: "30px",
                            marginBottom: "30px",
                        }}
                    >
                        ✕
                    </button>

                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "25px",
                            fontSize: "20px",
                        }}
                    >
                        <li>
                            <Link href="/" onClick={() => setOpenMenu(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/collections" onClick={() => setOpenMenu(false)}>
                                Collections
                            </Link>
                        </li>

                        <li>
                            <Link href="/Lookbook" onClick={() => setOpenMenu(false)}>
                                Lookbook
                            </Link>
                        </li>

                        <li>
                            <Link href="/Community" onClick={() => setOpenMenu(false)}>
                                Community
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" onClick={() => setOpenMenu(false)}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}