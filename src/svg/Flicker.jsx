import React from "react";
export const Flicker = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24px"}
      height={props.height || "30px"}
      viewBox="0 0 24 30"
    >
      <rect x="0" y="0" width="4" height="20" fill={props.color || "#1890ff"}>
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="1; .2; 1"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="7" y="0" width="4" height="20" fill={props.color || "#1890ff"}>
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="1; .2; 1"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="14" y="0" width="4" height="20" fill={props.color || "#1890ff"}>
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="1; .2; 1"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
