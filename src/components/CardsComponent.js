import React from "react";
import { mlh } from "../JSON/mlh";
import Card from "./Card";

const CardsComponent = () => {
  console.log(mlh);
  return (
    <div className="grid-container">
      {mlh.map((data) => (
        <div>
          <Card data={data} />
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
