"use client";

import Image from "next/image";

const gallery = [
  {
    title: "Worship Experience",
    image: "/images/worship.jpg",
  },

  {
    title: "Congregation Fellowship",
    image: "/images/church.jpg",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 px-6 bg-gradient-to-b from-blue-50 to-white"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold mb-6">
            Gallery
          </p>

          <h2 className="text-5xl font-black text-slate-900 leading-tight mb-8">
            Moments Of Worship & Fellowship
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Experience the atmosphere of worship,
            fellowship, revival, and transformation
            at RICHEM Worldwide.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          {gallery.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] overflow-hidden shadow-2xl bg-white"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="object-cover w-full h-[420px]"
              />

              <div className="bg-slate-900 p-8">

                <h3 className="text-3xl font-black text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-blue-100">
                  Experience God’s presence through worship and fellowship.
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}