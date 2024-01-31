import React from "react";
import SubTitle from "./SubTitle";
import { FaUser } from "react-icons/fa";

const AboutMe = ({ elementRef }) => {
  return (
    <div
      ref={elementRef}
      className="bg-[url('./images/backgroundImg.jpg')] bg-center bg-cover text-center h-[800px] pt-[4.5rem] "
    >
      <div className="bg-[rgba(255,255,255,0.5)] rounded-lg h-[600px] mx-[8rem] my-[4rem]">
        <SubTitle title="ABOUT ME" />
        <div className="bg-yellow-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[2rem]">
          test
          <div className="bg-red-100">
            test
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
