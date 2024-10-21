import React, { useState, useEffect, useRef } from "react";
import "./Intro1.css";

export default function Skills(props) {
  const [visibleSections, setVisibleSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: ref1, key: "section1" },
      { ref: ref2, key: "section2" },
      { ref: ref3, key: "section3" },
      { ref: ref4, key: "section4" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionKey = entry.target.dataset.key;
            setVisibleSections((prev) => ({
              ...prev,
              [sectionKey]: true,
            }));
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 10% of the element is visible
    );

    sections.forEach(({ ref, key }) => {
      if (ref.current) {
        ref.current.dataset.key = key;
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div
      className={`h-screen w-full  flex items-center justify-center ${
        props.mode === "dark" ? "bg-gray-900" : "bg-gray-200"
      } flex-col py-8 font-sans border-none`}
    >
      <h1 className={`font-sans font-extrabold tracking-tight ${props.mode ==="dark"?"text-white":"text-[#ff9800]"} text-6xl mb-10 text-center`}>
        Skills
      </h1>
      <div
        className={`h-screen w-3/4 rounded-xl ${
          props.mode === "dark" ? "bg-gray-900" : "bg-gray-100"
        } relative p-8 md:p-16 m-0  ${props.mode === "dark" ? "" : ""
      } ${props.mode === "dark" ? "shadow-gray-500" : "shadow-gray-300"
      } shadow-md flex flex-col justify-center` }
      >
        {/* HTML Skill */}
        <div
          className={`my-5 ${
            props.mode === "dark" ? "text-yellow-400" : "text-[#D1A900]"
          }  text-lg md:text-2xl font-semibold `}
        >
          HTML
          <div
            className={` bg-gray-500  w-full h-2 md:h-5 rounded-xl mt-5 relative`}
          >
            <div
              ref={ref1}
              className={`absolute ${
                props.mode === "dark" ? "bg-yellow-400" : "bg-[#FFD700]"
              } w md:h-5 h-2 rounded-xl ${
                visibleSections.section1 ? "progress-bar" : ""
              }`}
              style={{ width: "80%" }}
            >
              <span
                className={`absolute md:-right-5 md:-top-3 -top-4 -right-6 text-white rounded-full bg-gray-900 md:h-8 md:w-8 h-5 w-5 flex items-center justify-center md:p-5 p-4 md:text-sm text-xs  border-2 ${
                  props.mode === "dark"
                    ? "border-yellow-400"
                    : "border-[#FFD700]"
                }`}
              >
                80%
              </span>
            </div>
          </div>
        </div>
        {/* CSS Skill */}
        <div
          className={`my-5 ${
            props.mode === "dark" ? "text-blue-400" : "text-[#1C73C4]"
          } text-lg md:text-2xl font-semibold`}
        >
          CSS
          <div className="bg-gray-500 w-full h-2 md:h-5 rounded-xl mt-5 relative">
            <div
              ref={ref2}
              className={`absolute ${
                props.mode === "dark" ? "bg-blue-400" : "bg-[#5DADE2]"
              } w h-2 md:h-5 rounded-xl ${
                visibleSections.section1 ? "progress-bar2" : ""
              }`}
              style={{ width: "70%" }}
            >
              <span
                className={`absolute md:-right-5 md:-top-3 -top-4 -right-6 text-white rounded-full bg-gray-900 md:h-8 md:w-8 h-5 w-5 flex items-center justify-center md:p-5 p-4 md:text-sm text-xs border-2 ${
                  props.mode === "dark" ? "border-blue-400" : "border-[#1C73C4]"
                }`}
              >
                70%
              </span>
            </div>
          </div>
        </div>
        <div
          className={`my-5 ${
            props.mode === "dark" ? "text-green-400" : "text-[#22793E]"
          } text-lg md:text-2xl font-semibold`}
        >
          JAVA SCRIPT
          <div className="bg-gray-500 w-full h-2 md:h-5 rounded-xl mt-5 relative">
            <div
              ref={ref3}
              className={`absolute ${
                props.mode === "dark" ? "bg-green-400" : "bg-[#58D68D]"
              } h-2 md:h-5 rounded-xl ${
                visibleSections.section1 ? "progress-bar3" : ""
              }`}
              style={{ width: "40%" }}
            >
              <span
                className={`absolute md:-right-5 md:-top-3 -top-4 -right-6 text-white rounded-full bg-gray-900 md:h-8 md:w-8 h-5 w-5 flex items-center justify-center md:p-5 p-4 md:text-sm text-xs  border-2 ${
                  props.mode === "dark"
                    ? "border-green-400"
                    : "border-[#22793E]"
                }`}
              >
                40%
              </span>
            </div>
          </div>
        </div>
        <div
          className={`my-5 ${
            props.mode === "dark" ? "text-purple-400" : "text-[#7D4EA5]"
          } text-lg md:text-2xl font-semibold`}
        >
          REACT
          <div className="bg-gray-500 w-full h-2 md:h-5 rounded-xl mt-5 relative">
            <div
              ref={ref4}
              className={`absolute ${
                props.mode === "dark" ? "bg-purple-400" : "bg-[#AF7AC5]"
              } h-2 md:h-5 rounded-xl ${
                visibleSections.section1 ? "progress-bar4" : ""
              }`}
              style={{ width: "25%" }}
            >
              <span
                className={`absolute md:-right-5 md:-top-3 -top-4 -right-6 text-white rounded-full bg-gray-900 md:h-8 md:w-8 h-5 w-5 flex items-center justify-center md:p-5 p-4 md:text-sm text-xs border-2 ${
                  props.mode === "dark"
                    ? "border-purple-400"
                    : "border-[#7D4EA5]"
                }`}
              >
                25%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
