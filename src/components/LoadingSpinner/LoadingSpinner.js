import React from "react";
import { HashLoader } from "react-spinners";

const wrapStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 40px)"
};

const LoadingSpinner = () => {
  return (
    <div className="sweet-loading" style={wrapStyle}>
      <HashLoader sizeUnit={"px"} size={50} color={"#dbe4eb"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
