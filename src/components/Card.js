import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Card = ({ data }) => {
  return (
    <div>
      <div class="card" style={{ width: "80%", height: "80%" }}>
        <img class="card-img-top" src={data.image} alt="mlh" />
        <div class="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 class="card-title">{data.title}</h4>
            <h5>{data.date}</h5>
          </div>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            class="btn btn-primary"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
