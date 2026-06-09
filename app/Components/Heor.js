"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="container-custom">

        <div className="hero-content">

          {/* SMALL TEXT */}
          <p className="hero-subtitle">
            DARK RETRO FASHION
          </p>

          {/* MAIN HEADING */}
          <h1 className="main-heading">
            Vintage Souls <br />
            Never Fade
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-text">
            A cinematic fashion experience inspired by midnight
            streets, vintage magazines, and timeless emotions.
            Discover retro streetwear crafted for modern souls.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-5 mt-10 flex-wrap">

            <Link href="/collections" className="retro-btn">
              Explore Collection
            </Link>

            <Link
              href="/Lookbook"
              className="retro-btn"
            >
              Lookbook
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}