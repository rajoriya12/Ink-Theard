"use client";

import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    title: "Midnight Wear",
    image: "/C1.jpeg",
    desc: "Dark oversized streetwear inspired by midnight streets.",
  },

  {
    id: 2,
    title: "Retro Streets",
    image: "/C2.jpeg",
    desc: "Vintage fashion blended with modern urban aesthetics.",
  },

  {
    id: 3,
    title: "Silent Hearts",
    image: "/C3.jpeg",
    desc: "Minimal luxury pieces for timeless souls.",
  },
];

export default function Collections() {
  return (
    <section className="collection-section section-padding">
      <div className="container-custom">

        {/* HEADING */}
        <div className="mb-16">
          <p className="hero-subtitle">
            FEATURED COLLECTIONS
          </p>

          <h2 className="section-heading">
            Crafted For <br />
            Modern Souls
          </h2>

          <p className="paragraph font-medium max-w-3xl mt-2">
            Explore cinematic fashion collections inspired by
            vintage editorials, retro culture, and dark luxury aesthetics.
          </p>
        </div>

        {/* GRID */}
        <div className="collection-grid">

          {collections.map((item) => (

            <Link
              href="/collections"
              key={item.id}
              className="retro-card block transition-all duration-300 hover:scale-[1.02]"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="retro-card-content">

                <h3 className="retro-card-title">
                  {item.title}
                </h3>

                <p className="retro-card-text">
                  {item.desc}
                </p>

                <span className="inline-block mt-6 text-[#B08D57] font-medium">
                  Explore Collection →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}