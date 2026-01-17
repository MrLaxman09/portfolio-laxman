import React, { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import fast_coding from "../assets/fast_coding.png"
import hackathon_image from "../assets/hackathon.png"
import leetcode_image from "../assets/leetcode.png"

const Acheivements = () => {
  const achievements = [
    {
      title: "Hackathon Participation",
      subtitle: "Aayam Techfest Fast Coding",
      org: "RKDF UNIVERSITY RANCHI",
      date: "15 September 2025",
      image: fast_coding,
      desc: "Participated in a college-level hackathon focused on solving real-world problems using modern web technologies.",
    },
    {
      title: "Hackathon Participation",
      subtitle: "Aayam Techfest Hackathon",
      org: "RKDF University",
      date: "16 September 2025",
      image: hackathon_image,
      desc: "Collaborated with a team to build a full-stack solution under strict time constraints.",
    },
    {
      title: "LeetCode Achievement",
      subtitle: "15+ Problems Solved",
      org: "LeetCode Platform",
      date: "Ongoing",
      image: leetcode_image,
      desc: "Solved 15+ Data Structures and Algorithms problems covering arrays, strings, recursion, and basic DP.",
    },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (item) => {
    setActive(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setTimeout(() => setActive(null), 200);
  };

  // ESC close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="relative px-4 md:px-10 py-12 text-white overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-28 -left-28 w-105 h-105 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-28 -right-28 w-105 h-105 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm tracking-widest text-slate-400 uppercase">Highlights</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-cyan-300">Achievements</span>
          </h1>
          <div className="mt-4 h-0.75 w-28 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <div key={index} className="relative group">
              {/* animated gradient border ring */}
              {/* <div className="absolute -inset-0.5 rounded-[26px] bg-[conic-gradient(from_180deg,rgba(34,211,238,.0),rgba(34,211,238,.8),rgba(59,130,246,.7),rgba(34,211,238,.8),rgba(34,211,238,.0))] opacity-70 blur-[1px] group-hover:opacity-100 transition duration-300 animate-[spin_7s_linear_infinite]" /> */}

              {/* card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur shadow-xl group-hover:shadow-cyan-500/20 transition">
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-cyan-400/10 via-transparent to-blue-500/10 pointer-events-none" />

                {/* image */}
                <button
                  onClick={() => openModal(item)}
                  className="relative w-full text-left"
                  aria-label={`Open ${item.subtitle}`}
                >
                  <img
                    src={item.image}
                    alt={item.subtitle}
                    className="w-full h-44 object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  {/* image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

                  {/* zoom badge */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 border border-white/10 backdrop-blur text-xs text-slate-200">
                    <ZoomIn size={14} />
                    View
                  </div>
                </button>

                {/* content */}
                <div className="p-5 space-y-2">
                  <h2 className="text-xl font-bold text-cyan-300">{item.subtitle}</h2>
                  <p className="text-sm text-slate-300/70">{item.org}</p>
                  <p className="text-xs text-slate-400/70">{item.date}</p>

                  <p className="text-sm text-slate-200/80 pt-2 leading-relaxed">
                    {item.desc}
                  </p>

                  <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-slate-950/40 border border-slate-700/70 text-cyan-200">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HALF SCREEN MODAL */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* bottom sheet (half screen) */}
          <div className="absolute left-0 right-0 top-30 mx-auto w-full md:max-w-4xl">
            <div className="relative h-[65vh] md:h-[60vh] rounded-t-3xl border border-white/10 bg-slate-950/85 backdrop-blur shadow-2xl overflow-hidden animate-[sheetUp_.22s_ease-out]">
              {/* top gradient line */}
              {/* <div className="h-0.75 w-full bg-linear-to-r from-cyan-400 to-blue-500" /> */}

              {/* header */}
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {active?.subtitle}
                  </h3>
                  <p className="text-sm text-slate-300/70">
                    {active?.org} • {active?.date}
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* body */}
              <div className="px-5 pb-6 h-[calc(55vh-64px)] md:h-[calc(60vh-64px)] overflow-auto">
                <div className="grid md:grid-cols-2 gap-5">
                  {/* image */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/60">
                    <img
                      src={active?.image}
                      alt={active?.subtitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* description */}
                  <div className="space-y-3">
                    <p className="text-slate-200/85 leading-relaxed">
                      {active?.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-3 py-1 rounded-full text-xs border border-slate-700/70 bg-slate-900/40">
                        Certificate Preview
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                        Click outside / ESC to close
                      </span>
                    </div>

                    {/* future: open full image */}
                    <a
                      href={active?.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:brightness-110 transition"
                    >
                      Open Full Image ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* animations */}
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

export default Acheivements;
