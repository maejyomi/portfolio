import React from "react";
import SubTitle from "../SubTitle";
import ProjectItem from "./ProjectItem";

const Project = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="bg-[#f1f2f6] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-5">
        <SubTitle title="PROJECT" />
        <div className="bg-[#755567] w-full p-[2rem] py-[4rem] mt-[1rem] flex flex-wrap justify-center gap-5">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};

export default Project;
