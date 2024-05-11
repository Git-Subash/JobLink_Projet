import React from "react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg1.jpg";
import Inputfield from "../props/Inputfield";
import { loginSchema, loginInitialValues } from "../utils/userSchema";
import { Formik, Form } from "formik";

export const LoginPage = () => {
  const { loginUser } = useLogin();

  const handleFormSubmit = async (values, onSubmitProps) => {
    await loginUser(values, onSubmitProps);
    console.log(values);
  };

  return (
    <section
      className=" overflow-hidden  h-screen  sm:bg-cover bg-left-top "
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className=" flex flex-col sm:flex-row tracking-wide leading-6 font-inter md:my-36 md:mx-8 sm:my-32 ">
        <div className=" py-28  sm:rounded-l-3xl  text-center  sm:text-left sm:ml-auto  sm:min-w-[350px] sm:pt-52 px-10 sm:px-10 bg-[#202033]">
          <h1 className="md:text-3xl text-3xl  lg:text-[36px] font-medium ">
            Hello, Stranger!
          </h1>
          <p className=" text-[14px] mt-2  lg:text-[14px] md:w-[280px] ">
            Register with your personal account to use this apps
          </p>
          <Link class="btn btn-outline mt-4 sm:w-[150px] " to="/Register">
            SIGN UP
          </Link>
        </div>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginSchema}
          onSubmit={handleFormSubmit}>
          {({ isSubmitting }) => (
            <Form className="flex flex-col sm:rounded-r-3xl  sm:min-w-[200px] bg-[#12121f] sm:pt-28 pt-10 pb-28 px-10 sm:px-auto gap-8   ">
              <h1 className="sm:text-2xl md:text-3xl text-3xl text-center py-8 font-bold lg:text-[36px]">
                Sign In
              </h1>
              <Inputfield
                name="email"
                type="email"
                placeholder="Email"
                message="Invalid Email Address"
              />
              <Inputfield
                name="password"
                type="password"
                placeholder="Password"
                message="Invalid Password"
              />
              <button
                class="btn btn-outline"
                type="submit"
                disabled={isSubmitting}>
                SIGN IN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
