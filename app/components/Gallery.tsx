"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/images/worship.jpg",
    "/images/church.jpg",
    "/images/pastor.jpg",
  ];

  return (
    <section className="py-24 bg-blue-950">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-white text-4xl font-black text-center mb-12">
          Church Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((img, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >

              <div className="relative aspect-[4/3]">
                <Image
                  src={img}
                  alt="gallery"
                  fill
                  className="object-cover"
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}