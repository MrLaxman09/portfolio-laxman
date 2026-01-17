import React from "react";
import { ExternalLink, Code, Server, Database, Wrench, Bug, Users } from "lucide-react";

const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", concept: 70 },
      { name: "Python", link: "https://docs.python.org/3/", concept: 50  },
      { name: "C++", link: "https://cplusplus.com/doc/tutorial/", concept: 60  },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", link: "https://react.dev/learn", concept: 70  },
      { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", concept: 80  },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", concept: 82  },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/docs", concept: 60  },
      { name: "Bootstrap", link: "https://getbootstrap.com/docs/", concept: 60  },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", link: "https://nodejs.org/en/docs", concept: 50  },
      { name: "Express.js", link: "https://expressjs.com/", concept: 50  },
      { name: "Django", link: "https://docs.djangoproject.com/en/stable/", concept: 60  },
      { name: "REST API", link: "https://restfulapi.net/", concept: 63  },
      { name: "JWT", link: "https://jwt.io/introduction", concept: 50  },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", link: "https://www.mongodb.com/docs/", concept: 65  },
      { name: "SQLite", link: "https://www.sqlite.org/docs.html", concept: 65  },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", link: "https://git-scm.com/doc", concept: 70  },
      { name: "GitHub", link: "https://docs.github.com/", concept: 90  },
      { name: "Postman", link: "https://learning.postman.com/docs/", concept: 90  },
      { name: "VS Code", link: "https://code.visualstudio.com/docs", concept: 85  },
    ],
  },
  {
    title: "Testing & QA Basics",
    skills: [
      { name: "Manual Testing", link: "https://www.guru99.com/manual-testing.html", concept: 50  },
      { name: "Test Cases", link: "https://www.guru99.com/test-case.html", concept: 50  },
      { name: "Bug Reporting", link: "https://www.guru99.com/defect-management-process.html", concept: 40  },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork", link: "https://www.mindtools.com/communication-skills", concept: 60  },
      { name: "Communication", link: "https://www.skillsyouneed.com/ips/communication-skills.html", concept: 80  },
      { name: "Problem Solving", link: "https://www.mindtools.com/problem-solving-skills", concept: 68  },
    ],
  },
];

const iconMap = {
  "Programming Languages": <Code size={20} />,
  "Frontend Development": <Wrench size={20} />,
  "Backend Development": <Server size={20} />,
  "Databases": <Database size={20} />,
  "Tools & Platforms": <Wrench size={20} />,
  "Testing & QA Basics": <Bug size={20} />,
  "Soft Skills": <Users size={20} />,
};

const Skills = () => {
  return (
    <section className="relative py-12 px-4 md:px-16 text-white overflow-hidden">
      <div className="absolute -top-32 -left-32 w-105 h-105 bg-cyan-500/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-105 h-105 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm tracking-widest text-slate-400 uppercase">Tech Stack</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-300 to-blue-400">
              Skills & Expertise
            </span>
          </h1>

          <div className="mt-4 h-0.75 w-100 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, idx) => (
            <div
              key={category.title}
              className="group relative rounded-3xl border border-slate-700/60 bg-slate-900/40 backdrop-blur p-6 shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-cyan-400/15 via-transparent to-blue-500/10 blur-md" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200 flex items-center justify-center">
                    {iconMap[category.title]}
                  </div>
                  <h2 className="text-xl font-semibold text-cyan-300">
                    {category.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li
                      key={skill.name}
                      className="transform translate-y-2 opacity-0 animate-[fadeSlide_0.5s_ease_forwards]"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item flex items-center justify-between px-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-xl hover:bg-cyan-400/90 hover:text-black transition-all"
                      >
                        <span className="font-medium">{skill.name}</span>

                        <span className="flex items-center gap-1 text-sm opacity-70 group-hover/item:opacity-100 transition">
                          Docs
                          <ExternalLink
                            size={14}
                            className="transform group-hover/item:translate-x-1 transition"
                          />
                        </span>
                      </a>
                      <div className="mt-4 relative w-full">
  {/* background track */}
  <div className="h-0.5 w-full bg-slate-700/40 rounded-full"></div>

  {/* progress bar */}
  <div
    className="absolute top-0 left-0 h-px bg-cyan-400/80 rounded-full transition-all"
    style={{ width: `${skill.concept || 60}%` }}
  >
    {/* percentage label */}
    <span
      className="absolute -top-2 right-0 text-xs text-cyan-300 translate-x-1/2"
    >
      {skill.concept || 60}%
    </span>
  </div>
</div>

                    </li>
                  ))}
                </ul>

                
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </section>
  );
};

export default Skills;
