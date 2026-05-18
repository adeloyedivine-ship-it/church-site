"use client";

import Image from "next/image";

export default function Hero() {

  return (

    <section
      id="home"
      className="relative pt-[120px] md:pt-[140px] min-h-screen flex items-center overflow-hidden"
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <Image
          src="/images/church.jpg"
          alt="RICHEM"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">

        <div className="max-w-4xl">

          {/* SMALL TEXT */}
          <p className="uppercase tracking-[0.35em] text-blue-200 text-sm md:text-base mb-6">

            Riches In Christ Evangelical Mission

          </p>

          {/* MAIN TITLE */}
          <h1 className="text-white font-black leading-[1.05] text-5xl sm:text-6xl md:text-7xl mb-8">

            Raising Believers
            <br />

            For Victorious Living

          </h1>

          {/* DESCRIPTION */}
          <p className="text-blue-100 text-lg md:text-2xl leading-relaxed max-w-3xl mb-12">

            A Pentecostal ministry committed to revival, discipleship,
            worship, evangelism and the manifestation of God’s power.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#events"
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >

              Upcoming Convention

            </a>

            <a
              href="#live"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
            >

              Watch Live

            </a>

          </div>

        </div>

      </div>

    </section>

  );

}