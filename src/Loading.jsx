import React from "react";
import "./loading.css";

const loadingNames = [
  "Audio",
  "Oval",
  "Flicker",
  "HalfCircle",
  "LittleCircle",
  "Rain",
  "Stretch",
  "StretchFlicker",
];
loadingNames.includes(type) ? Spinner[type] : Spinner.Oval;

export const Loading = (props) => {
  return (
    <div className="porps.">
      {React.createElement(
        componentName(props.type) ? Spinner[type] : Spinner.Oval,
        { ...props }
      )}
    </div>
  );
};
