import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { TypingText } from "./CustomTexts";
import { staggerContainer } from "../utils/motion.tsx";
import About from "./About.tsx";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsSubmitted(false);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const firstName = (form.first_name as HTMLInputElement).value.trim();
    const lastName = (form.last_name as HTMLInputElement).value.trim();
    const email = (form.from_email as HTMLInputElement).value.trim();
    const phone = (form.phone_number as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const formData = {
      to_name: "Website Admin",
      first_name: firstName,
      last_name: lastName,
      from_email: email,
      phone_number: phone,
      message: message,
    };

    emailjs
      .send(
        "service_sxlzv1n",
        "template_shdg10c",
        formData,
        "As14gT22qYr9_Dgv3"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Failed to send email.", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      });
  };

  return (
    <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif] min-h-screen">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center px-6"
      >
        <About
          title="Let's"
          description="       I’d love to hear from you! Whether you’re interested in discussing a
        potential project, sharing ideas, or simply want to chat about
        technology, feel free to reach out. I’m always open to new opportunities
        and collaborations."
          titleHighlight="Connect"
        />
        <TypingText
          title="| Contact"
          textStyles="text-center text-gray-800 text-3xl font-extrabold mt-12"
        />
      </motion.div>

      {isSubmitted ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800">
            Thank you for reaching out!
          </h2>
          <p className="text-gray-600 mt-4">
            I will get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
          <div className="bg-primaryColor rounded-lg p-6 h-full max-lg:order-1">
            <h2 className="text-xl text-white">Contact Information</h2>

            <ul className="mt-16 space-y-8">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a
                  href="mailto: aswinmalla12@gmail.com"
                  className="text-sm text-white ml-4"
                >
                  aswinmalla12@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  ></path>
                </svg>
                <a href="tel:7204181221" className="text-sm text-white ml-4">
                  720-418-1221
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.github.com/AMT98"
                title="Github"
                target="_blank"
                className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center"
                rel="noreferrer"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aswinmalla/"
                target="_blank"
                title="Linkedin"
                className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center"
                rel="noreferrer"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="mailto: aswinmalla12@gmail.com"
                type="email"
                title="Email"
                className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center"
              >
                <i className="ri-mail-line"></i>
              </a>
              <Link
                to="/resume"
                className="w-[50px] h-[50px] bg-gradient-to-r from-indigo-400 to-indigo-600 text-white text-[28px] font-[500] rounded-full flex items-center justify-center"
              >
                <i className="ri-article-line"></i>
              </Link>
            </div>
          </div>

          <div className="p-4 lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    required
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder="Email"
                    required
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    id="phone_number"
                    name="phone_number"
                    placeholder="Phone No."
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="px-2 py-3 mt-4 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                rows={5}
              ></textarea>

              <button
                type="submit"
                className="mt-6 px-6 py-3 bg-primaryColor text-white font-bold rounded-lg shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
