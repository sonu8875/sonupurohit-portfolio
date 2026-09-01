import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

function HeroSection() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "ReactJS Developer", "Quick Learner"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "🖋️",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="grid grid-cols-2 items-center justify-items-center min-h-[80vh] text-center py-8 container mx-auto
      max-lg:grid-cols-1 max-lg:gap-8 max-md:px-4
    "
    >
      {/* left part start here */}
      <div className="space-y-3" data-aos="fade-up">
        <p
          className="text-3xl font-semibold custom-font-salsa
          max-sm:text-2xl
          "
        >
          Hello! My Name is
        </p>
        <h2 className="text-8xl font-bold max-sm:text-5xl max-md:text-7xl ">
          <span className="custom-font-salsa text-shadow-[3px_0_0_#00FFFF]">
            Sonu{" "}
          </span>
          <span className="custom-font-salsa custom-text-secondary text-shadow-[3px_0_0_#FFFF]">
            Purohit
          </span>
        </h2>
        <p className="text-xl font-semibold custom-font-salsa">
          I'm a
          <span
            ref={el}
            className="custom-font-salsa text-3xl custom-text-secondary ml-2"
          >
            Frontend Developer
          </span>
        </p>
        <div className="space-x-2.5 max-sm:space-y-3">
          <a
            href="sonupurohit uodatedresume.pdf"
            className="custom-bg-secondary px-6 py-2 cursor-pointer font-medium rounded-md custom-font-poppins"
          >
            Download CV
          </a>
          <button className="border-2 border-[#10b9e3] cursor-pointer px-6 py-2 font-medium rounded-md custom-font-poppins">
            <Link to={"/projects"}>Live Project Links</Link>
          </button>
        </div>
      </div>
      {/* left part end here */}

      {/* right part start here */}
      <div
        data-aos="fade-up"
        className="border-4 border-[#00FFFF] w-10/12 h-[450px] max-md:h-100 max-sm:h-50 rounded-xl overflow-hidden  shadow-[0px_0px_20px_#00FFFF]"
      >
        <img
          src="/hero-section-right-image.gif"
          className="w-full h-full"
          alt="coder image"
        />
      </div>
      {/* right part end here */}
    </div>
  );
}

export default HeroSection;
