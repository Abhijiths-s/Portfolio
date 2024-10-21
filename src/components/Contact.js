import React, { useState } from "react";

export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for response message from the server
  const [responseMessage, setResponseMessage] = useState("");

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponseMessage("An error occurred while submitting the form.");
      });
  };

  return (
    <div
      className={`${
        props.mode === "dark" ? "bg-gray-900" : "bg-gray-200"
      } flex justify-center items-center border-none mt-10`}
    >
      <div
        className={`lg:py-16  m-10 p-14 w-9/10 md:w-3/5 h-screen  ${
          props.mode === "dark" ? "" : ""
        } ${props.mode === "dark" ? "bg-gray-900" : "bg-gray-100"} rounded-lg  ${props.mode === "dark" ? " shadow-gray-500" : "shadow-gray-300"
      } shadow-md border-none`}
      >
        <h2
          className={`mb-5 text-4xl tracking-tight font-extrabold text-center ${
            props.mode === "dark" ? "text-white" : "text-[#ff9800]"
          }`}
        >
          Contact Me
        </h2>
        <p
          className={`mb-8 lg:mb-16 font-light text-center ${
            props.mode === "light" ? "text-gray-900" : "text-gray-300"
          } sm:text-xl`}
        >
          Got a project in mind or just want to say hello? I'm always excited to
          hear from fellow developers and collaborators. Whether it's a question
          about my work, a potential partnership, or simply feedback, feel free
          to reach out.
        </p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                props.mode === "light" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 ${
                props.mode === "dark" ? "bg-gray-700 " : "bg-white"
              } dark:border-gray-600 dark:placeholder-gray-400 ${
                props.mode === "light" ? "text-gray-800" : "text-gray-400"
              }  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="Yourname@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className={`block mb-2 text-sm font-medium ${
                props.mode === "light" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 ${
                props.mode === "dark" ? "bg-gray-700 " : "bg-white"
              } dark:border-gray-600 dark:placeholder-gray-400 ${
                props.mode === "light" ? "text-gray-800" : "text-gray-400"
              }  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="Enter Your Name..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className={`block mb-2 text-sm font-medium ${
                props.mode === "light" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 ${
                props.mode === "dark" ? "bg-gray-700 " : "bg-white"
              } dark:border-gray-600 dark:placeholder-gray-400 ${
                props.mode === "light" ? "text-gray-800" : "text-gray-400"
              }  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={`block mb-2 text-sm font-medium ${
                props.mode === "light" ? "text-gray-800" : "text-gray-400"
              }`}
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${
                props.mode === "dark" ? "bg-gray-700 " : "bg-white"
              } dark:border-gray-600 dark:placeholder-gray-400 ${
                props.mode === "light" ? "text-gray-800" : "text-gray-400"
              } dark:focus:ring-primary-500 dark:focus:border-primary-500`}
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg ${
              props.mode === "dark" ? "bg-blue-500" : "bg-[#ff9800]"
            } sm:w-fit h-10 ${
              props.mode === "dark" ? "hover:bg-blue-800" : "hover:bg-[#de8603]"
            } focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
          >
            Send message
          </button>
        </form>

        {responseMessage && <p className="text-green-500">{responseMessage}</p>}
      </div>
    </div>
  );
}
