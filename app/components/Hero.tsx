"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center px-6 py-20">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold mb-6">
            Riches In Christ Evangelical Mission
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
            Raising Believers <br />
            For Victorious Living
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Welcome to RICHEM Worldwide —
            a place of worship, prayer,
            discipleship, revival, and transformation
            through Jesus Christ.
          </p>

          <div className="flex flex-wrap gap-5">

            <a
              href="#events"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-full font-bold"
            >
              Explore Events
            </a>

            <a
              href="#contact"
              className="border border-blue-200 hover:border-blue-400 transition px-8 py-4 rounded-full font-bold"
            >
              Worship With Us
            </a>

          </div>

        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center">

          <div className="w-[320px] h-[320px] rounded-full bg-white shadow-2xl overflow-hidden flex items-center justify-center p-6">

            <Image
              src="/images/logo.jpg"
              alt="RICHEM Logo"
              width={300}
              height={300}
              className="object-contain w-full h-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}