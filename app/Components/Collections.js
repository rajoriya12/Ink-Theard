"use client";

import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    id: 1,
    title: "Midnight Wear",
    image: "/c1.jpeg",
    desc: "Dark oversized streetwear inspired by midnight streets.",
  },

  {
    id: 2,
    title: "Retro Streets",
    image: "/c2.jpeg",
    desc: "Vintage fashion blended with modern urban aesthetics.",
  },

  {
    id: 3,
    title: "Silent Hearts",
    image: "/c3.jpeg",
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

          <p className="paragraph font-medium max-w-3xl mt-2" >
            Explore cinematic fashion collections inspired by
            vintage editorials, retro culture, and dark luxury aesthetics.
          </p>

        </div>

        {/* GRID */}
        <div className="collection-grid">

          {collections.map((item) => (

            <div className="retro-card" key={item.id}>

              {/* IMAGE */}
              <div className=" overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={700}
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

                <Link
                  href="#"
                  className="inline-block mt-6 text-[#B08D57]"
                >
                  Explore Collection →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}