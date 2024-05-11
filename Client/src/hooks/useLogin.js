import { useState, useContext } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store/state";

export default function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  //fetching data to the server
  async function loginUser(values, onSubmitProps) {
    // setLoading(true);
    try {
      const email = values.email;
      const password = values.password;

      const loginResponse = await axios.post(
        "http://localhost:3000/api/Login",
        {
          email,
          password,
        },
        {
          header: { "Content-type": "application/json" },
        }
      );
      navigate("/");
      const loginData = await loginResponse.data;
      console.log(loginData);
      onSubmitProps.resetForm();
      navigate("/");
      if (loginData) {
        dispatch(
          setLogin({
            user: loginData.user,
            token: loginData.token,
          })
        );
      } else {
        console.log("error in dispatch Also :(");
        navigate("/Login");
      }
    } catch (error) {
      setmessage(true);
      console.error("Authentication Failed", error);
      if (error.response && error.response.data) {
        console.log(error.data.response);
      } else {
        res.json({ status: "error", error: "data not found " });
      }
    }
  }

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users", {
        headers: { Authorization: `${token}` },
      });
      console.log("Data fecthing Success :)", response.data);
      const data = await response.data;
      return data;
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return {
    loginUser,
    getUser,
  };
}
