import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import logo from "../assets/participant.png";

const Card = ({ item }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card styledCard">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <img
            className="card-img-top imageIdentifier"
            src={item.image}
            alt="mlh"
          />
          {item.prize !== "" ? <div className="prize">{item.prize}</div> : null}
          <img
            src={item.companyLogo}
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
              position: "absolute",
              right: "1rem",
              top: "1rem",
              borderRadius: "7px",
            }}
          />
        </div>

        <div className="card-body">
          <div className="innerCard">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 className="card-title">
                <a target="_blank" rel="noreferrer" href={item.link}>
                  {item.title}
                </a>
              </h4>
              {item.participants !== "" ? (
                <div className="p-logo">
                  <img src={logo} alt="people" />
                  <p>{item.participants}</p>
                </div>
              ) : null}
              <h2 className="card-date">{item.date}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
