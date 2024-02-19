import React from "react";
import SubTitle from "../SubTitle";
import FrontImg from "../../images/Front.png";
import BackImg from "../../images/Back.png";
import ETCImg from "../../images/ETC.png";

const Skills = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="bg-[#f1f2f6] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-5">
        <SubTitle title="SKILLS" />
        <div className="bg-[#FFEECB] w-full p-[2rem] py-[4rem] mt-[1rem] flex flex-wrap justify-center gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-center text-xl font-bold mb-3">Frontend</h3>
              <img src={FrontImg} className="drop-shadow-lg"></img>
            </div>
            <div>
              <h3 className="text-center text-xl font-bold mb-3">Backend</h3>
              <img src={BackImg} className="drop-shadow-lg"></img>
            </div>
            <div>
              <h3 className="text-center text-xl font-bold mb-3">그 외</h3>
              <img src={ETCImg} className="drop-shadow-lg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
