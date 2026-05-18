"use client";

import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageType, setMessageType] = useState("Prayer Request");
  const [message, setMessage] = useState("");

  const fullMessage = `
RICHEM WEBSITE MESSAGE

Name: ${name}

Email: ${email}

Category: ${messageType}

Message:
${message}
  `;

  const sendWhatsapp = () => {

    window.open(
      `https://wa.me/2349130490295?text=${encodeURIComponent(fullMessage)}`
    );

  };

  const sendEmail = () => {

    window.location.href =
      `mailto:adeloyedivine@gmail.com?subject=${encodeURIComponent(messageType)}&body=${encodeURIComponent(fullMessage)}`;

  };

  return (
    <>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
              Connect With Us
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 leading-tight">
              We Would Love To Hear From You
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Prayer requests, testimonies, counselling and spiritual questions can be sent directly to the ministry.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div className="bg-[#f8fbff] rounded-[40px] p-10 md:p-14 shadow-xl border border-blue-100">

              <div className="space-y-8">

                {/* NAME */}
                <div>

                  <label className="block mb-3 font-semibold text-blue-950">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 p-5 outline-none bg-white"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block mb-3 font-semibold text-blue-950">
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 p-5 outline-none bg-white"
                  />

                </div>

                {/* TYPE */}
                <div>

                  <label className="block mb-3 font-semibold text-blue-950">
                    Message Type
                  </label>

                  <select
                    value={messageType}
                    onChange={(e) => setMessageType(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 p-5 outline-none bg-white"
                  >

                    <option>Prayer Request</option>
                    <option>Testimony</option>
                    <option>Question</option>
                    <option>Counselling</option>

                  </select>

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block mb-3 font-semibold text-blue-950">
                    Your Message
                  </label>

                  <textarea
                    rows={8}
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 p-5 outline-none resize-none bg-white"
                  />

                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-5">

                  <button
                    onClick={sendWhatsapp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-5 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-105"
                  >

                    <FaWhatsapp />

                  </button>

                  <button
                    onClick={sendEmail}
                    className="flex-1 bg-blue-950 hover:bg-blue-800 text-white py-5 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-105"
                  >

                    <FaEnvelope />

                  </button>

                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <div className="relative h-[650px] rounded-[40px] overflow-hidden shadow-2xl">

                <Image
                  src="/images/church.jpg"
                  alt="RICHEM"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                <div className="absolute bottom-10 left-10 right-10 text-white">

                  <p className="uppercase tracking-[0.2em] text-sm mb-4">
                    Reach Out To Us
                  </p>

                  <h3 className="text-4xl font-black leading-tight mb-8">
                    Raising Believers For Victorious Living
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

                    <div className="space-y-2">

                      <p>
                        +234 913 049 0295
                      </p>

                      <p>
                        adeloyedivine@gmail.com
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* GIVING SECTION */}
      <section
        id="give"
        className="py-24 bg-[#f8fbff]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>

              <p className="uppercase tracking-[0.3em] text-blue-700 text-sm mb-4">
                Give & Support
              </p>

              <h2 className="text-5xl md:text-6xl font-black text-blue-950 leading-tight mb-8">
                Partner With The Mission
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Your giving supports evangelism, discipleship, worship experiences, revival meetings and kingdom advancement.
              </p>

              <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-blue-100">

                <p className="text-gray-500 mb-3">
                  Account Number
                </p>

                <h3 className="text-5xl font-black text-blue-950 mb-6 break-all">
                  4150027086
                </h3>

                <p className="text-gray-700 text-lg mb-2">
                  Riches In Christ Evangelical Mission
                </p>

                <p className="text-blue-700 font-bold text-lg">
                  Fidelity Bank
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-blue-100 flex items-center justify-center min-h-[500px]">

              <div className="relative w-full h-[320px]">

                <Image
                  src="/images/card.jpg"
                  alt="Giving Card"
                  fill
                  className="object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}