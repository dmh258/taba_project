import React from "react";
import { Link } from "react-router-dom";

import MainBanner from "../Landing/MainBanner";
import Centerbanner from "../Landing/Centerbanner";
import Bottombanner from "../Landing/Bottombanner";

const Landing = () => {
  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent",
    margin: '40px 0',
    display:'flex',
  };
  return (
    <div>
      <div>
        <MainBanner />
      </div>
      <div>
        <Centerbanner />
      </div>
      <div>
        <Bottombanner />
      </div>
      <div
        style={{
          display:'flex',
          height: "272px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/Login">
          <button style={buttonStyle}>
            <img src="/image/landing/login.png" />
          </button>
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Landing;
