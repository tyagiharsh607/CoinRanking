import React from "react";
import BTC from "../Assets/btc.gif";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={BTC} alt="" style={{ width: "100px", height: "100px" }} />
    </div>
  );
}

export default Loader;
