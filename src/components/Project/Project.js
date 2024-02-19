import React from "react";
import SubTitle from "../SubTitle";
import ProjectItem from "./ProjectItem";

import Project1 from "../../images/프로젝트1.png";
import Project2 from "../../images/프로젝트2.png";
import Project3 from "../../images/프로젝트3.png";

const Project = ({ elementRef }) => {
  return (
    <div ref={elementRef} className="bg-[#f1f2f6] py-[4rem]">
      <div className="flex flex-col justify-center items-center gap-5">
        <SubTitle title="PROJECT" />
        <div className="bg-[#755567] w-full p-[2rem] py-[4rem] mt-[1rem] flex flex-wrap justify-center gap-5">
          <ProjectItem 
            PTitle='차량객체 추출 기반 번호인식' 
            content='기존 서비스의 빈번한 인식 오류 이슈를 해결하기 위해 차량 객체 인식 및 번호판 추출 AI 모델을 설계하여 높은 정확도로 차량을 인식하고자 한 프로젝트' 
            image={Project1} 
            gUrl='https://github.com/maejyomi/license-plate-recognition'/>
          <ProjectItem 
            PTitle='폐기물 수수료 검색 및 게시판'
            content='부산광역시 대형 폐기물 수수료 검색 및 무료 나눔을 할 수 있는 게시판 서비스 프로젝트' 
            image={Project2} 
            gUrl='https://github.com/maejyomi/WasteNow-front'/>
          <ProjectItem 
            PTitle='AR을 활용한 문화재 소개'
            content='2021년 동국대학교 졸업 프로젝트로 진행한 것으로, AR을 활용한 문화재 소개 어플리케이션 구현' 
            image={Project3} 
            gUrl='https://github.com/maejyomi/Capstone-Design'/>
        </div>
      </div>
    </div>
  );
};

export default Project;
