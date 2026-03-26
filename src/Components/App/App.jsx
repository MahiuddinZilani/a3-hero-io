import React from "react";
import { Link } from "react-router";

const App = ({ app }) => {
  const { id, image, title, ratingAvg, downloads } = app;
  //   console.log(app);
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card bg-base-100 max-w-96 shadow-sm">
        <figure>
          <img src={image} alt="app" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            <span className="badge ">
              <img src={"../../../public/icon/download-icon.svg"} alt="" />
              {downloads}
            </span>
            <span className="badge ">
              <img src={"../../../public/icon/star-rating.svg"} alt="" />
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default App;
