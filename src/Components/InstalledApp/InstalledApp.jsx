import { Download, Star } from "lucide-react";
import React from "react";

const InstalledApp = ({ app, handleUninstall }) => {
  const {
    image,
    id,
    title,
    rating,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = app;

  //   const handleUninstall = () => {};
  return (
    <li className="list-row flex justify-between">
      <div className="flex justify-between items-center gap-10">
        <img className="size-10 rounded-box" src={image} />
        <div>
          <h1>{title}</h1>
          <div className="text-base uppercase font-mono opacity-60 flex justify-between items-center">
            <p className="flex justify-center items-center gap-2">
              <Download className="size-4"></Download>
              {downloads}
            </p>
            <p className="flex justify-center items-center gap-2">
              <Star className="size-4"></Star>
              {rating}
            </p>
            <p>{size}MB</p>
          </div>
        </div>
      </div>

      {/* <button className="btn btn-ghost"></button> */}
      <button onClick={() => handleUninstall(id)} className="btn btn-primary">
        Uninstall
      </button>
    </li>
  );
};

export default InstalledApp;
