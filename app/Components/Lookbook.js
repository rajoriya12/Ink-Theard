"use client";

const lookbookImages = [
  "/an1.jpeg",
  "/LB2.jpeg",
  "/LB3.jpeg",
  "/LB4.jpeg",
];

export default function Lookbook() {
  return (
    <section className="lookbook-section section-padding">

      <div className="container-custom">

        {/* HEADING */}
        <div className="mb-16">

          <p className="hero-subtitle" data-aos="fade-right">
            VISUAL LOOKBOOK
          </p>

          <h2 className="section-heading"data-aos="fade-right">
            Fashion In <br />
            Motion
          </h2>

          <p className="paragraph max-w-2xl mt-5" data-aos="fade-right">
            A curated gallery blending retro aesthetics,
            cinematic visuals, and timeless fashion energy.
          </p>

        </div>

        {/* GRID */}
        <div className="lookbook-grid">

          {lookbookImages.map((img, index) => (

            <div
              className="overflow-hidden rounded-2xl"
              key={index}
            >

              <img
                src={img}
                alt="lookbook"
                className="w-full h-125 object-cover hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}