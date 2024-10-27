import React from "react";
import profile2 from "../images/profile2.jpg"; // Path to your image in the src folder
import "./Intro1.css";

export default function Intro(props) {
  

  return (
    <div
      className={`${
        props.mode === "dark" ? "bg-gray-900" : "bg-[#fff7f7]"
      } w-100% flex flex-col items-center justify-center  backdrop-blur-md border-none bg-cover bg-center font-roboto`}
    >
      <div
        className={`rounded-full w-80 h-80 md:w-96 md:h-96 items-center justify-center shadow-md ${
          props.mode === "light" ? "shadow-[#F9EAB1]" : "shadow-blue-500"
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
          props.mode === "light" ? "bg-white" : "bg-gray-900"
        } transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 border-dashed shadow-md  ${props.mode === "dark" ? "shadow-gray-400" : "border-red-600" 
      } `}
      >
        <p
          className={`${
            props.mode === "light" ? "text-[#755139ff]" : "text-gray-400"
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

      
    </div>
  );
}
