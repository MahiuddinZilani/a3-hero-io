import { Search } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router";
import Apps from "../../Components/Apps/Apps";

const AllApps = () => {
  const allApps = useLoaderData();
  //   console.log(apps);
  return (
    <div className="max-w-7xl mx-auto text-center space-y-2 my-4">
      <div className="flex gap-4 justify-center items-center">
        <h1>Our All Application</h1>
        <img src="./icon/vs-icon.svg" alt="" className="text-purple-500" />
      </div>
      <p>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between">
        <p>({allApps.length}) Apps Found</p>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div>
        <Apps apps={allApps}></Apps>
      </div>
    </div>
  );
};

export default AllApps;
