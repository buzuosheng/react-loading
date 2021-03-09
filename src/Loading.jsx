import React from "react";
import { Spinner } from "./svg/index";
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

export const Loading = (props) => {
  return (
    <div className={props.className} style={props.style}>
      {React.createElement(
        loadingNames.includes(props.type) ? Spinner[props.type] : Spinner.Oval,
        { ...props }
      )}
    </div>
  );
};
