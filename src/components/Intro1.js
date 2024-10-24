import React from "react";
import profile from "../images/profile.jpg";
import profile3 from "../images/profile3.jpg"
import "./Intro1.css";

export default function Intro1(props) {
  return (
    <>
      <div className="relative h-screen w-full bg-transparent">
        <div
          className="h-full w-full  sticky top-20 -z-40 md:hidden bg-transparent "
          style={{
            backgroundImage: `url(${profile})`,
            backgroundPosition: "center", // Centers the image vertically and horizontally
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            
          }}
        ></div>
        <div
          className="h-full w-50%  sticky top- -z-40 hidden md:block bg-transparent"
          style={{
            backgroundImage: `url(${profile3})`,
            backgroundPosition: "center", // Centers the image vertically and horizontally
            backgroundSize: "cover", // Ensures the image covers the entire area
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 ">
          <h1 className="text-gray-300 font-mode sm:text-4xl text-2xl my-2 mx-6 md:text-6xl text-left">
            Hello,I am
          </h1>
          <h1 className="text-gray-300  text-4xl font-mode sm:text-6xl m-6 md:text-8xl text-left">
            ABHIJITH S
          </h1>
          <h1 className="text-gray-300 text-lg sm:text-2xl my-2 mx-6 md:text-3xl text-left ">
            -- Front end Developer | Designer --
          </h1>
          <button
            className={`w-36 h-12 ${
              props.mode === "light" ? "bg-[#CDF5FD]" : "bg-blue-500"
            } font-josefin-sans ${
              props.mode === "light" ? "text-[#755139ff]" : "text-white"
            } text-lg z-10  rounded-3xl transition hover:-translate-y-1 hover:scale-105 hover:shadow-sm flex  flex-col justify-center items-center hover:shadow-black font-bold  px-8 ml-5 mt-12`}
          >
            <a
              className="flex justify-between items-center gap-1"
              href="/RenderCV_sb2nov_Theme (4).pdf"
              target="blank"
              rel="noopener noreferer"
            >
              <svg
                class={`w-6 h-6 mb-1 ${
              props.mode === "light" ? "text-[#755139ff]" : "text-white"
            }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z"
                  clip-rule="evenodd"
                />
              </svg>
              Resume
            </a>
          </button>
        </div>
       
      </div>
    </>
  );
}
