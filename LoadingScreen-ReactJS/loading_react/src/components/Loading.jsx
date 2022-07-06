import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="loadingS">
      <Bars color="crimson" height={80} width={80} />
    </div>
  );
};

export default Loading;
