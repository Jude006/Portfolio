import React, { useRef, useState } from "react";
import data from "../data/Data1.json";
import {
  FaArrowCircleRight,
  FaCheck,
  FaCode,
  FaPaintBrush,
  FaPalette,
  FaTimes,
} from "react-icons/fa";

const iconMap = {
  FaCode: FaCode,
  FaPaintBrush: FaPaintBrush,
  FaPalette: FaPalette,
};

const Service = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = (val) => {
    setPopup(val);
  };
  const closePopups = () => {
    setPopup(null);
  };
  const popupRef = useRef();
  const closePopup = (e) => {
    if (popupRef.current === e.target) {
      setPopup(false);
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col justify-center gap-4 md:py-20 py-14">
          <h1 className="md:text-4xl text-2xl font-bold text-center font-jetBrains border-b-2 border-primary inline-block mx-auto">
            Services
          </h1>
          <p className="text-center font-Poppins">What I Offer</p>
        </div>

        <div className="md:px-10 px-4 lg:px-20 lg:max-w-[70%] font-Poppins mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 pb-10">
          {data.map((service, index) => {
            const IconComponent = iconMap[service.icon]; // Get the icon component dynamically
            return (
              <div
                key={index}
                className="bg-secondary shadow-lg px-6 py-8 flex flex-col items-start justify-start gap-8 pt-20 pb-10 "
              >
                <div>
            
                  <p className="text-primary">
                    {IconComponent && <IconComponent size={50} />}
                  </p>
                </div>
                <h2 className="text-lg font-bold text-start ">
                  {service.title}
                </h2>
                <button
                  className="text-primary text-start flex items-center gap-3"
                  onClick={() => openPopup(service)}
                >
                  Read More{" "}
                  <FaArrowCircleRight className="hover:translate-x-2 duration-300 ease-linear" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {popup && (
        <div
          ref={popupRef}
          onClick={closePopup}
          className="bg-black duration-300 ease-linear flex justify-center items-center transform bg-opacity-20 w-full h-screen inset-0 fixed backdrop-blur-sm z-20 top-0 cursor-pointer"
        >
          <div className="w-[50%] mx-auto  flex flex-col gap-2">
            <h1
              onClick={closePopups}
              className="place-self-end text-xl text-primary"
            >
              <FaTimes />
            </h1>
            <div className="bg-secondary px-6 py-6 text-black shadow w-[100%] mx-auto h-[100%] rounded font-Poppins">
              <div>
                <h1 className="font-bold text-lg"> {popup.title}</h1>
              </div>
              <div>
                <p className="flex items-center gap-3  "><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.shortDescription}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[0]}</p>
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[1]}</p>
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[2]}</p>
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[3]}</p>
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[4]}</p>
                <p className="flex items-center gap-3"><span className="p-1 rounded-full border border-primary text-primary font-jetBrains"><FaCheck /></span>{popup.features[5]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
