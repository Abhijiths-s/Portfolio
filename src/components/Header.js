import React, { useState } from "react";
import "./Header.css";

import { HashLink as Link } from "react-router-hash-link";

export default function Header(props) {
  // State to track if the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles between true and false
  };

  return (
    <>
      <header
        className={`${props.mode === "dark" ? "bg-gray-900" : "bg-[#CDF5FD]"} ${
          props.mode === "dark" ? "text-white" : "text-gray-900"
        } ${
          props.mode === "dark" ? "shadow-blue-500" : "shadow-[#F9EAB1]"
        }
        ${
          props.scroll>900 ? "bg-transparent" : ""
        } 
        ${
          props.scroll>900 ? "shadow-none" : ""
        }shadow-md sticky top-0 z-50 slide-in`}
      >
        <div className="flex justify-between items-center p-3  font-josefin-sans font-bold gap">
          <div
            className={`md:hidden w-8 h-8 rounded-md flex items-center justify-center hover:${
              props.mode === "light" ? "" : "bg-slate-800"
            }`}
          >
            <button onClick={toggleMenu}>
              <svg
                className={`w-6 h-6 ${
                  props.mode === "dark" ? "text-gray-300" : "text-gray-800"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <nav
            className={`hidden  md:flex space-x-10 font-sans  font-extrabold`}
          >
            <Link smooth
              to="#home"
              className="block px-3 py-2 text-2xl rounded LineEffect "
            >
              Home
            </Link>
            <Link smooth to="#about" className="block px-3 py-2 text-2xl rounded LineEffect">
              About
            </Link>
            <Link smooth
              to="#skills"
              className="block px-3 py-2 text-2xl rounded LineEffect "
            >
              Skills
            </Link>
            <Link smooth
              to="#contact"
              className="block px-3 py-2 text-2xl rounded  LineEffect"
            >
              Contact
            </Link>
          </nav>
          <div className="flex justify-between items-center w-64   md:w-64 ">
            <div>
              <a href="https://www.instagram.com/abh__ij__iths/"
              target="blank"
              rel="noopener noreferrer">
                <svg
                  class={`w-6 h-6 ${
                    props.mode === "dark" ? "text-gray-400" : "text-gray-500"
                  } ${
                    props.mode === "dark"
                      ? "hover:text-white"
                      : "hover:text-black"
                  } `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div>
              <a href="https://github.com/Abhijiths-s"
              target="blank"
              rel="noopener noreferrer"
              >
                <svg
                  class={`w-6 h-6 ${
                    props.mode === "dark" ? "text-gray-400" : "text-gray-500"
                  } ${
                    props.mode === "dark"
                      ? "hover:text-white"
                      : "hover:text-black"
                  } `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/in/abhijiths-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  class={`w-6 h-6 ${
                    props.mode === "dark" ? "text-gray-400" : "text-gray-500"
                  } ${
                    props.mode === "dark"
                      ? "hover:text-white"
                      : "hover:text-black"
                  } `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </div>
            <div
              className={`w-10 h-10 flex justify-center items-center hover:bg-gray-800 rounded-xl md:ml-18 active:border-2 active:border-gray-700 ${
                props.mode === "light" ? "bg-gray-800" : "bg-gray-700"
              }`}
            >
              <button onClick={props.toggle}>
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d={
                      props.mode === "dark"
                        ? "M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                        : "M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                    }
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden container  absolute left-0 top-16 z-50 h-88 w-100% text-center ${
              props.mode === "light" ? "bg-[#bfedf6]" : "bg-gray-900"
            } text-white shadow-md shadow-blue-500 font-josefin-sans font-bold`}
          >
            <div
              className={`rounded-xl ${
                props.mode === "light" ? "bg-[#CDF5FD]" : "bg-gray-900"
              } ${
                props.mode === "light" ? "text-gray-900" : "texy-gray-300"
              } m-6 p-4 border-2 z-50 border-gray-700 `}
            >
              <nav className="space-y-12 font-sans font-extrabold">
                <Link smooth
                  to="#home"
                  className={`block px-3 py-2 text-2xl rounded-md ${
                    props.mode === "light"
                      ? "hover:bg-[#F9EAB1]"
                      : "hover:bg-blue-800"
                  } `} onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link smooth
                  to="#about"
                  className={`block px-3 py-2 text-2xl rounded-md ${
                    props.mode === "light"
                      ? "hover:bg-[#F9EAB1]"
                      : "hover:bg-blue-800"
                  } `} onClick={toggleMenu}
                >
                  About
                </Link>
                <Link smooth
                  to="#skills"
                  className={`block px-3 py-2 text-2xl rounded-md ${
                    props.mode === "light"
                      ? "hover:bg-[#F9EAB1]"
                      : "hover:bg-blue-800"
                  } `} onClick={toggleMenu}
                >
                  Skills
                </Link>
                <Link smooth
                  to="#contact"
                  className={`block px-3 py-2 text-2xl rounded-md ${
                    props.mode === "light"
                      ? "hover:bg-[#F9EAB1]"
                      : "hover:bg-blue-800"
                  } `} onClick={toggleMenu}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
