import React from "react";
import passport from "../../assets/image.png";
import "./about.css";
import TableList from "../common/about/tableList";
import CountBox from "../common/about/countBox";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import SkillSlider from "../common/about/skillSlider";
import Interest from "../common/about/interestBox";
import database from "../../assets/database.png";
import github1 from "../../assets/github1.png";
import laptop from "../../assets/laptop.png";
import fix from "../../assets/fix.png";
import photo from "../../assets/photo.png";
import gaming from "../../assets/gaming.png";
import badminton from "../../assets/badminton.png";
import Testimonials from "../common/about/testimonials";

const About = () => {
  return (
    <section id="about" className="bg-gray-400 py-16">
      <div className="aboutContent max-w-6xl mx-auto px-4">
        <SectionHeader title="ABOUT" subtitle="LEARN MORE ABOUT ME" />

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/3">
            <img
              src={passport}
              alt="Profile"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">
              Web Developer | Software Developer
            </h2>
            <p className="text-lg italic mb-6">
              Hello everyone, I'm an engineering student. Goal-driven creative
              mindset with a passion for learning and innovating. I'm on a track
              for learning more about Android Development, Web Development and IOS Development.
            </p>

            <div className="flex flex-wrap justify-between mb-6">
              <div className="w-full md:w-1/2">
                <TableList title="Birthday" value="1st July 2001" />
                <TableList title="Website" value={<a href='https://www.linkedin.com/in/shantanu-sisodia/' target="_blank" className="text-yellow-400 underline">Click here</a>} />
                <TableList title="Phone" value="+91-7742290214" />
                <TableList title="City" value="Gurugram, India" />
              </div>
              <div className="w-full md:w-1/2">
                <TableList title="Age" value="23" />
                <TableList title="Degree" value="B.Tech ECE" />
                <TableList title="Email" value="shantanusisodia777@gmail.com" />
                <TableList title="Freelance" value="Available" />
              </div>
            </div>

            <p className="text-base">
              What would you do if you knew your dreams will come true? If there
              was no risk of failure? Free up your mind and think about all the
              infinite possibilities life gives us. Don't limit yourself while
              you are dreaming. When I started writing down my dreams, I thought
              my dreams were too big. I thought they were impossible. But you
              know what? Nothing is impossible. Don't constrain yourself by what
              you think or what other people think.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CountBox count="1" title="Years Experience" Icon={FaRegStar} />
            <CountBox count="2" title="Happy Clients" Icon={HiOutlineEmojiHappy} />
            <CountBox count="4" title="Projects" Icon={GrProjects} />
            <CountBox count="500" title="Hours of Support" Icon={BiSupport} />
            <CountBox count="5" title="Achievements" Icon={GiAchievement} />
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader title="SKILLS" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillSlider skill="C++" percentage="95" />
            <SkillSlider skill="JavaScript" percentage="90" />
            <SkillSlider skill="HTML" percentage="90" />
            <SkillSlider skill="CSS" percentage="80" />
            <SkillSlider skill="Java" percentage="50" />
            <SkillSlider skill="SQL" percentage="60" />
          </div>
        </div>

        <div className="mb-16">
          <SectionHeader title="INTERESTS" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Interest imageUrl={database} imageName="Firebase/MongoDB" />
            <Interest imageUrl={github1} imageName="Git/GitHub" />
            <Interest imageUrl={laptop} imageName="Software Engineer" />
            <Interest imageUrl={fix} imageName="Open Source" />
            <Interest imageUrl={photo} imageName="Photography" />
            <Interest imageUrl={badminton} imageName="Badminton" />
            <Interest imageUrl={gaming} imageName="PC gaming" />
          </div>
        </div>

        <div>
          <SectionHeader title="TESTIMONIALS" />
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    <div className="w-24 h-1 bg-yellow-500 mt-2"></div>
  </div>
);

export default About;