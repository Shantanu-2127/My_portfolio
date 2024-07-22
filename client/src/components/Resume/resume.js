import React from "react";
import "./resume.css";
import ReactTimeline from "../common/resume/reactTimeline";
import { educationData, experienceData, summaryData } from "../../data/timelineData";
import { FaGraduationCap, FaBriefcase, FaUser } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">CHECK MY PROFESSIONAL JOURNEY</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <TimelineSection
              icon={<FaUser className="text-yellow-500" size={24} />}
              title="Summary"
              data={summaryData}
            />
            <TimelineSection
              icon={<FaGraduationCap className="text-yellow-500" size={24} />}
              title="Education"
              data={educationData}
            />
          </div>
          <div>
            <TimelineSection
              icon={<FaBriefcase className="text-yellow-500" size={24} />}
              title="Experience"
              data={experienceData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = ({ icon, title, data }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center mb-6">
      <div className="bg-gray-200 rounded-full p-3 mr-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ReactTimeline timelineData={data} />
  </div>
);

export default Resume;