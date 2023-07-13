import React from "react";
import { Link } from "react-router-dom";

import NavigationBar from "pages/Diagnosis/NavigationBar";
import Footer from "pages/Diagnosis/Footer";

import MainBanner from "./MainBanner";
import Centerbanner from "./Centerbanner";
import Bottombanner from "./Bottombanner";
const Landing = () => {
  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent",
  };
  return (
    <div>
      <NavigationBar />
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
          height: "272px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <button style={buttonStyle}>
            <img src="/img/로그인 버튼.png" />
          </button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
