import React from "react";

const ProfileWithIcon = ({subTitle, content, icon, address}) => {
  return (
    <div className="flex justify-start items-center gap-8 h-[100px] min-w-[288px]">
      <div className="text-3xl ">
        {icon}
      </div>
      <div className="text-left">
        <h3 className="text-2xl font-bold">{subTitle}</h3>
        <p className="text-lg">{content}</p>
        <a href={address} className="text-blue-500 hover:underline">{address}</a>
      </div>
    </div>
  );
};

export default ProfileWithIcon;
