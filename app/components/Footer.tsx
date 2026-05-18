export default function Footer() {

  return (

    <footer className="bg-blue-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-14">

          {/* ABOUT */}
          <div>

            <h2 className="text-4xl font-black mb-6">
              RICHEM
            </h2>

            <p className="text-blue-100 leading-relaxed">
              Raising believers for victorious living through evangelism, worship, revival and the ministry of the Word.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4 text-blue-100">

              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#events" className="block hover:text-white">
                Convention
              </a>

              <a href="#live" className="block hover:text-white">
                Live
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>

            </div>

          </div>

          {/* LOCATIONS */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Locations
            </h3>

            <div className="space-y-6 text-blue-100">

              <div>

                <p className="font-bold text-white mb-2">
                  Headquarters
                </p>

                <p>
                  3A Joseph Ade-Ojo Street,
                  Abusoro, Ijoka,
                  Akure, Ondo State
                </p>

              </div>

              <div>

                <p className="font-bold text-white mb-2">
                  Richem Cathedral
                </p>

                <p>
                  Road Maker, Ado Road,
                  Igoba, Akure,
                  Ondo State
                </p>

              </div>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-blue-100">

              <p>
                +234 913 049 0295
              </p>

              <p>
                adeloyedivine@gmail.com
              </p>

              <p>
                Riches In Christ Evangelical Mission
              </p>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-blue-800 mt-20 pt-10 text-center text-blue-200">

          © 2026 Riches In Christ Evangelical Mission (RICHEM). All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}