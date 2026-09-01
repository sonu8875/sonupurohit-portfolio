import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-4 border-[#00FFFF]">
      <nav
        className="flex justify-between  items-center px-6 py-4  container mx-auto 
          max-md:flex-wrap
        "
      >
        {/* left part - logo */}
        <h1
          data-aos="zoom-in"
          className="text-3xl font-bold text-shadow-amber-50 "
        >
          Port<span className="custom-text-secondary">folio</span>
        </h1>

        {/* right part - menu list */}
        <div
          style={{
            left: isMenuOpen ? "0" : "-100%",
            transition: "all linear 0.5s",
          }}
          className="max-md:absolute max-md:top-0 max-md:left-0 max-md:bg-[#0d152a] max-md:p-8 max-md:min-h-screen max-md:w-8/12"
        >
          {/* //* logo for mobile and tab devices */}
          <h1
            data-aos="zoom-in"
            className="text-3xl font-bold text-shadow-amber-50 text-center mb-4 -mt-3 border-b-2 w-fit mx-auto px-6 border-b-[#00FFFF]
            hidden max-md:block
            "
          >
            Port<span className="custom-text-secondary">folio</span>
          </h1>

          <ul
            id="nav-menus"
            className="flex justify-center gap-4 items-center text-xl 
                max-md:flex-col
                "
          >
            <li data-aos="fade-up" data-aos-delay="200">
              <NavLink to="/">Home</NavLink>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <NavLink to="/projects">Project</NavLink>
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <NavLink to="/qualification">Qualification</NavLink>
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <NavLink to="/about">AboutMe</NavLink>
            </li>
            <li
              data-aos="fade-up"
              data-aos-delay="600"
              className="*animate-bounce"
            >
              <NavLink
                to="/hireme"
                className="custom-bg-secondary px-4 py-2 capitalize rounded-tl-lg rounded-br-lg "
              >
                hire me
              </NavLink>
            </li>
          </ul>
        </div>

        {/* //* button to toggle nav menus on mobile or tablet */}
        <div className="hidden max-md:block">
          <button onClick={handleMenuToggle} className="text-4xl ">
            {isMenuOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
