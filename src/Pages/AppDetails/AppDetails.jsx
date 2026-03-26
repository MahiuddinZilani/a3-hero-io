import {
  DownloadIcon,
  MessageSquarePlusIcon,
  Star,
  StarIcon,
} from "lucide-react";
import React from "react";
import { useLoaderData, useParams } from "react-router";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { addToStoredDB } from "../../utilities/addToDB";
// import { RechartsDevtools } from "@recharts/devtools";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const allAppsData = useLoaderData();

  const singleAppData = allAppsData.find((app) => app.id === appId);

  const {
    image,
    title,
    rating,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleAppData;

  const handleInstallNow = (id) => {
    // console.log(id);
    addToStoredDB(id);
  };

  // console.log(singleAppData);
  //   console.log(allAppsData);
  //   console.log(typeof id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm ">
        <figure className="md:w-1/3">
          <img src={image} alt="Album" className="w-60" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Developed by: {companyName}</p>
          <div className="flex w-full flex-col">
            <div className="divider divider-primary"></div>
          </div>
          {/* statistics  */}
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <DownloadIcon></DownloadIcon>
              </div>
              <div className="stat-title">Downloads</div>
              <div className="stat-value">{downloads}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <StarIcon></StarIcon>
              </div>
              <div className="stat-title">Average Ratings</div>
              <div className="stat-value">{ratingAvg}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <MessageSquarePlusIcon></MessageSquarePlusIcon>
              </div>
              <div className="stat-title">Total Reviews</div>
              <div className="stat-value">{reviews}</div>
            </div>
          </div>
          {/* Install Button  */}
          <div className="card-actions">
            <button
              onClick={() => handleInstallNow(id)}
              className="btn btn-primary"
            >
              Install Now ({size}) MB
            </button>
          </div>
        </div>
      </div>

      {/* Ratings chart  */}
      <div className="divider divider-default"></div>

      {/* description  */}
      <div className="divider divider-default"></div>
      <div>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
