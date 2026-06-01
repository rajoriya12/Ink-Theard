"use client";

import Link from "next/link";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    return (
        <header className="navbar_sec">
            <div className="container-custom" >

                <div className="navbar_wrapper flex justify-between items-center" style={{
                    padding:'8px'
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
                    <nav className="navbar_menu">
                        <ul className="nav_list">
                            <li>
                                <Link href="/">Home</Link>
                            </li>

                            <li>
                                <Link href="/collections">Collections</Link>
                            </li>

                            <li>
                                <Link href="/lookbook">Lookbook</Link>
                            </li>

                            <li>
                                <Link href="/poetry">Poetry</Link>
                            </li>

                            <li>
                                <Link href="/stories">Stories</Link>
                            </li>

                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* RIGHT SIDE */}
                    <div className="nav_icons flex items-center gap-6">

                        {/* SEARCH */}
                        <div className="searchbar hidden lg:block">
                            <input type="text" placeholder="Search..." />
                        </div>

                        {/* ICONS */}
                        <FaRegHeart />

                        <HiOutlineShoppingBag />

                        {/* MOBILE MENU */}
                        <div className="mobile_menu_icon">
                            <FiMenu />
                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
}