"use client";

export default function Footer() {
  return (
    <footer className="relative px-6 pt-24 pb-10 bg-slate-950 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* CHURCH INFO */}
          <div>

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg">

                <span className="text-white text-2xl font-black">
                  R
                </span>

              </div>

              <div>

                <h2 className="text-2xl font-black text-white">
                  RICHEM
                </h2>

                <p className="text-slate-400 text-sm">
                  Riches In Christ Evangelical Mission
                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-relaxed text-lg">
              Raising believers for victorious living through
              worship, prayer, discipleship, evangelism,
              and the transforming power of Jesus Christ.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-white text-2xl font-black mb-8">
              Quick Links
            </h3>

            <div className="space-y-5">

              <a href="#" className="block text-slate-400 hover:text-white transition">
                Home
              </a>

              <a href="#about" className="block text-slate-400 hover:text-white transition">
                About
              </a>

              <a href="#services" className="block text-slate-400 hover:text-white transition">
                Worship
              </a>

              <a href="#events" className="block text-slate-400 hover:text-white transition">
                Events
              </a>

              <a href="#contact" className="block text-slate-400 hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* WORSHIP TIMES */}
          <div>

            <h3 className="text-white text-2xl font-black mb-8">
              Worship Times
            </h3>

            <div className="space-y-5 text-slate-400">

              <p>
                Sunday Worship — 9AM
              </p>

              <p>
                Monday Evangelism — 5PM
              </p>

              <p>
                Tuesday Bible Study — 5PM
              </p>

              <p>
                Wednesday Counselling — 12PM
              </p>

              <p>
                Thursday Prayer Meeting — 5PM
              </p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-white text-2xl font-black mb-8">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">

              <p>
                3A Joseph Ade-Ojo Street,
                Abusoro, Ijoka,
                Akure, Ondo State.
              </p>

              <p>
                +234 9130490295
              </p>

              <p className="break-all">
                adeloyedivine@gmail.com
              </p>

              <a
                href="https://facebook.com/groups/richem/"
                target="_blank"
                className="inline-block text-blue-400 hover:text-blue-300 transition"
              >
                Facebook Community
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-500 text-center md:text-left">
            © 2026 Riches In Christ Evangelical Mission.
            All Rights Reserved.
          </p>

          <p className="text-slate-500 text-center md:text-right">
            Built with excellence for God’s glory.
          </p>

        </div>

      </div>
    </footer>
  );
}