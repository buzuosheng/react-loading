const Loading7 = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="30px"
      viewBox="0 0 24 30"
      enable-background="new 0 0 50 50"
    >
      <rect x="0" y="0" width="4" height="20" fill="#1890ff">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="1; .2; 1"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="7" y="0" width="4" height="20" fill="#1890ff">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="1; .2; 1"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="14" y="0" width="4" height="20" fill="#1890ff">
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

export default Loading7;
