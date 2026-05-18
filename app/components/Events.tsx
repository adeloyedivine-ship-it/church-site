"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Events() {

  // MAY 2026 CONVENTION DATE
  const targetDate = new Date("2026-05-21T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date().getTime();

      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),

        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
          (1000 * 60)
        ),

        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [targetDate]);

  return (
    <section
      id="events"
      className="py-24 bg-[#f8fbff]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
              Upcoming Convention
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-blue-950 leading-tight mb-8">
              RICHEM CONVENTION 2026
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              A powerful gathering of worship, prayer, encounters, revival and transformation raising believers for victorious living.
            </p>

            {/* COUNTDOWN */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              <div className="bg-white rounded-[28px] p-6 shadow-lg border border-blue-100 text-center">
                <h3 className="text-5xl font-black text-blue-950">
                  {timeLeft.days}
                </h3>
                <p className="text-gray-500 mt-2">
                  Days
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 shadow-lg border border-blue-100 text-center">
                <h3 className="text-5xl font-black text-blue-950">
                  {timeLeft.hours}
                </h3>
                <p className="text-gray-500 mt-2">
                  Hours
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 shadow-lg border border-blue-100 text-center">
                <h3 className="text-5xl font-black text-blue-950">
                  {timeLeft.minutes}
                </h3>
                <p className="text-gray-500 mt-2">
                  Minutes
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-6 shadow-lg border border-blue-100 text-center">
                <h3 className="text-5xl font-black text-blue-950">
                  {timeLeft.seconds}
                </h3>
                <p className="text-gray-500 mt-2">
                  Seconds
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative h-[620px] rounded-[40px] overflow-hidden shadow-2xl">

            <Image
              src="/images/event.jpg"
              alt="Convention"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div className="absolute bottom-10 left-10 text-white">

              <p className="uppercase tracking-[0.2em] text-sm mb-3">
                May 21 - 26, 2026
              </p>

              <h3 className="text-4xl font-black leading-tight">
                Victory For The Saints
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}