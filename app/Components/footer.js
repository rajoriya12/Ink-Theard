"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container-custom">

        <div className="footer-wrapper">

          {/* BRAND */}
          <div>

            <h2 className="text-4xl text-white mb-6">
              Ink<span className="text-(--gold)">&</span>Thread
            </h2>

            <p className="paragraph max-w-sm">
              A cinematic fashion universe inspired by
              vintage aesthetics, timeless emotions,
              and underground street culture.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="footer-title">
              Navigation
            </h3>

            <Link href="#" className="footer-link">
              Home
            </Link>

            <Link href="#" className="footer-link">
              Collections
            </Link>

            <Link href="#" className="footer-link">
              Accessories
            </Link>

            <Link href="#" className="footer-link">
              Lookbook
            </Link>

          </div>

          {/* SOCIALS */}
          <div>

            <h3 className="footer-title">
              Socials
            </h3>

            <Link href="#" className="footer-link">
              Instagram
            </Link>

            <Link href="#" className="footer-link">
              Pinterest
            </Link>

            <Link href="#" className="footer-link">
              Twitter
            </Link>

            <Link href="#" className="footer-link">
              Behance
            </Link>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="footer-title">
              Contact
            </h3>

            <p className="footer-link">
              inkandthread@gmail.com
            </p>

            <p className="footer-link">
              Jaipur, India
            </p>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy text-center">

          © 2026 Ink & Thread. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}