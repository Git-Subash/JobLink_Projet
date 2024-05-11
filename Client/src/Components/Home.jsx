import React from "react";
import Latestjobs from "./Latestjobs";
import AddPost from "./AddPost";
import EnterAnim from "../props/EnterAnim";
import { ProfileCard } from "../Components/ProfileCard";

const Home = () => {
  return (
    <EnterAnim>
      <section className="flex flex-col   justify-center md:flex-row  gap-6 lg:px-10 md:px-4 mt-4  px-4 ">
        <ProfileCard />
        <AddPost />
        <Latestjobs />
      </section>
    </EnterAnim>
  );
};
export default Home;
