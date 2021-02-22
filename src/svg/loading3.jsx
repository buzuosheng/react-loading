import React from "react";
const Loading3 = ({ width, height, color }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width || "40px"}
      height={height || "40px"}
      viewBox="0 0 50 50"
      enable-background="new 0 0 50 50"
    >
      <path
        fill={color || "#1890ff"}
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Loading3;
