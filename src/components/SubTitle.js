import React from "react";

const SubTitle = ({ title }) => {
  return (
    <div className="text-[2.25rem] lg:text-5xl font-bold font-archivo tracking-tighter underline decoration-orange-300">
      {title}
    </div>
  );
};

export default SubTitle;
