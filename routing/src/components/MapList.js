import React, {useState, useEffect} from "react";
import axios from 'axios';
import Map from "./Map";
function MapList() {
  const fetchMap = async () => {
    try {
      const { data } = await axios.get('https://fortnite-api.com/v1/map');
      const pois = data.data.pois;
      setPois(pois);
    } catch (error) {
      console.log('Failed to get map information');
    }
  }

  useEffect(() => {
    fetchMap();
  }, []);

  const [pois, setPois] = useState([]);

  return (
    <div>
      {pois.length === 0 ? <h1>Loading...</h1> : <Map pois={pois} />}
    </div>
  );
}

export default MapList;
