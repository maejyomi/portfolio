import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectItem = ({PTitle, content, image, gUrl}) => {
  return (
    <div className="relative transition-all bg-white rounded-lg w-[350px] h-[400px] p-[2rem] hover:scale-105">
      <div className="bg-gray-300 w-full h-[150px]">
        <img src={image} className="w-full h-full object-fill"></img>
      </div>
      <div className="mt-[1rem] ">
        <h3 className="text-xl font-bold">{PTitle}</h3>
        <p className="mt-[0.5rem]">
          {content}
        </p>
      </div>
      <div className="absolute bottom-[2rem] cursor-pointer">
        <a href={gUrl} className="flex items-center gap-2">
          <FaGithub className="text-2xl" />
          <p className="text-blue-600 hover:underline">GitHub 보기</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
