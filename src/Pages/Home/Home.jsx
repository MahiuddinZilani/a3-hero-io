import React from "react";
import Hero from "../../Components/Header/Hero";
import Apps from "../../Components/Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const apps = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Apps apps={apps}></Apps>
    </div>
  );
};

export default Home;
