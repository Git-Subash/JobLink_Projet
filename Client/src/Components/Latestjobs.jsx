import React from "react";
import jobImage from "../assets/bg.jpg";

const Latestjobs = () => {
  return (
    <aside className="bg-primary-content font-inter py-4 rounded-md lg:block hidden ">
      <h1 className="text-2xl pb-4 ml-4">Jobs </h1>
      <div className="flex flex-col gap-4 ">
        <a className="pb-4 pl-4 bg-primary-content w-full" href="#">
          <h2 className="pb-1">Job title</h2>
          <p className="text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </a>
        <a className="pb-4 pl-4 bg-primary-content w-full" href="#">
          <h2 className="pb-1">Job title</h2>
          <p className="text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </a>
      </div>
    </aside>
  );
};

export default Latestjobs;
