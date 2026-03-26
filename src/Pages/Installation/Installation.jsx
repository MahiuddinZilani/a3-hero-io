import { ArrowDown } from "lucide-react";
import React from "react";

const Installation = () => {
  return (
    <div className="max-w-7xl mx-auto text-center space-y-2 my-4">
      <div className="flex gap-4 justify-center items-center">
        <h1>Your Installed Apps</h1>
        <img src="./icon/vs-icon.svg" alt="" className="text-purple-500" />
      </div>

      <p>Explore All Trending Apps on the Market developed by us</p>

      <div className="flex justify-between items-center">
        <p>({}) Apps Found</p>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by Size <ArrowDown></ArrowDown>
          </div>

          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <p>Sort by Size</p>
            <li>
              <a>Low - High </a>
            </li>
            <li>
              <a>High - low</a>
            </li>
          </ul>
        </div>
      </div>

      {/* list of installed apps  */}
      <div></div>
    </div>
  );
};

export default Installation;
