import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Navbar from "../component/Navbar";

function ProjectsPage() {
  const projects = [
    {
      title: "Full Stack MERN Todo App",
      desc: "A complete MERN Stack Todo application with CRUD operations, REST APIs, MongoDB integration, and a responsive user interface.",
      tech: "React • Node.js • Express.js • MongoDB • Tailwind CSS",
      live: "https://todoapp-net.netlify.app/",
      github: "https://github.com/sonu8875/mern-todo-app",
    },
    {
      title: "E-Commerce Website",
      desc: "Responsive ecommerce shopping website with modern design.",
      tech: "React • Tailwind CSS • API",
      live: "https://shop-ease-net.netlify.app",
      github: "#",
    },

    {
      title: "Weather App",
      desc: "Weather forecasting application using API integration.",
      tech: "React • API • CSS",
      live: "https://weatherapp-net.netlify.app",
      github: "#",
    },
    {
      title: "Real Estate Website",
      desc: "Modern responsive real estate property website with clean UI.",
      tech: "React • Tailwind CSS",
      live: "https://sonu-realestate-property.netlify.app",
      github: "#",
    },

    {
      title: "Password Generator",
      desc: "Generate strong and secure passwords with custom options.",
      tech: "React • JavaScript",
      live: "https://password-genrator-net.netlify.app",
      github: "#",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="container mx-auto px-4 py-14 min-h-screen">
        {/* Heading */}
        <h1
          data-aos="fade-down"
          className="text-5xl font-bold text-center mb-14 max-sm:text-4xl"
        >
          My <span className="text-[#00FFFF]">Projects</span>
        </h1>

        {/* Project Cards */}
        <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="
              bg-[linear-gradient(135deg,#0d152a,#112240,#0f172a)]
              border border-[#00FFFF]
              rounded-2xl
              p-8
              hover:-translate-y-2
              hover:shadow-[0px_0px_20px_#00FFFF]
              duration-300
            "
            >
              {/* Project Number */}
              <span className="text-6xl font-bold text-[#00FFFF]/20">
                0{index + 1}
              </span>

              {/* Title */}
              <h2 className="text-3xl font-bold mt-4 mb-4">{project.title}</h2>

              {/* Description */}
              <p className="text-gray-300 leading-7 mb-4">{project.desc}</p>

              {/* Tech Stack */}
              <p className="text-[#00FFFF] font-semibold text-lg mb-6">
                {project.tech}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a href={project.live}>
                  <button
                    className="
                    custom-bg-secondary
                    px-5 py-2 rounded-lg
                    flex items-center gap-2
                    hover:scale-105
                    duration-300
                  "
                  >
                    Live Demo
                    <FiExternalLink />
                  </button>
                </a>

                <a href={project.github}>
                  <button
                    className="
                    border border-[#00FFFF]
                    px-5 py-2 rounded-lg
                    flex items-center gap-2
                    hover:bg-[#00FFFF]
                    hover:text-black
                    duration-300
                  "
                  >
                    GitHub
                    <FaGithub />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
