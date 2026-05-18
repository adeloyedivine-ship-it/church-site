"use client";

import { Church, HeartHandshake, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Church,
    title: "Spirit Filled Worship",
    text: "Experience powerful worship, heartfelt praise, and the transforming presence of God.",
  },

  {
    icon: Users,
    title: "Growing Community",
    text: "Connect with believers, families, youths, and kingdom-minded people.",
  },

  {
    icon: HeartHandshake,
    title: "Prayer & Counseling",
    text: "Receive spiritual guidance, prayer support, encouragement, and biblical counseling.",
  },

  {
    icon: Sparkles,
    title: "Kingdom Impact",
    text: "We raise believers for victorious living, leadership, service, and kingdom influence.",
  },
];

export default function Experience() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white">

      {/* GLOW */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-blue-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-24">

          <p className="uppercase tracking-[0.4em] text-blue-700 font-black mb-6">
            The RICHEM Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            A Place Of Worship, Revival & Transformation
          </h2>

          <p className="text-slate-600 text-xl leading-relaxed">
            At RICHEM Worldwide, lives are transformed through God’s Word,
            worship, prayer, discipleship, fellowship, and kingdom service.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 gap-10">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="bg-white/90 backdrop-blur-xl border border-blue-100 rounded-[2rem] p-10 shadow-[0_20px_60px_rgba(59,130,246,0.12)] hover:-translate-y-2"
              >

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center shadow-xl mb-8">

                  <Icon className="text-white" size={36} />

                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-5">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed">
                  {item.text}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}