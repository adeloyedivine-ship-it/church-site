import Image from "next/image";

export default function Sermons() {
  return (
    <section
      id="live"
      className="py-24 bg-white"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-[30px] overflow-hidden min-h-[550px] shadow-2xl">

          <Image
            src="/images/live.jpg"
            alt="Live"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 h-full flex items-end p-10 md:p-16">

            <div className="max-w-2xl text-white">

              <p className="uppercase tracking-[0.3em] text-red-300 text-sm mb-5">
                Live Broadcast
              </p>

              <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Worship With Us Live
              </h2>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Join our worship experiences, teachings and revival services live from Riches In Christ Evangelical Mission.
              </p>

              <a
                href="https://web.facebook.com/share/v/1CyoMSZ3kG/"
                target="_blank"
                className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-full font-bold shadow-2xl"
              >

                ▶ Watch Live

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}