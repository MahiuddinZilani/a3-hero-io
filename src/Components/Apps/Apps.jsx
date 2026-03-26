import React, { Suspense } from "react";
import App from "../App/App";

const Apps = ({ apps }) => {
  //   const appsPromise = fetch("./apps.json").then((res) => res.json());
  //   console.log("apps:", apps);
  return (
    <div>
      <Suspense fallback={<span>Loading</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {apps.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Apps;
