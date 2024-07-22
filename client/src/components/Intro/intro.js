import React from "react";
import "./intro.css";
import Typical from "react-typical";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="introText">
          <span className="introName">Shantanu Singh Sisodia</span> <br />
          <div className="profile-details-role">
            <span className="passionate-text">I'm passionate</span>
            <span className="primary-text">
              <Typical
                steps={[
                  "Web Developer",
                  3000,
                  "Programmer 🔴",
                  3000,
                  "Software Developer",
                  3000,
                  "Enthusiastic Dev 🔴",
                  3000,
                  "Full Stack Developer 💻",
                  3000,
                  "MERN Stack Dev",
                  3000,
                  "Cross Platform Dev 🌎",
                  3000,
                  "React/React Native Dev 📱",
                  3000,
                ]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </div>
        </div>
        <p className="introPara">
          I am a skilled web Developer with experience in creating <br />{" "}
          visually appealing and user friendly websites and android
          Applications.
        </p>
        <div className="btnSpace">
          <a
            href="https://drive.google.com/file/d/1vuAMdLRTsoD0MBcwMgELNIa0yCM6pYRR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
