import { useState, useRef } from "react";
import usePost from "./usePost";

function useImageBtn() {
  const [selectedImage, setSelectedImage] = useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };
  return {
    handleButtonClick,
    selectedImage,
    fileInputRef,
    setSelectedImage,
  };
}

export default useImageBtn;
