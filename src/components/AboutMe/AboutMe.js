import React from "react";
import SubTitle from "../SubTitle";
import ProfileWithIcon from "./ProfileWithIcon";

import { FaUser, FaCalendar, FaMapMarkerAlt, FaGithub, FaPencilAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const AboutMe = ({ elementRef }) => {
  return (
    <div
      ref={elementRef}
      className="bg-[url('./images/backgroundImg2.jpg')] bg-center bg-cover text-center py-[4rem] pt-[9rem]"
    >
      <div className="bg-[rgba(255,255,255,0.8)] rounded-lg lg:mx-[8rem] py-[2rem] lg:py-[4rem] px-[2rem] xl:px-[10rem]">
        <SubTitle title="ABOUT ME" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-[2rem]">
         <ProfileWithIcon icon={<FaUser />} subTitle='이름' content='김혜정' />
          <ProfileWithIcon icon={<FaCalendar />} subTitle='생년월일' content='1999.07.10' />
          <ProfileWithIcon icon={<FaMapMarkerAlt />} subTitle='주소지' content='부산광역시 영도구' />
          <ProfileWithIcon icon={<MdEmail />} subTitle='이메일' content='maejyomi@gmail.com' />
          <ProfileWithIcon icon={<FaGithub />} subTitle='GitHub' address='https://github.com/maejyomi' />
          <ProfileWithIcon icon={<FaPencilAlt />} subTitle='학력' content='동국대학교 정보통신공학과' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
