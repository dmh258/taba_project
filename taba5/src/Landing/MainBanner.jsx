import React from "react";
import { Link } from "react-router-dom";

const MainBanner = () => {
  const containerStyle = {
    height: "600px",
    width: "100%",
    backgroundColor: "#7489F5",
    display: "flex",
    justifyContent: "space-between",
    padding: "120px 390px",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "50px",
    color: "#000000",
    lineHeight: "98.62%",
    width: "410px",
    flexWrap: "wrap",
    fontFamily: "Lotteria Chab, sans-serif",
    marginBottom: "22px", // 텍스트 간격을 위한 marginBottom 속성 추가
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#666666",
    marginTop: "22px", // 텍스트 간격을 위한 marginTop 속성 추가
  };

  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 60px 0 10px",
            }}
          >
            <p style={titleStyle}>
              Find! <br /> Your Color! <br /> And Play!
            </p>
            <p style={subtitleStyle}>
              Find the right color to help you choose your
              <br />
              outfit & cosmetics!
            </p>
            <div>
              <Link to="/login">
                <button style={buttonStyle}>
                  <img src="/image/landing/login.svg" />
                </button>
              </Link>
            </div>
          </div>
          <div
          >
            <img src="/image/landing/top-img.png" alt="mainpic" style={{
              margin: "0 10px 0 0",
              overflow: "hidden",
              objectFit: "fill",
              width:'558px',
              height:'356px',
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
