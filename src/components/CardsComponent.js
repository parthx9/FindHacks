import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://allhacks.herokuapp.com/hacks")
        .then((res) => setData(res.data.hackathon));
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="grid-container">
      {data?.map((item) => (
        <div>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
