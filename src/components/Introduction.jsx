import React from "react";
import { Briefcase, Brain, Package, MapPin, Home, Target } from "lucide-react";

const Introduction = () => {
  return (
    <section className="relative overflow-hidden py-12 px-4 md:px-16 text-white">
      {/* background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] bg-cyan-500/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="mb-10">
          <p className="text-sm tracking-widest text-slate-400 uppercase">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-cyan-300">Overview</span>
            <span className="text-slate-200"> & Introduction</span>
          </h1>
          <div className="mt-4 h-[2px] w-24 bg-cyan-400/40 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* SUMMARY (left big card) */}
          <div className="lg:col-span-1">
            <div className="relative rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur p-6 shadow-xl">
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/10 blur-md opacity-70" />
              <div className="relative">
                <h2 className="text-lg font-semibold text-slate-100">Quick Summary</h2>
                <p className="mt-4 text-slate-300/85 leading-relaxed">
                  I am <span className="text-white font-semibold">Laxman Kumar</span>, a
                  passionate and detail-oriented developer focused on building modern,
                  scalable, and user-friendly web applications. My work spans across
                  frontend, backend, and database layers, helping me deliver complete
                  end-to-end solutions.
                </p>

                {/* mini stats / tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Node", "MongoDB", "Tailwind", "APIs"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs border border-slate-700/70 bg-slate-950/40 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* INFO GRID (right cards) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* card */}
            <InfoCard
              icon={<Briefcase size={18} />}
              title="Roles I’m Targeting"
              desc="Full Stack Developer · React Developer · MERN Stack Developer"
            />
            <InfoCard
              icon={<Brain size={18} />}
              title="Core Skills"
              desc="React.js, Node.js, Express.js, MongoDB, Django, REST APIs, JWT, Tailwind CSS"
            />
            <InfoCard
              icon={<Package size={18} />}
              title="Projects"
              desc="E-Commerce Platform, Chef Booking System, AgriTech Web Application"
            />
            <InfoCard
              icon={<Target size={18} />}
              title="Career Goal"
              desc="Seeking opportunities to grow as a Full Stack or React Developer while contributing to impactful real-world products."
            />
            <InfoCard
              icon={<MapPin size={18} />}
              title="Current Location"
              desc="Ranchi, Jharkhand, India (834003)"
            />
            <InfoCard
              icon={<Home size={18} />}
              title="Permanent Location"
              desc="Ranchi, Jharkhand, India"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, desc }) => {
  return (
    <div className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/35 backdrop-blur p-5 shadow-lg hover:-translate-y-1 transition">
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/12 via-transparent to-blue-500/12" />

      <div className="relative flex gap-3">
        <div className="mt-0.5 w-9 h-9 rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 flex items-center justify-center">
          {icon}
        </div>

        <div>
          <h3 className="text-cyan-300 font-semibold">{title}</h3>
          <p className="mt-1 text-slate-300/80 text-sm leading-relaxed">{desc}</p>

          {/* underline accent */}
          <div className="mt-3 h-[2px] w-10 bg-cyan-400/35 rounded-full group-hover:w-16 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
