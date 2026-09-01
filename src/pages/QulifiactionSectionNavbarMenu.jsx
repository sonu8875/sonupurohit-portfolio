import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

function QulifiactionSectionNavbarMenu() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-5xl font-bold text-center mb-14 max-sm:text-4xl"
      >
        My <span className="text-[#00FFFF]">Qualification</span>
      </h1>

      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
        {/* BA */}
        <div
          data-aos="fade-right"
          className="bg-[linear-gradient(135deg,#0d152a,#112240,#0f172a)]
          border border-[#00FFFF] rounded-2xl p-8
          hover:-translate-y-2 hover:shadow-[0px_0px_20px_#00FFFF]
          duration-300"
        >
          <FaGraduationCap className="text-5xl text-[#00FFFF] mb-5" />

          <h2 className="text-3xl font-bold mb-4">Bachelor of Arts (B.A.)</h2>

          <p className="text-gray-300 mb-3">
            <strong>University:</strong> Mohanlal Sukhadia University (MLSU),
            Udaipur
          </p>

          <p className="text-gray-300 mb-3">
            <strong>Year:</strong> 2025
          </p>

          <p className="text-gray-300 leading-7">
            Successfully completed Bachelor of Arts with a strong interest in
            technology and software development.
          </p>
        </div>

        {/* MERN */}
        <div
          data-aos="fade-left"
          className="bg-[linear-gradient(135deg,#0d152a,#112240,#0f172a)]
          border border-[#00FFFF] rounded-2xl p-8
          hover:-translate-y-2 hover:shadow-[0px_0px_20px_#00FFFF]
          duration-300"
        >
          <MdSchool className="text-5xl text-[#00FFFF] mb-5" />

          <h2 className="text-3xl font-bold mb-4">MERN Stack Development</h2>

          <p className="text-gray-300 mb-3">
            <strong>Institute:</strong> QuickXpert Infotech, Thane
          </p>

          <p className="text-gray-300 mb-3">
            <strong>Status:</strong> Pursuing
          </p>

          <p className="text-gray-300 leading-7">
            Learning Full Stack Web Development including HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, MongoDB, Git and GitHub by building
            real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QulifiactionSectionNavbarMenu;
