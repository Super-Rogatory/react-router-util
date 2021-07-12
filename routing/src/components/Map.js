import React from "react";
import { Link } from "react-router-dom";
const Map = ({ pois }) => {
  console.log("pois from Map", pois);

  const mapList = pois.map((poi) => {
    return (
      <div key={poi.id}>
        <Link to={`/map/${poi.id}`}>
          <h1>{poi.name}</h1>
        </Link>
      </div>
    );
  });
  return mapList;
};
export default Map;
