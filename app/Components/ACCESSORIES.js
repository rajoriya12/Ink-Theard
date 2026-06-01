"use client";
import Link from "next/link";

const accessories = [
    {
        id: 1,
        title: "Silver Chains",
        image: "/A1.jpeg",
    },

    {
        id: 2,
        title: "Retro Glasses",
        image: "/A2.jpeg",
    },

    {
        id: 3,
        title: "Luxury Rings",
        image: "/A3.jpeg",
    },
];

export default function Accessories() {
    return (
        <section className="section-padding bg-[#111]">

            <div className="container-custom">

                {/* HEADING */}
                <div className="mb-16">

                    <p className="hero-subtitle">
                        ACCESSORIES
                    </p>

                    <h2 className="section-heading">
                        Details Define <br />
                        The Soul
                    </h2>

                </div>

                {/* GRID */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {accessories.map((item) => (

                        <div
                            key={item.id}
                            className="retro-card relative overflow-hidden rounded-2xl group"
                        >

                            {/* IMAGE */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-125 object-cover group-hover:scale-110 transition duration-500"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-black/40"></div>

                            {/* TEXT */}
                            <div className="absolute bottom-8 left-8">

                                <h3 className="text-3xl text-white mb-2">
                                    {item.title}
                                </h3>
                                <Link
                                    href="#"
                                    className="inline-block mt-6 text-[#B08D57]"
                                >
                                    Explore
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}
