import axios from "axios";
import { useState } from "react";

export default function usePost() {
  const [post, setPost] = useState("");
  const [image, setImage] = useState();

  async function sendPost(e) {
    e.preventDefault();

    // Create a FormData object to handle the post and image data
    const formData = new FormData();
    formData.append("post", post);
    if (image) {
      formData.append("image", image);
    }

    try {
      // Send POST request to the server with the formData
      const response = await axios.post(
        "http://localhost:3000/api/Post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data sent to the backend:", response.data);
      // You can handle success here (e.g., clear input fields, notify the user)
      // setMessage(true); // Example: Set a state to display success message
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        console.error("Error response from server:");
        console.error("Response data:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else {
        console.error("Error occurred:", error.message);
      }

      // Handle the error (e.g., display an error message to the user)
      // setMessage(true); // Example: Set a state to display error message
    }
  }

  return { sendPost, setPost, post, setImage };
}
