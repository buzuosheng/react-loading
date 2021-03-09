import React from "react";

export const Rain = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24px"}
      height={props.height || "30px"}
      viewBox="0 0 24 30"
    >
      <rect x="0" y="0" width="4" height="10" fill={props.color || "#1890ff"}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="10" y="0" width="4" height="10" fill={props.color || "#1890ff"}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="20" y="0" width="4" height="10" fill={props.color || "#1890ff"}>
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
