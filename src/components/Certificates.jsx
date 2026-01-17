import React, { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

import intern_cert from "../assets/interns.png";
import fast_coding from "../assets/fast_coding.png";
import hackathon_image from "../assets/hackathon.png";
import dca_image from "../assets/dca.png";

const certificates = [
  { id: 1, title: "Internship Certificate", image: intern_cert },
  { id: 2, title: "Fast Coding Certificate", image: fast_coding },
  { id: 3, title: "Hackathon Certificate", image: hackathon_image },
  { id: 4, title: "DCA Certificate", image: dca_image },
];

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (cert) => {
    setActive(cert);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setActive(null), 200);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="relative py-12 px-4 md:px-16 text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-105 h-105 bg-cyan-500/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-105 h-105 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm tracking-widest text-slate-400 uppercase">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-cyan-300">Certificates</span>
          </h1>
          <div className="mt-4 h-0.75 w-28 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div key={cert.id} className="relative group">
              {/* animated gradient border */}
              <div className="absolute -inset-0.5 w-1 h-5 rounded-2xl bg-[conic-gradient(from_180deg,rgba(128,0,255,1),rgba(255,0,102,1),rgba(0,0,0,1),rgba(255,0,102,1),rgba(128,0,255,1))]
             opacity-70 blur-[1px] group-hover:opacity-100 transition duration-300 animate-[spin_0.5s_linear_infinite]" />
              
              <div className="absolute w-1 h-10 -inset-0.5 rounded-2xl bg-[conic-gradient(from_0deg,rgba(34,211,238,1),rgba(59,130,246,1),rgba(34,211,238,1))] animate-[spin_0.3s_linear_infinite]" />

                {/* inner mask so ring looks like border only */}
                <div className="absolute w-1 inset-0.5 rounded-2xl bg-red-900 border border-white/10" />

              <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl">
                <button
                  onClick={() => openModal(cert)}
                  className="relative w-full text-left"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-56 object-cover transition duration-300 group-hover:scale-[1.04]"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                  {/* zoom badge */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 border border-white/10 backdrop-blur text-xs text-slate-200">
                    <ZoomIn size={14} />
                    View
                  </div>

                  {/* title */}
                  <div className="absolute left-4 bottom-4">
                    <h3 className="text-white font-semibold">{cert.title}</h3>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HALF SCREEN PREVIEW MODAL */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="absolute left-0 right-0 top-20 mx-auto w-full md:max-w-4xl">
            <div className="relative h-[65vh] md:h-[70vh] rounded-t-3xl border border-white/10 bg-slate-950/85 backdrop-blur shadow-2xl overflow-hidden animate-[sheetUp_.22s_ease-out]">
              <div className="h-0.75 w-full bg-linear-to-r from-cyan-400 to-blue-500" />

              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {active?.title}
                </h3>

                <button
                  onClick={closeModal}
                  className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="px-5 pb-6 h-[calc(65vh-64px)] md:h-[calc(70vh-64px)] overflow-auto">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/60">
                  <img
                    src={active?.image}
                    alt={active?.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <a
                  href={active?.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:brightness-110 transition"
                >
                  Open Full Image ↗
                </a>
              </div>
            </div>
          </div>

          <style>
            {`
              @keyframes sheetUp {
                from { transform: translateY(24px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}
          </style>
        </div>
      )}
    </section>
  );
};

export default Certificates;
