"use client";

export default function BrandStory() {
  return (
    <section className="section-padding bg-[#0D0D0D]">

      <div className="container-custom">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-3xl">

            <img
              src="/hero.jpeg"
              alt="brand-story"
              className="w-full h-[700px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* SMALL TITLE */}
            <p className="hero-subtitle">
              OUR STORY
            </p>

            {/* MAIN HEADING */}
            <h2 className="section-heading leading-tight">

              More Than <br />
              Fashion

            </h2>

            {/* PARAGRAPH */}
            <p className="paragraph mt-8">

              Ink & Thread is built for people who wear emotions,
              memories, and untold stories — not just clothes.

            </p>

            <p className="paragraph mt-6">

              Inspired by cinematic nights, vintage editorials,
              underground street culture, and timeless aesthetics,
              our pieces are designed to feel personal.

            </p>

            <p className="paragraph mt-6">

              Every collection blends fashion with storytelling,
              creating a world where style becomes identity.

            </p>

            {/* BUTTON */}
            <button className="retro-btn">

              Explore Our World

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}