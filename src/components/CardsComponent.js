import React from "react";
import { updatedJson } from "../JSON/data";
import Card from "./Card";

const CardsComponent = () => {
  console.log(updatedJson);
  return (
    <div className="grid-container">
      {updatedJson.map((data) => (
        <div>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
