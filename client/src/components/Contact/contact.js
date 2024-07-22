import React, { useRef, useState } from "react";
import "./contact.css";
import Freelance from "../../assets/freelance.jpg";
import LinkedInIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import GitHubIcon from "../../assets/github.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_6bh6fni",
        "template_u24lcld",
        form.current,
        "f4iJB-IFJYb4nlDIq"
      )
      .then(
        (result) => {
          console.log(result.text);
          message.success("Message sent successfully");
          setIsLoading(false);
        },
        (error) => {
          console.error(error);
          message.error("Failed to send message: " + error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contactPage" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">My Services</h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            As a software developer, I provide innovative solutions by designing
            and coding software applications tailored to meet specific business
            needs. With expertise in various technologies, I deliver high-quality
            software that enhances efficiency and user experiences.
          </p>
          <div className="flex justify-center mb-16">
            <img src={Freelance} alt="Freelance" className="w-70 h-70 object-cover rounded-full shadow-lg" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-500">Contact Me</h2>
          <p className="text-center text-gray-600 mb-8">
            Please fill out the form below to discuss any work opportunities
          </p>
          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Your Name"
                name="your_name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                placeholder="Your Email"
                name="your_email"
                required
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          <div className="flex justify-center space-x-4 mt-8">
            <SocialLink href="https://www.linkedin.com/in/shantanu-sisodia/" src={LinkedInIcon} alt="LinkedIn" />
            <SocialLink href="https://x.com/s_cube_" src={TwitterIcon} alt="Twitter" />
            <SocialLink href="https://github.com/Shantanu-2127" src={GitHubIcon} alt="GitHub" />
            <SocialLink href="https://www.instagram.com/s_cube_21/" src={InstagramIcon} alt="Instagram" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="transition duration-300 transform hover:scale-110">
    <img src={src} alt={alt} className="w-8 h-8" />
  </a>
);

export default Contact;