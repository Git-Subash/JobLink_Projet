import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { SlidebarAnimation } from "../props/Animation";
import defaultImg from "../assets/default.jpg";
import {
  BriefcaseBusiness,
  Home,
  MessageSquareText,
  SquareUser,
  CircleX,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store/state";

const Nav = [
  { name: "Dashboard", href: "#", logo: <Home /> },
  { name: "Jobs", href: "#", logo: <BriefcaseBusiness /> },
  { name: "Network", href: "#", logo: <SquareUser /> },
  { name: "Message", href: "#", logo: <MessageSquareText /> },
];

function SlideBar() {
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <aside>
      <SlidebarAnimation showing={isShowing}>
        <div className="flex flex-col lg:hidden  z-50  bg-primary-content h-screen w-60  absolute ">
          <div className="nav-bar  h-screen ">
            <Link className={!user ? "hidden " : "flex flex-row mt-4 w-auto "}>
              {user ? (
                <>
                  <img
                    src={`http://localhost:3000/` + user.profileImage}
                    className="rounded-xl w-[47.7px] h-[49.7px]"
                  />
                  <div className=" text-white px-2 mt-2  w-auto ">
                    <h1 className="text-sm   font-semibold ">
                      {user.firstName}
                    </h1>
                    <p className=" text-[10px] font-light">{user.email}</p>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={defaultImg}
                    className="rounded-xl w-[47.7px] h-[49.7px]"
                  />
                </>
              )}
            </Link>
            <button
              className="p-2  bg-transparent  absolute w-10 h-10 left-[200px] top-1 "
              onClick={() => setIsShowing((isShowing) => !isShowing)}>
              {isShowing ? <CircleX /> : ""}
            </button>
            <div
              className={user ? "hidden" : " flex flex-row gap-4 mt-4 ml-2 "}>
              <Link
                to="/Login"
                class="btn  btn-ghost border-spacing-1 btn-outline "
                type="submit">
                LOGIN
              </Link>
              <Link
                to="/Register"
                class="btn btn-gost  btn-outline border-spacing-1 "
                type="submit">
                SIGN UP
              </Link>
            </div>
            <div className="flex flex-col gap-6 ">
              {Nav.map((item) => (
                <a key={item.name} href={item.href} className="button  ">
                  <span className="text-xs"> {item.logo}</span> {item.name}
                </a>
              ))}

              <button
                onClick={() => dispatch(setLogout()) && navigate("/Login")}
                className={user ? "button" : "hidden"}
                href="">
                <LogOut /> Logout
              </button>
            </div>
          </div>
        </div>
      </SlidebarAnimation>

      <Navbar
        show={() => setIsShowing((isShowing) => !isShowing)}
        setShow={isShowing}
      />
    </aside>
  );
}

export default SlideBar;
