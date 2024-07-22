import React, { useState } from "react";
import { FaGithub, FaGlobe, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Timeline = ({ heading, timelineData }) => {
  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{heading}</h2>
      <div className="space-y-8">
        {timelineData.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

const TimelineEvent = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
          <p className="text-md text-blue-600">{event.subtitle}</p>
          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 hover:text-blue-700 focus:outline-none transition duration-300 ease-in-out"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4">
          <ul className="list-disc list-inside space-y-2">
            {event.content && event.content.map((point, idx) => (
              <li key={idx} className="text-gray-700">{point}</li>
            ))}
          </ul>
          
          <div className="mt-4 flex flex-wrap gap-4">
            {event.website && (
              <a
                href={event.website}
                className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe className="mr-2" />
                Website
              </a>
            )}
            {event.github && (
              <a
                href={event.github}
                className="flex items-center text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;