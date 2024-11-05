import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="py-24 md:px-8 px-4 lg:px-24 ">
        <div className="flex justify-center">
          <h1 className="border-b-2 border-primary font-jetBrains text-3xl font-bold text-center inline-block">
            Contact Me
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-10 py-14">
          <form
            action="https://formspree.io/f/mldebdwz"
            method="POST"
            className="md:col-span-7 col-span-12 py-6 px-7 bg-primary bg-opacity-25 rounded shadow md:mb-0 mb-10"
          >
            <div>
              <h1 className="text-3xl font-jetBrains font-semibold ">
                Let's Work Together
              </h1>
              <p className="font-Poppins  ">
                For project inquiries, collaboration opportunities, or hiring{" "}
                <br />
                requests, please contact me.
              </p>
            </div>
            <div className="flex gap-2 md:flex-row flex-col mt-2">
              <input
                type="text"
                id="name"
                name="First Name"
                placeholder="First Name"
                className="py-3 px-6 text-primary bg-white  rounded font-jetBrains font-bold"
              />

              <input
                type="text"
                id="name"
                name="Last Name"
                placeholder="Last Name"
                className="py-3 px-6 text-primary bg-white  rounded font-jetBrains font-bold"
              />
            </div>
            <div className="flex gap-2 md:flex-row flex-col mt-2">
              <input
                type="email"
                id="email"
                name="Email"
                placeholder="Email Address"
                className="py-3 px-6 text-primary bg-white  rounded font-jetBrains font-bold"
              />

              <input
                type="number"
                id="number"
                name="Number"
                placeholder="Phone Number"
                className="py-3 px-6 text-primary bg-white  rounded font-jetBrains font-bold"
              />
            </div>
            <div className="mt-2">
              <select
              name="option"
                className="py-3 px-6 text-primary bg-white rounded cursor-pointer font-jetBrains font-bold w-[94%]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option value="frontend">Frontend Developer</option>
                <option value="fullstack">Fullstack Web Developer</option>
                <option value="uiux">UI/UX Designer</option>
                <option value="graphics">Graphics Designer</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                className="text-primary bg-white py-10 px-6 w-[94%] rounded mt-2 font-jetBrains "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="font-jetBrains text-white py-3 px-6 w-[94%] bg-primary rounded shadow mt-2 hover:brightness-75 duration-300 ease-linear"
              >
                Submit Message
              </button>
            </div>
          </form>
          <div className="md:col-span-5 col-span-12  rounded shadow py-6 px-8  flex flex-col justify-center ">
            <div className="flex gap-10 mb-6 items-center">
              <div className="px-8 py-6 rounded bg-white  text-primary font-jetBrains text-5xl ">
                <FaPhone />
              </div>
              <div className="text-xl font-jetBrains text-black">
                <p className="text-black">Phone</p>
                <p>(+234) 8068078495</p>
              </div>
            </div>
            <div className="flex md:gap-10 gap-2  mb-6 items-center">
              <div className="px-8 py-6 rounded bg-white  text-primary font-jetBrains text-5xl ">
                <FaEnvelope />
              </div>
              <div className="text-xl font-jetBrains text-black">
                <p className="text-black">Email</p>
                <p>
                  judeorifa28@gmail <br />
                  .com
                </p>
              </div>
            </div>
            <div className="flex gap-10 mb-6 items-center">
              <div className="px-8 py-6 rounded bg-white  text-primary font-jetBrains text-5xl ">
                <FaMapLocation />
              </div>
              <div className="text-xl font-jetBrains text-black">
                <p className="text-black">Address</p>
                <p>Adalamo Ogun State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
