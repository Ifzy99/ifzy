"use client";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

const Contact = () => {
  const theme = useTheme();
  return (
    <div
      id="contact"
      className={`section-container flex flex-col justify-between bg-cover md:flex-row-reverse ${
        theme === "dark" ? "contact-bag" : "contact-light"
      }`}
    >
      <div className="mt-6 w-1/2">
        {/*<div className="contact-links space-x-6 justify-center"></div>*/}
        <div className="flex justify-center space-x-6 text-4xl">
          <a href="https://github.com/Ifzy99" className="social-icon ">
            <FontAwesomeIcon icon={faGithub} />
            <span className="dash"></span>
          </a>
          <a href="https://twitter.com/Ifzyman?s=09" className="social-icon">
            <FontAwesomeIcon icon={faXTwitter} />
            <span className="dash"></span>
          </a>
          <a href="https://www.linkedin.com/in/olatunbosun-ifeoluwa" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="dash"></span>
          </a>
        </div>
      </div>

      <div className="p-6 mt-6  shadow-lg">
        <div className="contact-header py-4 px-5 ">
          <p className="text-darkGrayishBlue">GET IN TOUCH</p>
          <h2 className="text-3xl text-grayishViolet font-black font-sans">
            Contact.
          </h2>
        </div>
        <div className="contact-form my-6">
          <div className="flex justify-center md:justify-start">
            <div className="w-[280px] bg-gradient-to-r from-transparent via-[#3b243e] to-[#51707d] border-2 border-transparent p-8 text-white rounded-2xl flex flex-col gap-5 border-box bg-[#212121] animate-gradient-x bg-no-repeat bg-[200%_100%] md:w-[400px]">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="space-x-3 text-[#717171]">
                    <FontAwesomeIcon icon={faUser} />
                    <label
                      htmlFor="name"
                      className="font-semibold text-xs"
                    >
                      Your Name
                    </label>
                  </span>
                  <input
                    required
                    name="clientName"
                    id="clientName"
                    type="text"
                    className="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-veryDarkBlue placeholder:text-xs"
                    placeholder="What's your name?"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="space-x-3 text-[#717171]">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <label
                      htmlFor="email"
                      className="font-semibold text-xs"
                    >
                      Your Email
                    </label>
                  </span>
                  <input
                    required
                    name="email"
                    id="email"
                    type="text"
                    className="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white focus:outline-none focus:border-veryDarkBlue placeholder:text-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="space-x-3 text-[#717171]">
                    <FontAwesomeIcon icon={faMessage} />
                    <label
                      htmlFor="textarea"
                      className="font-semibold text-xs"
                    >
                      Your Message
                    </label>
                  </span>
                  <textarea
                    required
                    cols="50"
                    rows="10"
                    id="textarea"
                    name="textarea"
                    placeholder="Write message..."
                    className="px-4 py-3 rounded-lg bg-transparent border border-[#414141] text-white h-24 placeholder:text-xs focus:outline-none focus:border-veryDarkBlue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-1/2 self-start px-4 py-3 bg-[#313131] border border-[#414141] text-[#717171] font-semibold rounded-lg hover:bg-white hover:border-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
