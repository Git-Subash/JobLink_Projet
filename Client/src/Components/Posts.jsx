import React from "react";
import Footer from "./Footer";

export const Posts = () => {
  return (
    <section className="flex flex-col gap-3 mt-4">
      <div className="bg-primary-content p-4 rounded-md">Posts</div>
      <Footer />
    </section>
  );
};
