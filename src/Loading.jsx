import React from "react";
import Loading1 from "./svg/loading1.jsx";
import Loading2 from "./svg/loading2.jsx";
import Loading3 from "./svg/loading3.jsx";
import Loading4 from "./svg/loading4.jsx";
import Loading5 from "./svg/loading5.jsx";
import Loading6 from "./svg/loading6.jsx";
import Loading7 from "./svg/loading7.jsx";
import Loading8 from "./svg/loading8.jsx";

import "./loading.css";

const Loading = ({ type, width, height, color }) => {
  const ldObj = {
    Oval: <Loading1 width={width} height={height} color={color} />,
    LittleCircle: <Loading2 width={width} height={height} color={color} />,
    HalfCircle: <Loading3 width={width} height={height} color={color} />,
    Audio: <Loading4 width={width} height={height} color={color} />,
    Rain: <Loading5 width={width} height={height} color={color} />,
    Stretch: <Loading6 width={width} height={height} color={color} />,
    Flicker: <Loading7 width={width} height={height} color={color} />,
    StretchFlicker: <Loading8 width={width} height={height} color={color} />,
  };
  return (
    <div>
      {type ? (
        ldObj[type]
      ) : (
        <Loading1 width={width} height={height} color={color} />
      )}
    </div>
  );
};

export default Loading;
