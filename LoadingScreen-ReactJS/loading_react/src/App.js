import Loading from "./components/Loading";
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import "./style/loadingStyle.css";
function App() {
  const [isLoadings, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4000);
  });
  return <div>{isLoadings === true ? <Loading /> : <Home />}</div>;
}

export default App;
