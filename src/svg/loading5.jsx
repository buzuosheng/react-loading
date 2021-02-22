import React from "react";
const Loading5 = ({ width, height, color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24px"}
      height={height || "30px"}
      viewBox="0 0 24 30"
      enable-background="new 0 0 50 50"
    >
      <rect x="0" y="0" width="4" height="10" fill={color || "#1890ff"}>
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
      <rect x="10" y="0" width="4" height="10" fill={color || "#1890ff"}>
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
      <rect x="20" y="0" width="4" height="10" fill={color || "#1890ff"}>
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

export default Loading5;
