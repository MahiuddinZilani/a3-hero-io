import { Home, House } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-1/3">
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
          <div className="py-6">
            <button className="btn">
              <span>
                <img src="./play_store.png" alt="" className="max-w-8" />
              </span>
              Google Play
            </button>
            <button className="btn">
              <span>
                <img src="./app_store.png" alt="" className="max-w-8" />
              </span>
              App Store
            </button>
          </div>
        </div>
        <img src="./hero.png" alt="" className="max-w-6xl"></img>
      </div>
    </div>
  );
};

export default Hero;
