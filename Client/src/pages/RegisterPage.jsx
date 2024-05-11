import React from "react";
import { registeSchema, registerInitialValues } from "../utils/userSchema";
import { Formik, Form } from "formik";
import Dropzone from "react-dropzone";
import useRegister from "../hooks/useRegister";
import { Pencil, ImagePlus } from "lucide-react";
import Inputfield from "../props/Inputfield";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { newUser } = useRegister();
  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      await newUser(values, onSubmitProps);

      console.log("data submited:", values);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="h-screen  bg-left  sm:bg-cover">
      <div className=" flex flex-col sm:flex-row md:w-ful tracking-wide leading-6 font-inter w-full  h-screen">
        <div className=" sm:w-1/2   flex flex-col py-8 items-center justify-center   bg-[#37375ef8]">
          <h1 className="md:text-3xl text-3xl  lg:text-[4rem] font-medium py-4 ">
            Welcome Back!
          </h1>
          <p className=" text-[14px] mt-2  lg:text-[14px] px-6 py-2 text-center">
            Enter your personal account to enter the website apps
          </p>
          <Link to="/Login" class="btn btn-outline mt-4 sm:w-[150px] ">
            login
          </Link>
        </div>
        {/* <Forms /> */}
        <Formik
          initialValues={registerInitialValues}
          validationSchema={registeSchema}
          onSubmit={handleFormSubmit}>
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="flex flex-col  bg-primary-content justify-center  pb-28 px-10 sm:px-auto gap-6 sm:w-1/2 ">
              <h1 className="text-5xl md:text-[38px] lg:text-[52px] xl:text-[4rem]sm:text-4xl sm:py-8 sm:pt-20  md:pt-20  py-8  text-center font-bold  tracking-wider">
                Register
              </h1>
              <div className="xl:grid xl:grid-cols-2 gap-4 flex flex-col  ">
                <Inputfield
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  message="Invalid firstName"
                />
                <Inputfield
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  message="Invalid LastName"
                />
              </div>
              <div className="flex flex-col gap-6">
                <Inputfield
                  name="education"
                  type="text"
                  placeholder="Education(example:Bachelor's ...)"
                  message="Invalid Education"
                />
                <label className="input items-center justify-center flex gap-2 h-28">
                  <Dropzone
                    acceptedFiles=".jpg,.png,.jpeg,.svg"
                    multiple={false}
                    onDrop={(acceptedFiles) => {
                      console.log("Accepted files:", acceptedFiles);
                      if (acceptedFiles.length > 0) {
                        const file = acceptedFiles[0];
                        console.log(
                          "Before setting profileImage:",
                          values.profileImage
                        );
                        setFieldValue("profileImage", file);
                        console.log(
                          "After setting profileImage:",
                          values.profileImage
                        );
                      } else {
                        console.log("No accepted files found.");
                      }
                    }}>
                    {({ getRootProps, getInputProps }) => (
                      <p
                        className="  w-[750px] overflow-hidden   rounded-md   "
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        {!values.profileImage ? (
                          <p className=" alert  bg-neutral flex p-8  gap-4 flex-row items-center justify-between ">
                            Upload Image Requried
                            <span className="text-pretty">
                              <ImagePlus />
                            </span>
                          </p>
                        ) : (
                          <p className="flex alert p-4  alert-success gap-4 flex-row items-center justify-between ">
                            {values.profileImage.name}
                            <span className="text-pretty">
                              <Pencil />
                            </span>
                          </p>
                        )}
                      </p>
                    )}
                  </Dropzone>
                </label>
                <Inputfield
                  name="email"
                  type="email"
                  placeholder="Email(example@gmail.com)"
                  message="Invalid Email Address "
                />
                <Inputfield
                  name="password"
                  type="password"
                  placeholder="Password(examplE@123)"
                  message="Invalid Password"
                />
              </div>
              <button
                class="btn "
                type="submit"
                disabled={isSubmitting}
                className="btn btn-outline mb-16">
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
