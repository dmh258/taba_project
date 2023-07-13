import React from "react";

const Centerbanner = () => {
  const containerStyle = {
    display: "flex",
    justifycontent: "center",
    alignitems: "center",
    flexdirection: "column",
    height: "850px",
    width: "100%",
    padding: "40px 390px",
  };
  const contentStyle = {
    display: "flex",
    alignItems: "center",
  };
  const imgstyle = {
    width:'100%',
    height: '100%',
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "50px",
    color: "#000000",
    lineHeight: "151%",
    width: "410px",
    textAlign: "center",
    margin: "auto",
    flexWrap: "wrap",
    fontFamily: "YANGJIN",
  };

  const subtitleStyle = {
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "151%",
    width: "410px",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div
          style={{
            width: "100%",
            height: "129px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignitems: "flex-start",
          }}
        >
          <img
            src="/image/landing/arrowdown.svg"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />

          <p style={titleStyle}>How to Play</p>

          <div
            style={{
              display:'flex',
              justifyContent:'center',
              width: "500px",
              height: "400px",
              margin: "0 auto",
            }}
          >
            <img style={imgstyle} src="/image/landing/mid1.png" alt="browser" />
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textalign: "center",
                justifyContent: "center",
                marginleft: "0",
                marginleft: "278px,",
                fontFamily: "YANGJIN",
                fontSize: "44px",
              }}
            >
              <p style={titleStyle}>어디서든 나와 맞는 제품 찾기</p>

              <p style={subtitleStyle}>
                간단하게 퍼스널 컬러 진단받고
                <br />
                나와 어울리는 제품 추천까지!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centerbanner;
