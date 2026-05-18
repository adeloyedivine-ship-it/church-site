"use client";

import Image from "next/image";

export default function Events() {

  return (

    <section
      id="events"
      className="py-28 bg-[#f8fbff]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
            Upcoming Convention
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-blue-950 mb-6">
            Grace Overflowing 
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Join us as we celebrate 25 Years Anniversary & Cathedral Dedication with revival, thanksgiving and divine encounters.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* DETAILS */}
          <div>

            <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-blue-100">

              <div className="space-y-8 text-blue-950">

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Date
                  </p>

                  <h3 className="text-2xl font-black">
                    May 25th – 31st, 2026
                  </h3>

                </div>

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Program Schedule
                  </p>

                  <ul className="space-y-3 text-lg">

                    <li> Mon–Fri: Revival — 5PM</li>

                    <li> Sat: Anniversary & Cathedral Dedication — 10AM</li>

                    <li> Sun: Thanksgiving — 9AM</li>

                  </ul>

                </div>

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Host
                  </p>

                  <p className="text-lg">
                    Pst. M.K Adeniyi
                  </p>

                </div>

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Guest Minister
                  </p>

                  <p className="text-lg">
                    Pst. (Dr.) Taiwo Amogbonjaye
                  </p>

                </div>

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Guest Artist
                  </p>

                  <p className="text-lg">
                    Evang. Ojo Ade
                  </p>

                </div>

                <div>

                  <p className="text-blue-700 font-bold mb-2">
                    Venue
                  </p>

                  <p className="text-lg">
                    Richem Cathedral, Akure
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* FLYER */}
          <div>

            <div className="bg-white rounded-[40px] p-4 shadow-2xl border border-blue-100">

              <div className="relative w-full">

                <Image
                  src="/images/flyer.jpg"
                  alt="Convention Flyer"
                  width={900}
                  height={1400}
                  className="w-full h-auto rounded-[30px] object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}