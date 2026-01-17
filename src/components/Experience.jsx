import React from "react";

const experiences = [
  {
    role: "Software Developer Engineer Intern",
    company: "Shashi Infotech",
    type: "Onsite",
    duration: "Aug 2025 – Sep 2025",
    points: [
      "Developed a Django-based Chef Booking platform for events and parties.",
      "Implemented secure authentication, profile management, and role-based access.",
      "Built chef onboarding system with bio, experience, specialties, and image gallery.",
      "Designed booking system with scheduling, pricing, and availability logic.",
      "Handled complete full-stack development including database operations.",
    ],
    tech: ["Django", "Python", "SQLite", "Bootstrap", "REST API"],
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Horizon ICT",
    type: "Onsite",
    duration: "Apr 2025 – Jun 2025",
    points: [
      "Built a full-stack MERN e-commerce web application from scratch.",
      "Implemented JWT-based authentication (Login & Logout).",
      "Developed category-based shopping and Add to Cart functionality.",
      "Designed an Admin Dashboard for managing products and application data.",
      "Optimized APIs, improving overall page load performance by 30%.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
  },
];

const Experience = () => {
  return (
    <section className="min-h-0 py-7 px-2 md:px-16 text-white">
      <h1 className="text-4xl font-bold mb-5">
        <span className="text-cyan-400">Experience</span>
      </h1>

      <div className="relative space-y-16">

        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-cyan-400/80 to-transparent"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative md:pl-14"
          >
            {/* Timeline dot */}
            <div className="absolute left-2 top-6 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 group-hover:scale-110 transition"></div>

            {/* Card */}
            <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-black 
              border border-slate-700 rounded-2xl p-4 md:p-8 
              hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 
              transition duration-500 overflow-hidden"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-10 blur-3xl transition pointer-events-none"></div>

              {/* Header */}
              <div className="flex flex-wrap justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-cyan-400">
                    {exp.role}
                  </h2>
                  <p className="text-gray-300">
                    {exp.company} · <span className="text-gray-400">{exp.type}</span>
                  </p>
                </div>
                <span className="text-sm text-gray-400 bg-slate-800 px-4 py-1 rounded-full border border-slate-700">
                  {exp.duration}
                </span>
              </div>

              {/* Points */}
              <ul className="space-y-3 text-gray-300 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full 
                    bg-slate-800 border border-slate-700 text-cyan-300
                    group-hover:bg-cyan-400 group-hover:text-black transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
