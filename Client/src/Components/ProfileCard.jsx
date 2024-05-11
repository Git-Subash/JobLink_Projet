import React from "react";
import { useSelector } from "react-redux";
import bgImage from "../assets/bg.jpg";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      {user && (
        <>
          <section
            className={
              user
                ? "bg-primary-content font-inter tracking-wide  flex flex-col items-center rounded-md p-4 md:w-[300px] gap-2  lg:h-[350px]"
                : "hidden"
            }>
            <img
              src={`http://localhost:3000/` + user.profileImage}
              className="avatar w-[80px] h-[80px] rounded-full "
            />
            <div className="text-center flex flex-col gap-[2px] ">
              <h1>{user.firstName}</h1>
              <p className="text-xs text-slate-500 text-center ml-1 ">
                {" "}
                Qulafication : {user.education}
              </p>
              <div className="flex justify-center text-sm  my-2  gap-4">
                <h3>Connection 0</h3>
                <h3>Posts 0</h3>
              </div>
              <p className="text-xs w-[400px] md:w-auto text-slate-500 text-ellipsis">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, quas! Voluptatibus, excepturi.
              </p>
              <Link to="/" className="btn  btn-outline btn-ghost mt-4 ">
                View Profile
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};
