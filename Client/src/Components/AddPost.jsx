import React from "react";
import defaultImg from "../assets/default.jpg";
import { CreatePost } from "./CreatePost";
import { ImagePlus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowing } from "../store/state";
import { Posts } from "./Posts";

const AddPost = () => {
  const user = useSelector((state) => state.user);
  const show = useSelector((state) => state.isShowing);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="bg-primary-content p-4 rounded-md ">
        <div className="flex flex-row gap-2">
          {user ? (
            <a href="#">
              <img
                className="rounded-full sm:rounded-xl  sm:w-[56px]   w-[74px] h-[50px]"
                src={`http://localhost:3000/` + user.profileImage}
              />
            </a>
          ) : (
            <a onClick={() => dispatch(setIsShowing(!show))}>
              <img
                className="rounded-full sm:rounded-xl cursor-pointer sm:w-[56px]   w-[74px] h-[50px]"
                src={defaultImg}
              />
            </a>
          )}
          <label className="input file-input-bordered bg-[#1b1b2e]  gap-10 rounded-full flex items-center w-[500px] ">
            <input
              type="text"
              className="grow w-auto  cursor-pointer   "
              placeholder="Start a Post"
              disabled={show}
              onClick={() => dispatch(setIsShowing(!show))}
              required
            />
            <div className="mr-2 text-">
              <ImagePlus />
            </div>
          </label>
        </div>
      </div>
      <CreatePost />
      <Posts />
    </section>
  );
};

export default AddPost;
