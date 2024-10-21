import React, { useEffect, useRef, useState } from "react";
import profile2 from "../images/profile2.jpg"; // Path to your image in the src folder
import "./Intro1.css";

export default function Intro(props) {
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
        props.mode === "dark" ? "bg-gray-900" : "bg-gray-200"
      } w-100% flex flex-col items-center justify-center  backdrop-blur-md border-none bg-cover bg-center font-roboto`}
    >
      <div
        className={`rounded-full w-80 h-80 md:w-96 md:h-96 items-center justify-center shadow-md ${
          props.mode === "light" ? "shadow-orange-600" : "shadow-blue-500"
        } bg-center bg-cover transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 my-16`}
        style={{ backgroundImage: `url(${profile2})` }}
      ></div>
      <h1
        className={`${
          props.mode === "dark" ? "text-gray-300" : "text-gray-800"
        } font-bold text-6xl mb-12 font-sans tracking-tight `}
      >
        Abhijith S
      </h1>
      <div
        className={`md:mx-12 md:my-4 mx-8 rounded-3xl ${
          props.mode === "light" ? "bg-gray-100" : "bg-gray-900"
        } transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 border-dashed shadow-md  ${props.mode === "dark" ? "shadow-gray-400" : "border-red-600" 
      } `}
      >
        <p
          className={`${
            props.mode === "light" ? "text-[#ff9800]" : "text-gray-400"
          } leading-relaxed mb-4 text-xl md:text-2xl p-10 text-center font-sans font-bold`}
        >
          Hi, I’m Abhijith S. I'm a front-end developer passionate about
          building responsive and user-friendly web applications. With expertise
          in
          <span className="font-extrabold"> HTML, CSS, JavaScript, </span> and
          programming languages like{" "}
          <span className="font-extrabold">Python and Java</span>, I focus on
          creating intuitive designs that enhance user engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 justify-center md:m-16 m-8  font-roboto">
        {/* Section 1 */}
        <div
          className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
            props.mode === "light" ? "bg-[#ff9800]" : "bg-gray-800"
          } ${
            props.mode === "light"
              ? "before:bg-gradient-to-tr  from-orange-600 to-yellow-400"
              : "before:bg-gradient-to-tr from-blue-500 to-black"
          }`}
        >
          <h2 className="text-white font-bold md:text-3xl text-2xl mt-12 text-center font-sans">
            My Journey
          </h2>
          <p
            ref={ref1}
            className={`text-gray-300 leading-relaxed mb-2 md:text-2xl p-10 text-center text-lg hover:text-gray-100 ${
              visibleSections.section1 ? "anime2" : ""
            } font-sans`}
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
            props.mode === "light" ? "bg-[#ff9800]" : "bg-gray-800"
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
            I have strong skills in HTML, CSS, and JavaScript, creating clean
            and responsive layouts. I enjoy using React to build dynamic and
            interactive web applications.
          </p>
        </div>

        {/* Section 3 */}
        <div
          className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
            props.mode === "light" ? "bg-[#ff9800]" : "bg-gray-800"
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

        {/* Section 4 */}
        <div
          className={`relative my-8 md:m-8  before:absolute before:-inset-1 before:rounded-3xl  before:-z-10 before:m+[2px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 rounded-3xl ${
            props.mode === "light" ? "bg-[#ff9800]" : "bg-gray-800"
          } ${
            props.mode === "light"
              ? "before:bg-gradient-to-tr from-orange-600 to-yellow-400"
              : "before:bg-gradient-to-tr from-blue-500 to-black"
          }`}
        >
          <h2
            className="text-white font-bold md:text-3xl text-2xl mt-12 text-center font-sans"
          >
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
