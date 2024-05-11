import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

export default function Alerts({ message, show, setShow }) {
  return (
    <div className="alert border-1 border-red-600 bg-primary-content fixed h-auto   left-0  bottom-4  mt-28 mx-8  sm:w-auto   w-[400px]  font-inter tracking-wider ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-amber-300 shrink-0 w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span className="">{message}</span>
      <div className="flex flex-row gap-2 ">
        <Link to="/Login" class="btn   btm-md btn-outline  " type="submit">
          LOGIN
        </Link>
        <Link to="/Register" class="btn  btn-md  btn-ghost" type="submit">
          SIGN UP
        </Link>
        <button
          className="btn btn-md btn-ghost btn-circle    xl:relative sm:relative  "
          onClick={show}>
          {setShow ? <CircleX /> : ""}
        </button>
      </div>
    </div>
  );
}
