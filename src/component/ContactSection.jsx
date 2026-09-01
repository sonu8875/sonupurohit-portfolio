import React, { useState } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsSendCheckFill } from "react-icons/bs";
import { FaMobile, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  const [result, setResult] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // return;
    setResult("Sending....");
    const formData = new FormData(event.target);
    // const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_REACT__FORM_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <>
      <div id="outline" className="border-t-4 border-t-[#00FFFF] mt-6"></div>
      <section
        className="grid grid-cols-[1.3fr_1fr] gap-4 px-4 py-8   container mx-auto 
    max-lg:grid-cols-1 max-lg:gap-8
    "
      >
        {/* left part - image section */}
        <div>
          <img
            className="w-11/12 mx-auto rounded-lg h-150 max-md:h-120 max-sm:h-100 object-fit-contain "
            src="/contact-left-image.gif"
            alt=""
          />
        </div>

        {/* right part - contact section */}
        <div className="shadow-[0px_0px_20px_#00FFFF] border-4 border-[#00FFFF] rounded-xl py-8 px-6">
          <form
            method="post"
            onSubmit={handleFormSubmit}
            className="w-10/12 mx-auto space-y-4"
          >
            <h3 className="text-3xl font-bold text-white w-fit px-8 mx-auto border-b-4 border-b-[#00FFFF] mb-10 max-sm:text-2xl">
              Contact Me 😊
            </h3>

            {/* //*user name input*/}
            <div className="flex items-center gap-2 w-full">
              <div>
                <i>
                  <FaUser fontSize={30} />
                </i>
              </div>
              <div className="w-full">
                <input
                  required
                  minLength={4}
                  className="w-full outline-none text-xl px-3 py-1 placeholder:text-[#00FFFF] border-b-2 border-b-[#00FFFF]"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                />
              </div>
            </div>
            {/* //*user email input*/}
            <div className="flex items-center gap-2 w-full">
              <div>
                <i>
                  <MdEmail fontSize={30} />
                </i>
              </div>
              <div className="w-full">
                <input
                  required
                  name="email"
                  className="w-full outline-none text-xl px-3 py-1 placeholder:text-[#00FFFF] border-b-2 border-b-[#00FFFF]"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            {/* //*user mobile number input*/}
            <div className="flex items-center gap-2 w-full">
              <div>
                <i>
                  <FaMobile fontSize={30} />
                </i>
              </div>
              <div className="w-full">
                <input
                  required
                  name="mobile-number"
                  pattern="^[6-9][0-9]{9}$"
                  maxLength={10}
                  className="w-full outline-none text-xl px-3 py-1 placeholder:text-[#00FFFF] border-b-2 border-b-[#00FFFF]"
                  type="text"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>
            {/* //*user message query input*/}
            <div className="flex flex-col items-start gap-2 w-full">
              <div>
                <i>
                  <BiSolidMessageDetail fontSize={30} />
                </i>
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Write your message..."
                  name="message"
                  rows={5}
                  className="w-full outline-none text-xl px-3 py-1 placeholder:text-[#00FFFF] rounded border-2 border-[#00FFFF]"
                  id=""
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="custom-bg-secondary px-6 py-2 rounded flex items-center gap-2 cursor-pointer font-semibold active:scale-95 duration-300 text-xl w-fit"
              >
                <span>{result}</span>
                <span>
                  <BsSendCheckFill />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactSection;
