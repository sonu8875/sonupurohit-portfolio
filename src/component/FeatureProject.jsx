import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function FeaturedProjects() {
  const projects = [
    {
      name: "E-Commerce",
      image:
        "https://m.media-amazon.com/images/G/31/bizzopedia/Blog_9/Blog_9_Image_1_Banner.png",
    },
    {
      name: "Weather App",
      image:
        "https://www-cdn.eumetsat.int/files/styles/16_9_large/public/2022-03/weather-lzone.jpg?h=d1cb525d&itok=bA0TVACl",
    },
    {
      name: "Real Estate",
      image:
        "https://www.hallmarkbuilders.in/images/blog/jan25/blog-banner-10Jan2025.jpg",
    },
    {
      name: "Password Generator",
      image:
        "https://t4.ftcdn.net/jpg/06/67/04/01/360_F_667040109_YkiAQqxcVgitoMBncbsEBCqJuO9TxCU7.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-14">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured <span className="text-[#00FFFF]">Projects</span>
      </h2>

      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
        }}
      >
        {projects.map((project, index) => (
          <SplideSlide key={index}>
            <Link to="/projects">
              <div
                className="
                border border-[#00FFFF]
                rounded-xl
                overflow-hidden
                cursor-pointer
                hover:shadow-[0px_0px_15px_#00FFFF]
                duration-300
                "
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-3">
                  <h3 className="text-center font-semibold text-lg">
                    {project.name}
                  </h3>
                </div>
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default FeaturedProjects;
