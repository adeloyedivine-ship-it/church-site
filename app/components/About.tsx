import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#f8fbff]"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="relative h-[550px] rounded-[28px] overflow-hidden shadow-2xl">

            <Image
              src="/images/pastor.jpg"
              alt="Pastor"
              fill
              className="object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-5">
              Welcome To RICHEM
            </p>

            <h2 className="text-5xl font-black text-blue-950 leading-tight mb-8">
              Raising Believers For Victorious Living
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Riches In Christ Evangelical Mission is a ministry committed to raising believers through the power of God’s Word, worship, prayer and spiritual transformation.
            </p>

            <div className="bg-white border border-blue-100 rounded-[24px] p-8 shadow-lg">

              <h3 className="text-2xl font-black text-blue-950 mb-4">
                Pastor’s Welcome
              </h3>

              <p className="text-gray-700 leading-relaxed">
                We are delighted to welcome you to the RICHEM family. Our desire is that through every service, teaching and fellowship, your life will continually reflect victory, purpose and the fullness of Christ.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}