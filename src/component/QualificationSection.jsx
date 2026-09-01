import React from "react";
import {
  FaCode,
  FaSchool,
  FaMapLocationDot,
  FaRankingStar,
} from "react-icons/fa6";

function QualificationSection() {
  const qualificationDetails = [
    {
      title: "College Education",
      institution: {
        icon: <FaSchool />,
        name: "Mohanlal Sukhadia University",
      },
      location: {
        icon: <FaMapLocationDot />,
        address: "Udaipur, Rajasthan",
      },
      scoreItems: {
        icon: <FaRankingStar />,
        scoreWithYear: "Completed in 2025",
      },
    },
    {
      title: "ITI Education",
      institution: {
        icon: <FaSchool />,
        name: "ITI, Nathdwara",
      },
      location: {
        icon: <FaMapLocationDot />,
        address: "Electronic / Technical Trade",
      },
      scoreItems: {
        icon: <FaRankingStar />,
        scoreWithYear: "Practical Technical Learning",
      },
    },
    {
      title: "Frontend Development",
      institution: {
        icon: <FaCode />,
        name: "Self-Taught Frontend Developer",
      },
      location: {
        icon: <FaMapLocationDot />,
        address: "HTML • CSS • React • JavaScript • Tailwind",
      },
      scoreItems: {
        icon: <FaRankingStar />,
        scoreWithYear: "Building Responsive Web Applications",
      },
    },
  ];

  return (
    <div
      data-aos="fade-down"
      className="
        container mx-auto px-4
        grid grid-cols-3 gap-10
        max-lg:grid-cols-2
        max-md:grid-cols-1
      "
    >
      {qualificationDetails.map((qualification, index) => {
        const { title, institution, location, scoreItems } = qualification;

        return (
          <div
            key={index}
            className="
              rounded-tl-3xl rounded-br-3xl
              border-4 border-[#00FFFF]
              px-8 py-6
              h-full
              flex flex-col
              gap-5
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            {/* title */}
            <div>
              <h3
                className="
                  custom-font-salsa
                  uppercase
                  pb-2
                  text-2xl
                  font-bold
                  text-center
                  border-b-4 border-[#00FFFF]
                "
              >
                {title}
              </h3>
            </div>

            {/* qualification body */}
            <div className="space-y-4">
              {/* institute */}
              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#00FFFF]">
                  {institution.icon}
                </span>

                <span
                  className="
                    capitalize
                    text-xl
                    font-medium
                    custom-text-secondary
                  "
                >
                  {institution.name}
                </span>
              </div>

              {/* location */}
              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#00FFFF]">{location.icon}</span>

                <span
                  className="
                    text-lg
                    font-medium
                    custom-text-secondary
                  "
                >
                  {location.address}
                </span>
              </div>

              {/* score */}
              <div className="flex items-start gap-3">
                <span className="text-3xl text-[#00FFFF]">
                  {scoreItems.icon}
                </span>

                <span
                  className="
                    text-lg
                    font-medium
                    custom-text-secondary
                  "
                >
                  {scoreItems.scoreWithYear}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QualificationSection;
