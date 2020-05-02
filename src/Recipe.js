import React from "react";
import "./recipe.css";

const Recipe = ({
  label,
  calo,
  img,
  steps,
  caloriescount,
  healthLabels,
  source,
  url,
}) => {
  if (calo < caloriescount) {
    return (
      <div className="card">
        <img src={img} alt="" />
        <div className="description">
          <h1>{label}</h1>
          <p>Calories : {calo} </p>
          <ul>
            {steps.map((step) => (
              <li> {step.text} </li>
            ))}
          </ul>
          {healthLabels.map((labels) => (
            <button className="btn-labels" disabled>
              {" "}
              + {labels}{" "}
            </button>
          ))}
          <br />

          <a href={url}>
            <button className="btn-source">Source: {source}</button>
          </a>
        </div>
      </div>
    );
  } else {
    
    return null;
  }
};
export default Recipe;
