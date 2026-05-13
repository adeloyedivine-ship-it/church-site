"use client";

import Image from "next/image";

export default function Pastor() {
  return (
    <section className="py-28 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXT */}
        <div>

          <p className="uppercase tracking-[0.3em] text-blue-600 font-bold mb-6">
            Leadership
          </p>

          <h2 className="text-5xl font-black text-slate-900 leading-tight mb-8">
            Welcome From <br />
            Pastor M.K. Adeniyi
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Welcome to Riches In Christ Evangelical Mission.
            We are delighted to worship with you.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Through worship, prayer,
            sound doctrine, and fellowship,
            lives are transformed and destinies restored.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 mt-10">

            <p className="text-blue-700 font-bold text-xl">
              “If God be for us, who can be against us?”
            </p>

            <p className="text-slate-500 mt-2">
              Romans 8:31
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <div className="w-[380px] h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">

            <Image
              src="/images/pastor.jpg"
              alt="Pastor"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}