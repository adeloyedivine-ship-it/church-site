"use client";

import Image from "next/image";

export default function EventSection() {
  return (
    <section
      id="events"
      className="relative py-24 px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <Image
          src="/images/event.jpg"
          alt="Upcoming Event"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-white">

        {/* LEFT */}
        <div className="max-w-2xl">

          <p className="uppercase tracking-[0.35em] text-blue-300 font-black mb-4 text-sm">
            Upcoming Program
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">

            RICHEM Worship & Revival Gathering

          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">

            Join believers for worship, prayer,
            revival, biblical teaching, healing,
            fellowship, and spiritual encounters.

          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-black"
            >
              Attend Program
            </a>

            <a
              href="https://web.facebook.com/share/v/1CyoMSZ3kG/"
              target="_blank"
              className="bg-white/10 border border-white/20 hover:bg-white/20 px-8 py-4 rounded-full font-black backdrop-blur-xl"
            >
              Watch Online
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 w-full max-w-md">

            <p className="uppercase tracking-[0.25em] text-blue-300 font-black mb-6 text-sm">
              Event Details
            </p>

            <div className="space-y-6">

              <div>

                <p className="text-blue-300 font-black mb-1">
                  Venue
                </p>

                <p className="text-slate-200 leading-relaxed">
                  Richem Cathedral,
                  Road Maker, Ado Road,
                  Igoba, Akure.
                </p>

              </div>

              <div>

                <p className="text-blue-300 font-black mb-1">
                  Experience
                </p>

                <p className="text-slate-200">
                  Worship • Prayer • Word • Fellowship
                </p>

              </div>

              <div>

                <p className="text-blue-300 font-black mb-1">
                  Time
                </p>

                <p className="text-slate-200">
                  Sundays — 10:00 AM
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}