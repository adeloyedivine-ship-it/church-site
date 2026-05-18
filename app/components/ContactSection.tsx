"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden text-white"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <Image
          src="/images/prayer.jpg"
          alt="Prayer"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/85"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="uppercase tracking-[0.35em] text-blue-300 font-black mb-4 text-sm">
            Connect With Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Prayer, Counseling & Support
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Reach out for prayer requests,
            counseling, testimonies,
            questions, and spiritual support.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-7">

              <h3 className="text-2xl font-black mb-4 text-blue-300">
                Cathedral Location
              </h3>

              <p className="text-slate-200 leading-relaxed">
                Richem Cathedral,
                Road Maker, Ado Road,
                Igoba, Akure,
                Ondo State.
              </p>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-7">

              <h3 className="text-2xl font-black mb-4 text-blue-300">
                Service Schedule
              </h3>

              <div className="space-y-3 text-slate-200">

                <p>Sunday School — 9AM</p>

                <p>Sunday Worship — 10AM</p>

                <p>Tuesday Bible Study — 5PM</p>

                <p>Thursday Prayer — 5PM</p>

              </div>

            </div>

            <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[2rem] p-7">

              <h3 className="text-2xl font-black mb-4 text-blue-300">
                Contact Channels
              </h3>

              <div className="space-y-3 text-slate-200">

                <p>WhatsApp: +234 9130490295</p>

                <p>Email: adeloyedivine@gmail.com</p>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="bg-white text-slate-900 rounded-[2rem] p-8 max-w-xl mx-auto w-full">

            <h3 className="text-3xl font-black mb-6">
              Send A Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              />

              <select
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              >

                <option>Prayer Request</option>

                <option>Testimony</option>

                <option>Counseling</option>

                <option>Question</option>

              </select>

              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
              ></textarea>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://wa.me/2349130490295"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-full font-black"
                >
                  WhatsApp
                </a>

                <a
                  href="mailto:adeloyedivine@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-full font-black"
                >
                  Email
                </a>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}