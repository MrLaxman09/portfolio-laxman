import React, { useEffect, useMemo, useState } from "react";

const ProfileHeroImage = ({ first_image }) => {
  const fullText = "Laxman Kumar";
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // typewriter loop
  useEffect(() => {
    const speed = deleting ? 55 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        setText(fullText.slice(0, i + 1));
        setI((p) => p + 1);
        if (i + 1 === fullText.length) setDeleting(true);
      } else {
        setText(fullText.slice(0, i - 1));
        setI((p) => p - 1);
        if (i - 1 === 0) setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(t);
  }, [i, deleting]);

  // random subtle tilt on hover via CSS only (no libs)
  const zigZagId = useMemo(
    () => "zigzag-" + Math.random().toString(16).slice(2),
    []
  );

  return (
    <div className="flex justify-center relative">
      {/* soft glow blob */}
      <div className="absolute -inset-10 bg-cyan-400/20 blur-3xl rounded-full animate-pulse" />

      {/* frame wrapper */}
      <div className="relative group">
        {/* animated border (gradient ring) */}
        <div className="absolute -inset-0.5 rounded-[28px] bg-[conic-gradient(from_180deg,rgba(34,211,238,.0),rgba(34,211,238,.7),rgba(59,130,246,.6),rgba(34,211,238,.7),rgba(34,211,238,.0))] blur-[2px] opacity-80 group-hover:opacity-100 transition duration-300 animate-[spin_0.6s_linear_infinite]" />

        {/* zig-zag outer frame */}
        <div className="relative rounded-[28px] p-2.5 bg-slate-900/70 border border-slate-700/60 shadow-2xl backdrop-blur">
          {/* Zig-zag SVG overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* top zig */}
            <path
              d="M0,10 L5,6 L10,10 L15,6 L20,10 L25,6 L30,10 L35,6 L40,10 L45,6 L50,10 L55,6 L60,10 L65,6 L70,10 L75,6 L80,10 L85,6 L90,10 L95,6 L100,10"
              fill="none"
              stroke="rgba(34,211,238,.45)"
              strokeWidth="1.4"
            />
            {/* bottom zig */}
            <path
              d="M0,90 L5,94 L10,90 L15,94 L20,90 L25,94 L30,90 L35,94 L40,90 L45,94 L50,90 L55,94 L60,90 L65,94 L70,90 L75,94 L80,90 L85,94 L90,90 L95,94 L100,90"
              fill="none"
              stroke="rgba(34,211,238,.35)"
              strokeWidth="1.4"
            />
            {/* left zig */}
            <path
              d="M10,0 L6,5 L10,10 L6,15 L10,20 L6,25 L10,30 L6,35 L10,40 L6,45 L10,50 L6,55 L10,60 L6,65 L10,70 L6,75 L10,80 L6,85 L10,90 L6,95 L10,100"
              fill="none"
              stroke="rgba(59,130,246,.25)"
              strokeWidth="1.4"
            />
            {/* right zig */}
            <path
              d="M90,0 L94,5 L90,10 L94,15 L90,20 L94,25 L90,30 L94,35 L90,40 L94,45 L90,50 L94,55 L90,60 L94,65 L90,70 L94,75 L90,80 L94,85 L90,90 L94,95 L90,100"
              fill="none"
              stroke="rgba(59,130,246,.25)"
              strokeWidth="1.4"
            />
          </svg>

          {/* image + overlay */}
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src={first_image}
              alt="Laxman Kumar"
              className="
                w-72 h-82 md:w-96 md:h-130
                object-cover
                transform-gpu
                transition duration-500
                group-hover:scale-[1.03]
                group-hover:rotate-[0.4deg]
                group-hover:-translate-y-0.5
                will-change-transform
              "
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-90" />

            {/* name typing badge */}
            <div className="absolute left-5 bottom-5">
              <div className="px-4 py-2 rounded-2xl bg-black/55 border border-white/10 backdrop-blur-md shadow-lg">
                <p className="text-white font-semibold tracking-wide text-sm md:text-base">
                  {text}
                  <span className="inline-block w-2.5 ml-1 text-cyan-300 animate-pulse">
                    |
                  </span>
                </p>
                <p className="text-[11px] md:text-xs text-slate-200/70">
                  Full-Stack Developer
                </p>
              </div>
            </div>

            {/* small floating tag */}
            <div className="absolute right-5 top-5">
              <div className="px-3 py-1.5 rounded-xl bg-cyan-400/10 border border-cyan-300/20 text-cyan-200 text-[11px] md:text-xs backdrop-blur">
                Available for roles
              </div>
            </div>
          </div>
        </div>

        {/* subtle dots behind */}
        <div className="absolute -z-10 -right-6 -top-6 w-28 h-28 opacity-50">
          <div className="w-full h-full rounded-3xl bg-[radial-gradient(circle,rgba(34,211,238,.35)_1px,transparent_1px)] bg-size-[10px_10px]" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeroImage;
