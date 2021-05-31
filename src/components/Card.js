import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Card = ({ item }) => {
  return (
    <div>
      <div className="card styledCard" style={{ backgroundColor: "" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            class="card-img-top"
            src={item.image}
            alt="mlh"
            style={{
              width: "100%",
              height: "10rem",
            }}
          />
          <img
            src={item.companyLogo}
            alt="logo"
            style={{
              width: "10%",
              height: "10%",
              position: "absolute",
              right: "0px",
            }}
          />
        </div>

        <div class="card-body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 class="card-title">{item.title}</h4>
            <h5>{item.date}</h5>
          </div>

          <p class="card-text">
            {item.participants !== "" ? item.participants : null}
            {item.prize !== "" ? " Prize: " + item.prize : null}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              class="btn btn-primary"
            >
              Visit Website
            </a>
            <p style={{ position: "relative", top: "0.5rem" }}>
              Powered By: {item.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
