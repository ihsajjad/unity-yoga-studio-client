import React from "react";
import { Link } from "react-router-dom";

const BasicYogaAsans = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-5 section-container">
      <div className="md:w-1/5">
        <h1 className="font-bold text-5xl text-[var(--main-color)]">Basic</h1>
        <p className="font-semibold text-4xl mt-2">Yoga Asansa</p>
        <p className="mt-2 font-semibold">Fight Stress & Find Serenity</p>
        <button className="mt-4 custom-btn-secondary">Know More</button>
      </div>
      <div className="md:w-4/5 flex sm:flex-row flex-col gap-4">
        <figure className="flex-1">
          <img
            className="w-full rounded"
            style={{ height: "300px" }}
            src="https://i.ibb.co/kGmhRZV/alex-shaw-m-SJsi-QCm6og-unsplash.jpg"
            alt="instructor"
          />
        </figure>
        <figure className="flex-1">
          <img
            className="w-full rounded"
            style={{ height: "300px" }}
            src="https://i.ibb.co/87zFQCJ/alex-shaw-R0i-Jsvej-L2k-unsplash.jpg"
            alt="instructor"
          />
        </figure>
        <figure className="flex-1">
          <img
            className="w-full rounded"
            style={{ height: "300px" }}
            src="https://i.ibb.co/r2dVh8R/alex-shaw-d-h-GHSLAWxc-unsplash.jpg"
            alt="instructor"
          />
        </figure>
      </div>
    </div>
  );
};

export default BasicYogaAsans;
