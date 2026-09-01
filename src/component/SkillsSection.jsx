import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React JS",
      icon: <FaReact />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
    },
    {
      name: "Node JS",
      icon: <FaNodeJs />,
    },
    {
      name: "Express JS",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      {/* heading */}
      <h2 className="text-4xl font-bold text-center mb-10">
        My <span className="text-[#00FFFF]">Skills</span>
      </h2>

      {/* cards */}
      <div
        className="grid grid-cols-4 gap-6
        max-lg:grid-cols-3
        max-md:grid-cols-2
        max-sm:grid-cols-1
      "
      >
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[linear-gradient(135deg,#0d152a,#112240,#0f172a)] border-2 border-[#00FFFF] rounded-xl py-8 px-4  flex flex-col items-center gap-4 hover:-translate-y-2 hover:shadow-[0px_0px_20px_#00FFFF] hover:border-white duration-300 "
            >
              <span className="text-6xl text-[#00FFFF] drop-shadow-[0px_0px_10px_#00FFFF]">
                {skill.icon}
              </span>

              <h3 className="text-2xl font-semibold">{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
