import { Home, House } from "lucide-react";
import React from "react";
import heroImage from "../../../public/hero.png";

const Hero = () => {
  return (
    <div className="hero bg-gray-100 min-h-1/3">
      <div className="hero-content text-center flex flex-col justify-center">
        <div className="max-w-6xl">
          <h1 className="text-5xl font-bold">
            We Build <br /> <span>Productive</span> <span>App</span>
          </h1>
          <p className="py-6">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="py-6 space-x-4 ">
            <button className="btn btn-xl rounded-xl bg-white">
              <span>
                <img src="./play_store.png" alt="" className="max-w-10" />
              </span>
              Google Play
            </button>
            <button className="btn btn-xl rounded-xl bg-white">
              <span>
                <img src="./app_store.png" alt="" className="max-w-10" />
              </span>
              App Store
            </button>
          </div>
        </div>
        <img src={heroImage} alt="" className="max-w-6xl"></img>
      </div>
    </div>
  );
};

export default Hero;
