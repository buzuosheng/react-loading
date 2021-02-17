import Loading1 from "./svg/loading1";
import Loading2 from "./svg/loading2";
import Loading3 from "./svg/loading3";
import Loading4 from "./svg/loading4";
import Loading5 from "./svg/loading5";
import Loading6 from "./svg/loading6";
import Loading7 from "./svg/loading8";
import Loading8 from "./svg/loading7";
import "./loading.css";

const Loading = () => {
  return (
    <div>
      <div className="header">
        <h1>8种loading样式</h1>
      </div>
      <div className="loading-wrap">
        <div className="loading">
          <Loading1 />
        </div>
        <div className="loading">
          <Loading2 />
        </div>
        <div className="loading">
          <Loading3 />
        </div>
        <div className="loading">
          <Loading4 />
        </div>
        <div className="loading">
          <Loading5 />
        </div>
        <div className="loading">
          <Loading6 />
        </div>
        <div className="loading">
          <Loading7 />
        </div>
        <div className="loading">
          <Loading8 />
        </div>
      </div>
      <div className="footer">
        <a href="https://github.com/buzuosheng/loading">源码</a>
      </div>
    </div>
  );
};

export default Loading;
