import React from "react";
import { FaUserGraduate, FaLaptopCode, FaLocationDot } from "react-icons/fa6";

function AboutPage() {
  return (
    
    <section className="container mx-auto px-4 py-16 min-h-screen">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-5xl font-bold text-center mb-14 max-sm:text-4xl"
      >
        About <span className="text-[#00FFFF]">Me</span>
      </h1>

      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 items-center">
        {/* Left Side */}
        <div
          data-aos="fade-right"
          className="bg-[linear-gradient(135deg,#0d152a,#112240,#0f172a)]
          border border-[#00FFFF]
          rounded-2xl
          p-8
          hover:shadow-[0px_0px_20px_#00FFFF]
          duration-300"
        >
          <h2 className="text-3xl font-bold mb-6">
            Hi, I'm <span className="text-[#00FFFF]">Sonu Purohit</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am a passionate MERN Stack Developer currently learning Full Stack
            Web Development. I enjoy building responsive and user-friendly web
            applications using modern technologies.
          </p>

          <p className="text-gray-300 leading-8 text-lg mt-5">
            My goal is to become a skilled Full Stack Developer and work on
            real-world projects while continuously improving my technical and
            problem-solving skills.
          </p>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          className="space-y-6"
        >
          <div className="flex items-center gap-4 border border-[#00FFFF] rounded-xl p-5">
            <FaUserGraduate className="text-3xl text-[#00FFFF]" />
            <div>
              <h3 className="text-2xl font-semibold">Education</h3>
              <p className="text-gray-300">
                Bachelor of Arts (B.A.) - MLSU University
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-[#00FFFF] rounded-xl p-5">
            <FaLaptopCode className="text-3xl text-[#00FFFF]" />
            <div>
              <h3 className="text-2xl font-semibold">Course</h3>
              <p className="text-gray-300">
                MERN Stack Development - QuickXpert Infotech
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-[#00FFFF] rounded-xl p-5">
            <FaLocationDot className="text-3xl text-[#00FFFF]" />
            <div>
              <h3 className="text-2xl font-semibold">Location</h3>
              <p className="text-gray-300">
                Thane, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;