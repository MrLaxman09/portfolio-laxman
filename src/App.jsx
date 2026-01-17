import React, { useState } from "react";
import "./App.css";
import profile_image from "./assets/high-brightness.webp";
import Introduction from "./components/Introduction";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import { motion, AnimatePresence } from "framer-motion";
import Acheivements from "./components/Acheivements";
import Certificates from "./components/Certificates";

function App() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
  };

  const pageTransition = {
    duration: 0.4,
    ease: "easeInOut",
  };

  return (
    <>
      <div className="flex w-screen h-[93vh] md:h-screen  bg-gray-800 text-gray-300 overflow-hidden">
        {/* flex hataye hai */}
        <div className="hidden md:flex w-70 h-screen flex-col bg-linear-to-b from-slate-950 via-slate-900 to-black border-r border-white/10">
          {/* PROFILE */}
          <div className="px-6 py-8 flex flex-col items-center border-b border-white/10">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-cyan-400 blur-xl opacity-20"></div>
              <img
                src={profile_image}
                className="relative w-24 h-24 rounded-2xl object-cover border border-slate-700"
                alt="profile"
              />
            </div>

            <h2 className="mt-4 text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
              Laxman Kumar
            </h2>

            <p className="text-xs text-gray-400 mt-1">
              Full Stack / React Developer
            </p>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {[
              "Dashboard",
              "Introduction",
              "Skills",
              "Projects",
              "Experience",
              "Education",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`group relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
        ${
          active === item
            ? "bg-cyan-500 text-black"
            : "text-gray-300 hover:bg-slate-800"
        }`}
              >
                {/* LEFT ACTIVE BAR */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-10 w-1 rounded-full transition
          ${
            active === item
              ? "bg-black"
              : "bg-transparent group-hover:bg-cyan-400/50"
          }`}
                ></span>

                <span>{item}</span>
              </button>
            ))}
          </nav>

          {/* EXTRA */}
          <div className="px-4 pb-6 space-y-2">
            {["Acheivements", "Certificates"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full px-4 py-3 rounded-xl text-sm transition
        ${
          active === item
            ? "bg-teal-500 text-black"
            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
        }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* FOOTER */}
          <div className="px-6 py-4 border-t border-white/10 text-xs text-gray-500 text-center">
            © 2026 Laxman Kumar
            <br />
            All rights reserved
          </div>
        </div>

        {/* right panel */}
        <div className="w-full flex flex-col min-h-0 px-0 md:px-6 py-0 md:py-4">
          {/* MOBILE TOP BAR */}
          <div className="md:hidden sticky top-0 z-50 backdrop-blur-xl bg-linear-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border-b border-white/10 px-4 py-4">
            <div className="flex items-center justify-between">
              {/* LEFT */}
              <div>
                <h2 className="text-lg font-extrabold text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-500">
                  Laxman Kumar
                </h2>
                <span className="text-xs text-gray-400">
                  Full Stack / React Developer
                </span>
              </div>

              {/* RIGHT – DASHBOARD BUTTON */}
              <button
                onClick={() => setMenuOpen(true)}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 hover:bg-cyan-500/20 transition"
              >
                Dashboard ☰
              </button>
            </div>
          </div>
          {/* MOBILE SLIDE PANEL */}
          <div
            className={`fixed inset-0 z-999 md:hidden transition ${
              menuOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* OVERLAY */}
            <div
              onClick={() => setMenuOpen(false)}
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* PANEL */}
            <div
              className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-linear-to-br from-slate-900 via-slate-800 to-black
    border-l border-white/10 shadow-2xl transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              {/* HEADER */}
              <div className="px-5 py-4 border-b border-white/10 flex justify-between items-center">
                <h3 className="text-lg font-bold text-cyan-400">Navigation</h3>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-red-400 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="p-5 space-y-3">
                {[
                  "Dashboard",
                  "Introduction",
                  "Skills",
                  "Projects",
                  "Experience",
                  "Education",
                  "Acheivements",
                  "Certificates",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActive(item);
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition
          ${
            active === item
              ? "bg-cyan-500 text-black"
              : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-dotted rounded flex-1 md:pb-6 min-h-0 bg-slate-800 overflow-y-auto overscroll-contain">
            {/* {active === "Dashboard" ? <Dashboard /> : <></>}
            {active === "Introduction" ? <Introduction /> : <></>}
            {active === "Skills" ? <Skills /> : <></>}
            {active === "Projects" ? <Projects /> : <></>}
            {active === "Experience" ? <Experience /> : <></>}
            {active === "Education" ? <Education /> : <></>}
            {active === "Acheivements" ? "Acheivements" : <></>}
            {active === "Certificates" ? "Certificates" : <></>} */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
                className="h-full"
              >
                {active === "Dashboard" && <Dashboard />}
                {active === "Introduction" && <Introduction />}
                {active === "Skills" && <Skills />}
                {active === "Projects" && <Projects />}
                {active === "Experience" && <Experience />}
                {active === "Education" && <Education />}
                {active === "Acheivements" && <Acheivements />}
                {active === "Certificates" && <Certificates />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
