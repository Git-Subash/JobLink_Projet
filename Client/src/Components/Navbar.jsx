import { useState } from "react";
import React from "react";
import {
  BriefcaseBusiness,
  AlignJustify,
  MessageSquareText,
  SquareUser,
  Search,
  LogOut,
  Home,
} from "lucide-react";
import { setLogout } from "../store/state";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import defaultImg from "../assets/default.jpg";
import { Transition } from "@headlessui/react";
import defaultImg from "../assets/default.jpg";
const Nav = [
  { name: "Jobs", href: "#", logo: <BriefcaseBusiness /> },
  { name: "Network", href: "#", logo: <SquareUser /> },
  { name: "Message", href: "#", logo: <MessageSquareText /> },
];

const Navbar = ({ show, setShow }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      <header className="flex flex-row justify-between lg:justify-center    h-20  bg-primary-content py-4   w-full lg:gap-24  sm:gap-6  ">
        <button
          className="btn hover:bg-[#37375ef8] btn-ghost btn-circle  bg-primary-content lg:hidden ml-2"
          onClick={show}>
          {setShow ? "" : <AlignJustify />}
        </button>
        <a href="/" className="text-white text-lg  pt-2   sm:text-2xl ">
          JobPro
        </a>

        <form className="input flex gap-2 w-[300px]  sm:w-[750px]  lg:w-[300px] md:w-[600px]   bg-[#161625f8]  border-1 border-[#37375ef8]   ">
          <input type="text" className="grow    " placeholder="Search" />
          <button>
            <Search />
          </button>
        </form>

        <nav
          className={
            user ? "flex flex-row gap-10 ml-4 " : " flex flex-row gap-10  ml-4"
          }>
          {Nav.map((item) => (
            <>
              <a
                key={item.name}
                href={item.href}
                className="btn btn-square bg-transparent border-0 hover:bg-transparent  hidden lg:flex lg:flex-col   ">
                <span className="text-xs"> {item.logo}</span>
                <p>{item.name}</p>
              </a>
            </>
          ))}
          <div className="dropdown dropdown-end rounded-md bg-primary-content   ">
            <div className="" tabIndex={0} role="button">
              {user ? (
                <img
                  className="rounded-full   lg:w-[56px] lg:flex hidden  w-[74px] h-[50px]"
                  src={`http://localhost:3000/` + user.profileImage}
                />
              ) : (
                <img
                  className="rounded-full   lg:w-[56px] lg:flex hidden  w-[74px] h-[50px]"
                  src={defaultImg}
                />
              )}
            </div>
            <ul
              tabIndex={0}
              className="flex flex-col  dropdown-content  bg-primary-content menu-dropdown p-4  z-[50] gap-2">
              <li className="flex   ">
                <Link
                  to={user ? "/" : "/Login"}
                  className={
                    user
                      ? " btn btn-outline w-[170px] justify-start gap-2  "
                      : "btn btn-ghost btn-outline w-[170px] border-spacing-1 border-cyan-100"
                  }>
                  <span className={!user && "hidden"}>
                    <Home />
                  </span>
                  {user ? "Profile" : "LOGIN"}
                </Link>
              </li>
              <li className="flex">
                {user && (
                  <a
                    onClick={() => dispatch(setLogout()) && navigate("/Login")}
                    className="btn w-[170px] btn-ghost btn-outline justify-start  ">
                    <LogOut /> Logout
                  </a>
                )}
                {!user && (
                  <Link
                    to="/Register"
                    class="btn btn-ghost btn-outline w-[170px] border-spacing-1 ">
                    SIGN UP
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
