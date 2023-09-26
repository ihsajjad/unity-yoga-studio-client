import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";

const ClassDetails = ({ classDetails }) => {
  console.log(classDetails);
  return (
    <section className="h-auto px-8 py-4 shadow-[0_0_17px_0_var(--main-color)] flex flex-col items-center gap-4 rounded-lg">
      <div className="w-full flex items-center gap-4 justify-center flex-col">
        <span className="text-3xl font-bold text-center">
          {classDetails.name}
        </span>
        <span className="text-3xl flex items-center gap-2">
          <BsFillStopwatchFill />
          {classDetails.time}
        </span>
      </div>
      <p className="text-[var(--primary-text)] max-w-[20rem]">
        {classDetails.description}
      </p>
      <img
        className="w-[14rem] rounded-full border-4 border-[var(--main-color)] p-2"
        src={classDetails.instructor?.imgUrl}
        alt="..."
      />
      <span className="text-2xl font-bold">
        {classDetails.instructor?.name}
      </span>
      <p className=" max-w-[20rem] text-[var(--primary-text)]">
        {classDetails.instructor?.bio}
      </p>
    </section>
  );
};

export default ClassDetails;
