import React from "react";
import Alerts from "../props/Alerts";
import usePost from "../hooks/usePost";
import useImageBtn from "../hooks/useImageBtn";
import { DialogAnimation, AlertAnimation } from "../props/Animation";
import { ImagePlus, CircleX } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowing } from "../store/state";

export const CreatePost = () => {
  const { setPost, sendPost, post, setImage } = usePost();
  const { handleButtonClick, selectedImage, fileInputRef, setSelectedImage } =
    useImageBtn("");
  const user = useSelector((state) => state.user);
  const show = useSelector((state) => state.isShowing);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {user ? (
        <DialogAnimation showing={show}>
          <form onSubmit={sendPost}>
            <div className="absolute bg-primary-content border-2  rounded-xl  p-8 md:ml-6 md:left-auto sm:left-10  top-32  sm:mx-auto  w-full left-0  sm:w-[600px] md:w-[500px] xl:w-[550px]  font-inter tracking-wide">
              <div className="flex flex-row mt-4 mx-4 cursor-pointer   ">
                <img
                  src={`http://localhost:3000/` + user.profileImage}
                  className="rounded-xl w-[49.7px] h-[49.7px]"
                />

                <div className=" text-white pl-4 mt-2 ">
                  <h1 className="text-sm   font-semibold ">{user.firstName}</h1>

                  <p className=" text-[10px] font-light">{user.email}</p>

                  <a
                    onClick={() => dispatch(setIsShowing(false))}
                    className="btn  btn-circle btn-ghost   absolute top-1 right-2 ">
                    {show ? <CircleX /> : ""}
                  </a>
                </div>
              </div>
              <div>
                <textarea
                  value={post}
                  onChange={(e) => setPost(e.target.value)}
                  className="textarea textarea-ghost mt-8 px-4 w-full bg-primary-content   h-auto "
                  placeholder="What do you want to talk about"
                  required></textarea>

                {selectedImage && (
                  <div>
                    <img
                      name="image"
                      className="ml-10 mt-4 "
                      src={selectedImage}
                      alt="Selected"
                      style={{ maxWidth: "300px", maxHeight: "190px" }}
                    />
                  </div>
                )}
                <div className="border-t-[1px] mt-10  flex flex-row gap-4 justify-end ">
                  <a
                    onClick={handleButtonClick}
                    className="mt-4 btn btn-ghost border-dotted border-2 btn-outline ">
                    <ImagePlus />
                  </a>
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <button
                    className=" btn mt-4 mr-4 w-24 btn-ghost btn-outline "
                    type="submit">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </DialogAnimation>
      ) : (
        <AlertAnimation showing={show}>
          <Alerts
            message="Login Or Register to Add post"
            show={() => dispatch(setIsShowing(false))}
            setShow={show}
          />
        </AlertAnimation>
      )}
    </>
  );
};
