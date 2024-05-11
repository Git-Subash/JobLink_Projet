import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  //fetching data to the server
  async function newUser(values, onSubmitProps) {
    try {
      // this allows us to send form info with image
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("education", values.education);
      formData.append("profileImage", values.profileImage);

      // console.log("profileImage:", values.profileImage.name);

      const response = await axios.post(
        "http://localhost:3000/api/Register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      navigate("/Login");
      onSubmitProps.resetForm();
      console.log("Data send to the backend", response);
    } catch (error) {
      if (error.response) {
        console.error("Error Already userExist :)");
      } else {
        console.error("Error occurred:", error.message);
      }
      setMessage(true);
    }
  }
  return {
    newUser,
    message,
  };
}
