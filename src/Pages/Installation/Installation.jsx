import { ArrowDown, Check } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getInstalledApp } from "../../utilities/addToDB";
import InstalledApp from "../../Components/InstalledApp/InstalledApp";
import { deleteFromDB } from "../../utilities/deleteFromDB";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installedAppList, setInstalledAppList] = useState([]);
  const [sort, setSort] = useState("");
  const allAppsData = useLoaderData();

  useEffect(() => {
    const storedAppsData = getInstalledApp();
    const convertedStoredAppsId = storedAppsData.map((id) => parseInt(id));
    const installedList = allAppsData.filter((app) =>
      convertedStoredAppsId.includes(app.id),
    );
    setInstalledAppList(installedList);
    // console.log(installedList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Ascending") {
      const sortedByLowToHigh = [
        ...installedAppList.sort((a, b) => a.size - b.size),
      ];
      setInstalledAppList(sortedByLowToHigh);
    } else if (sortType === "Descending") {
      const sortedByHighToLow = [
        ...installedAppList.sort((a, b) => b.size - a.size),
      ];
      setInstalledAppList(sortedByHighToLow);
    }
  };

  const handleUninstall = (id, title) => {
    // console.log(id);
    const updatedList = installedAppList.filter((app) => app.id !== id);
    setInstalledAppList(updatedList);

    deleteFromDB(id);
    toast(`${title} un-installed from your Device`);
  };

  //   console.log(installedAppList);

  return (
    <div className="max-w-7xl mx-auto text-center space-y-2 my-4">
      <div className="flex gap-4 justify-center items-center">
        <h1>Your Installed Apps</h1>
        <img src="./icon/vs-icon.svg" alt="" className="text-purple-500" />
      </div>

      <p>Explore All Trending Apps on the Market developed by us</p>

      <div className="flex justify-between items-center">
        <p>({installedAppList.length}) Apps Found</p>
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1 w-40">
            {sort || "Sort by Size"} <ArrowDown></ArrowDown>
          </div>

          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 p-2 shadow-sm"
          >
            <li className="menu-title px-2 py-1 text-sm font-semibold">
              Sort by Size
            </li>

            <li onClick={() => handleSort("Ascending")}>
              <button className="flex items-center justify-between w-full">
                <span>
                  {sort === "Ascending" && <Check className="size-4" />}
                </span>
                <span>Low → High</span>
              </button>
            </li>

            <li onClick={() => handleSort("Descending")}>
              <button className="flex items-center justify-between w-full">
                <span>
                  {sort === "Descending" && <Check className="size-4" />}
                </span>

                <span>High → Low</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider divider-default"></div>

      {/* list of installed apps  */}
      <div>
        <div className="list bg-base-100 rounded-box shadow-md space-y-2">
          {installedAppList.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            ></InstalledApp>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
