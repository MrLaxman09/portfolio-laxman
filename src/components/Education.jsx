import React from "react";
import college_image from "../assets/RKDF-University.jpg"
import hindu_inter from "../assets/hindu_1.jpg"
import school_image from "../assets/school.webp"
const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Ram Krishna Dharmarth Foundation University",
    marks: "8.81 cgpa",
    location: "Ranchi, Jharkhand",
    duration: "2023 – 2026",
    description:
      "Currently pursuing BCA with a strong focus on Full Stack Development, Web Technologies, Databases, and Software Engineering concepts.",
    image: college_image, // college photo
  },
  {
    degree: "12th – Science Stream",
    institute: "Hindu +2 High School Hazaribagh (Science)",
    marks: "73%",
    location: "Jharkhand",
    duration: "2021 – 2023",
    description:
      "Completed higher secondary education with Science stream, building a strong foundation in logical thinking, mathematics, and problem-solving.",
    image: hindu_inter, // 12th school photo
  },
  {
    degree: "10th – JAC Board",
    institute: "Upgraded High School NapoKhurd (JAC)",
    marks: "84%",
    location: "Jharkhand",
    duration: "2020 – 2021",
    description:
      "Completed matriculation from Jharkhand Academic Council (JAC), developing discipline, analytical skills, and interest in technology.",
    image: school_image, // 10th school photo
  },
];

const Education = () => {
  return (
    <section className="min-h-0 py-5 px-2 md:px-16 text-white">
      <h1 className="text-4xl font-bold mb-7">
        <span className="text-cyan-400">Education</span>
      </h1>

      <div className="space-y-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="group grid md:grid-cols-2 gap-8 items-center 
            bg-slate-900 border border-slate-700 rounded-2xl p-6 
            hover:border-cyan-400 transition duration-500"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-cyan-400 opacity-10 blur-2xl group-hover:opacity-20 transition"></div>
              <img
                src={edu.image}
                alt={edu.institute}
                className="w-full h-64 object-cover rounded-2xl 
                group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-cyan-400">
                {edu.degree}
              </h2>

              <p className="text-lg font-medium">
                {edu.institute}
              </p>

              <p className="text-sm text-gray-400">
                {edu.location} · {edu.duration} · Percentage: {edu.marks}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
