import React, { useState } from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsSendCheckFill } from "react-icons/bs";

function HireMeSection() {
  const [result, setResult] = useState("Send Message");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_REACT__FORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      setResult("Something Went Wrong");
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 min-h-screen">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-5xl font-bold text-center mb-14 max-sm:text-4xl"
      >
        Hire <span className="text-[#00FFFF]">Me</span>
      </h1>

      <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
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
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>

          <p className="text-gray-300 leading-8 mb-8">
            I'm a passionate Frontend Developer specializing in React.js and
            modern web technologies. I create responsive, user-friendly, and
            visually appealing websites with clean, efficient code. I'm always
            excited to work on innovative projects and collaborate with creative
            teams.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MdEmail className="text-3xl text-[#00FFFF]" />
              <span>your-email@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-2xl text-[#00FFFF]" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationOn className="text-3xl text-[#00FFFF]" />
              <span>Thane, Maharashtra, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl">
            <a
              href="https://github.com/sonu8875"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-[#00FFFF] duration-300" />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-[#00FFFF] duration-300" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form
          data-aos="fade-left"
          onSubmit={handleFormSubmit}
          className="border border-[#00FFFF] rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            required
            minLength={3}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-transparent border border-gray-500 outline-none placeholder:text-gray-400 focus:border-[#00FFFF]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-transparent border border-gray-500 outline-none placeholder:text-gray-400 focus:border-[#00FFFF]"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject (e.g. Frontend Developer Position)"
            className="w-full p-4 rounded-lg bg-transparent border border-gray-500 outline-none placeholder:text-gray-400 focus:border-[#00FFFF]"
          />

          <textarea
            rows="6"
            name="message"
            required
            placeholder="Write your message..."
            className="w-full p-4 rounded-lg bg-transparent border border-gray-500 outline-none placeholder:text-gray-400 focus:border-[#00FFFF]"
          ></textarea>

          <button
            type="submit"
            className="custom-bg-secondary px-8 py-3 rounded-lg flex items-center gap-3 font-semibold hover:scale-105 duration-300"
          >
            <span>{result}</span>
            <BsSendCheckFill />
          </button>
        </form>
      </div>
    </section>
  );
}

export default HireMeSection;
