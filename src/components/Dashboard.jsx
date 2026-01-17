import React, { useEffect, useState } from "react";
import { ArrowDown, Download, Send } from "lucide-react";
import first_image from "../assets/pic.png";
import resume from "../assets/Laxman_Kumar_MERN_Resume.pdf";
import ProfileHeroImage from "./ProfileHeroImage";
import Introduction from "./Introduction";
import Skills from "./Skills";

const Dashboard = () => {
  const message =
    "https://wa.me/916203523445?text=Hi%20Laxman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.";

  // rotating roles (typewriter)
  const roles = ["MERN Stack Developer", "React Developer", "Frontend Developer", "QA Learner"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 45 : 85;

    const t = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, i + 1));
        setI((p) => p + 1);
        if (i + 1 === current.length) setDeleting(true);
      } else {
        setTyped(current.slice(0, i - 1));
        setI((p) => p - 1);
        if (i - 1 === 0) {
          setDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [i, deleting, roleIndex]);

  return (
    <>
    <section className="relative overflow-hidden bg-slate-950 text-white py-10 md:min-h-screen flex items-center px-6 md:px-16">
      {/* background glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-130 h-130 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-130 h-130 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />

      {/* dotted grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(148,163,184,.25)_1px,transparent_1px)] bg-size-[18px_18px]" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/20 bg-white/5 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-sm text-slate-200/90">
              Available for opportunities • Ranchi, Jharkhand
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="relative text-cyan-300">
              Laxman Kumar
              <span className="absolute left-0 -bottom-2 w-full h-1.5 bg-cyan-400/20 rounded-full blur-sm" />
            </span>
          </h1>

          {/* typing role */}
          <div className="text-lg md:text-2xl text-slate-300">
            <span className="text-slate-400">I’m a </span>
            <span className="font-semibold text-white">{typed}</span>
            <span className="text-cyan-300 animate-pulse ml-1">|</span>
          </div>

          <p className="text-slate-300/80 text-base md:text-lg leading-relaxed">
            I build scalable web apps with clean UI and strong backend logic.
            I love converting ideas into real products using{" "}
            <span className="text-white font-semibold">React, Express.js, MongoDB</span>{" "}
            and modern tools.
          </p>

          {/* tech chips */}
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "MongoDB", "Express", "Tailwind", "Git"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-sm border border-slate-700/70 bg-slate-900/40 text-slate-200 hover:border-cyan-400/40 transition"
              >
                {t}
              </span>
            ))}
          </div>

          {/* HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="group bg-slate-900/50 border border-slate-700/60 rounded-2xl p-4 hover:-translate-y-1 transition shadow-lg">
              <div className="absolute opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h3 className="text-3xl font-bold text-cyan-300">10+</h3>
              <p className="text-slate-300/70">Projects Completed</p>
              <div className="mt-3 h-0.5 w-10 bg-cyan-400/40 rounded-full group-hover:w-16 transition-all" />
            </div>

            <div className="group bg-slate-900/50 border border-slate-700/60 rounded-2xl p-4 hover:-translate-y-1 transition shadow-lg">
              <h3 className="text-3xl font-bold text-cyan-300">1+</h3>
              <p className="text-slate-300/70">Internships</p>
              <div className="mt-3 h-0.5 w-10 bg-cyan-400/40 rounded-full group-hover:w-16 transition-all" />
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={resume}
              className="group relative overflow-hidden px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold transition hover:brightness-110 shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
              download
            >
              <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent" />
              <Download size={18} />
              Download CV
            </a>

            <a
              href={message}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl border border-cyan-400/70 text-cyan-200 hover:bg-cyan-400 hover:text-black transition shadow-lg shadow-cyan-500/10 inline-flex items-center gap-2"
            >
              <Send size={18} />
              Contact Me
            </a>
          </div>

          {/* scroll hint (optional) */}
          <div className="hidden md:flex items-center gap-2 text-slate-400 pt-4">
            <ArrowDown size={16} className="animate-bounce" />
            <span className="text-sm">Scroll to explore</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center relative">
          <ProfileHeroImage first_image={first_image} />
        </div>
      </div>
    </section>
    <Introduction />
    <Skills />
    </>
  );
};

export default Dashboard;
