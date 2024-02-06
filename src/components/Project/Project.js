import React from "react";
import SubTitle from "../SubTitle";

const Project = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="bg-[#f1f2f6] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-5">
        <SubTitle title="PROJECT" />
        <div className="bg-[#755567] w-full p-[2rem] py-[4rem] flex flex-wrap justify-center gap-5">
          <div className="bg-white rounded-lg w-[350px] h-[400px] ">test</div>
          <div className="bg-white rounded-lg w-[350px] h-[400px] ">test</div>
          <div className="bg-white rounded-lg w-[350px] h-[400px] ">test</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
