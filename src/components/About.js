import React from "react";
import { useEffect, useRef, useState } from "react";

export default function About(props) {
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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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
      className={`${
        props.mode === "dark" ? "bg-gray-900" : "bg-[#CDF5FD]"
      } w-100% flex flex-col items-center justify-center  font-roboto outline-none`}
    >
      <h1
        className={`font-sans font-extrabold tracking-tight ${
          props.mode === "dark" ? "text-white" : "text-[#755139ff]"
        } text-6xl mt-8 text-center border-none`}
      >
        About
      </h1>
      <div className="grid md:grid-cols-2 justify-center md:m-16 m-8  font-roboto">
        {/* Section 1 */}
        <div
          className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
            props.mode === "light" ? "bg-[#755139ff]" : "bg-gray-800"
          } ${
            props.mode === "light"
              ? "before:bg-gradient-to-tr from-orange-600 to-yellow-400"
              : "before:bg-gradient-to-tr from-blue-500 to-black"
          }`}
        >
          <h2 className="text-white font-bold md:text-3xl mb-3 text-2xl mt-12 text-center font-sans ">
            My Journey
          </h2>
          <p
            ref={ref1}
            className={`text-gray-300 leading-relaxed mb-0 md:text-2xl text-lg p-10 text-center   hover:text-gray-100 ${
              visibleSections.section1 ? "anime2" : ""
            } font-sans m-auto`}
          >
            I started my journey in web development with a curiosity about how
            websites work. Over time, I developed a passion for creating
            responsive, user-friendly designs, and I continue to learn and
            improve with each project.
          </p>
        </div>

        {/* Section 2 */}
        <div
        className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
          props.mode === "light" ? "bg-[#755139ff]" : "bg-gray-800"
        } ${
          props.mode === "light"
            ? "before:bg-gradient-to-tr from-orange-600 to-yellow-400"
            : "before:bg-gradient-to-tr from-blue-500 to-black"
        }`}
      >
        <h2 className="text-white font-bold md:text-3xl text-2xl mt-12 text-center font-sans">
          Web Development Skills
        </h2>
        <p
          ref={ref2}
          className={`text-gray-300 leading-relaxed  text-lg md:text-2xl p-10 text-center hover:text-gray-100 ${
            visibleSections.section2 ? "anime2" : ""
          }`}
        >
          I have strong skills in HTML, CSS, and JavaScript, creating clean and
          responsive layouts. I enjoy using React to build dynamic and
          interactive web applications.
        </p>
      </div>

      
      <div
        className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
          props.mode === "light" ? "bg-[#755139ff]" : "bg-gray-800"
        } ${
          props.mode === "light"
            ? "before:bg-gradient-to-tr from-orange-600 to-yellow-400"
            : "before:bg-gradient-to-tr from-blue-500 to-black"
        }`}
      >
        <h2 className="text-white font-bold md:text-3xl text-2xl mt-12 text-center font-sans">
          Frameworks & Tools
        </h2>
        <p
          ref={ref3}
          className={`text-gray-300 leading-relaxed  text-lg md:text-2xl p-10 text-center hover:text-gray-100 ${
            visibleSections.section3 ? "anime2" : ""
          }`}
        >
          I use frameworks like Tailwind CSS for fast, responsive design. With
          Figma, I create visually appealing designs and prototypes before
          development.
        </p>
      </div>

      
      <div
        className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
          props.mode === "light" ? "bg-[#755139ff]" : "bg-gray-800"
        } ${
          props.mode === "light"
            ? "before:bg-gradient-to-tr from-orange-600 to-yellow-400"
            : "before:bg-gradient-to-tr from-blue-500 to-black"
        }`}
      >
        <h2 className="text-white font-bold md:text-3xl text-2xl mt-12 text-center font-sans">
          What I Bring
        </h2>
        <p
          ref={ref4}
          className={`text-gray-300 leading-relaxed   text-lg md:text-2xl p-10 text-center hover:text-gray-100 ${
            visibleSections.section4 ? "anime2" : ""
          }`}
        >
          My strength lies in combining design and development. I create
          engaging, user-friendly websites using React, Tailwind, and Figma,
          while staying updated with the latest trends.
        </p>
      </div>
      </div>
    </div>
  );
}
