import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Card = ({ data }) => {
  return (
    <div>
      <div class="card">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            class="card-img-top"
            src={data.image}
            alt="mlh"
            style={{ width: "30%", borderRadius: "20%", margin: "1rem 1rem" }}
          />
          <h5 style={{ margin: "1rem 1rem" }}>{data.date}</h5>
        </div>

        <div class="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 class="card-title">{data.title}</h4>
          </div>

          <p class="card-text">
            {data.participants !== "" ? data.participants : null}
            {data.prize !== "" ? " Prize: " + data.prize : null}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              href={data.link}
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit Website
            </a>
            <p style={{ position: "relative", top: "0.5rem" }}>
              Powered By: {data.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
