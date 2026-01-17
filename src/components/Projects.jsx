import React from "react";

const projects = [
  {
    title: "BUYOU E-Commerce Platform",
    description:
      "A full-stack MERN e-commerce application with authentication, product categories, cart system, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://ecommerce-frontend-8qb7.onrender.com/", // baad me live link dal dena
  },
  {
    title: "Chef Booking Web Application",
    description:
      "Django-based platform to book professional chefs for events with scheduling, pricing, and profile management.",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    link: "https://chef-booking-backend-project.onrender.com/",
  },
  {
    title: "AgriTech Web Application",
    description:
      "Smart agriculture platform providing real-time weather data, crop recommendations, and marketplace features.",
    tech: ["Django", "REST API", "OpenWeather API", "Bootstrap"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-0 py-5 px-2 md:px-16 text-white">
      <h1 className="text-4xl font-bold mb-10">
        <span className="text-cyan-400">Projects</span>
      </h1>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-slate-900 border border-slate-700 rounded-2xl p-6 
            overflow-hidden hover:border-cyan-400 transition duration-500"
          >
            {/* Glow animation */}
            {/* <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500"></div> */}

            <h2 className="text-2xl font-semibold text-cyan-400 mb-3 group-hover:translate-x-1 transition">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 
                  rounded-full text-cyan-300 group-hover:scale-105 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-2xl 
                 bg-linear-to-r from-cyan-400 to-blue-500 text-black font-semibold 
                      shadow-lg shadow-cyan-500/20 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* shine effect */}
              <span className="absolute inset-0 translate-x-[-120%] group-hover/btn:translate-x-[120%] transition duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent" />

              {/* text */}
              <span className="relative flex items-center gap-2">
                View Live Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
