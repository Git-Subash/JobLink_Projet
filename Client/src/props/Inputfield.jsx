import React from "react";
import { useField } from "formik";
import { CircleCheck } from "lucide-react";

const Inputfield = ({ label, message, ...props }) => {
  const [filed, meta] = useField(props);
  return (
    <>
      <label
        className={
          meta.error && meta.touched
            ? "input border-red-400 flex flex-col mb-6 tracking-wider  "
            : "input input-bordered  flex items-center  tracking-wider "
        }>
        <input {...filed} {...props} className="grow   py-3" />
        {meta.error && meta.touched ? (
          <div className="pt-2 tracking-wider text-xs text-red-400 transition-all ease-in-out delay-500">
            {message}
          </div>
        ) : (
          <div
            className={
              meta.error
                ? "text-red-400 text-xs tracking-wide w-20  transition-all ease-in-out delay-500 "
                : " tracking-wide text-xs text-green-400  transition-all ease-in-out delay-500"
            }>
            <CircleCheck />
          </div>
        )}
      </label>
    </>
  );
};

export default Inputfield;
