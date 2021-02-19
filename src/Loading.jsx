import Loading1 from "./svg/loading1";
import Loading2 from "./svg/loading2";
import Loading3 from "./svg/loading3";
import Loading4 from "./svg/loading4";
import Loading5 from "./svg/loading5";
import Loading6 from "./svg/loading6";
import Loading7 from "./svg/loading7";
import Loading8 from "./svg/loading8";

import "./loading.css";

const Loading = ({ type, width, height, color }) => {
  const ldObj = {
    1: <Loading1 width={width} height={height} color={color} />,
    2: <Loading2 width={width} height={height} color={color} />,
    3: <Loading3 width={width} height={height} color={color} />,
    4: <Loading4 width={width} height={height} color={color} />,
    5: <Loading5 width={width} height={height} color={color} />,
    6: <Loading6 width={width} height={height} color={color} />,
    7: <Loading7 width={width} height={height} color={color} />,
    8: <Loading8 width={width} height={height} color={color} />,
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
