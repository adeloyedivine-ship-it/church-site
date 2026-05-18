"use client";

import Image from "next/image";

export default function Give() {
  return (
    <section id="give" className="py-24 bg-blue-950">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center text-white mb-6">
          Support The Ministry
        </h2>

        <p className="text-blue-200 text-center mb-14">
          Your giving advances the Gospel and impacts lives globally.
        </p>

        {/* CARD */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">

          {/* CARD IMAGE */}
          <Image
            src="/images/card.jpg"
            alt="card"
            fill
            className="object-cover"
          />

          {/* BLUR OVERLAY */}
          <div className="absolute inset-0 backdrop-blur-md bg-black/35"></div>

          {/* CONTENT */}
          <div className="relative z-10 p-10 md:p-16 text-white">

            <p className="uppercase tracking-[0.3em] text-sm text-blue-100">
              Fidelity Bank
            </p>

            <h3 className="text-3xl md:text-5xl font-black mt-8 max-w-2xl">
              Riches In Christ Evangelical Mission
            </h3>

            <div className="mt-16">

              <p className="text-blue-100 text-sm">
                Account Number
              </p>

              <p className="text-4xl md:text-6xl font-black tracking-widest mt-2">
                4150 0270 86
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}