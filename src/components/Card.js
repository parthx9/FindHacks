import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Card = ({ item }) => {
  return (
    <div>
      <div className="card styledCard">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            className="card-img-top imageIdentifier"
            src={item.image}
            alt="mlh"
          />
          <img
            src={item.companyLogo}
            alt="logo"
            style={{
              width: "10%",
              height: "8%",
              position: "absolute",
              right: "51px",
              top: "49px",
              borderRadius: "7px",
            }}
          />
        </div>

        <div class="card-body">
          <div className="card innerCard">
            <div className="card-body">
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
                  class="btn specialButton"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
