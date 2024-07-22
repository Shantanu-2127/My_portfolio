import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../../data/testimonialsData";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(1);

  const visibleTestimonials = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= testimonialsData.length) {
          return 1;
        }
        return prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === testimonialsData.length) {
      setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          !transitioning && "transition-none"
        }`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
        }}
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="bg-[#FFFFFF1A] rounded-lg shadow-lg p-6 flex flex-col items-center relative">
              <div className="w-full mb-14 relative">
                <RiDoubleQuotesL
                  className="absolute top-0 left-0 text-2xl"
                  style={{ color: "#FFFFFF4D" }}
                />
                <p className="text-center text-xl font-normal text-gray-200 italic mx-8">
                  {testimonial.content}
                </p>
                <RiDoubleQuotesR
                  className="absolute bottom-0 right-0 text-2xl"
                  style={{ color: "#FFFFFF4D" }}
                />
              </div>
              <div className="absolute bottom-[-45px] left-[40px]">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-[90px] h-[90px] rounded-full border-2 border-[#FFFFFF14] object-cover"
                />
              </div>
              <div className="absolute bottom-[-100px] left-[40px] w-full">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">
                  {testimonial.occupation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[200px] left-0 right-0 flex justify-center space-x-2">
        {testimonialsData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex % testimonialsData.length
                ? "bg-[yellow]"
                : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
