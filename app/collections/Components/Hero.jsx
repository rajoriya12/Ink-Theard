import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main>

      {/* HERO */}
      <section className="py-60 text-center" style={{
        marginTop:'120px'
      }}>
        <p className="text-(--gold) tracking-[4px] uppercase">
          Ink & Thread
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Collections
        </h1>

        <p className="max-w-3xl  text-gray-600 text-center"
        style={{
          paddingTop:'10px',
          margin:'auto'
        }}>
          Timeless pieces crafted for modern souls.
          Discover fashion inspired by poetry,
          nostalgia, and cinematic storytelling.
        </p>
      </section>

    </main>
  );
}