import React, { useState } from "react";

const Bottombanner = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column", // 수직 정렬
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
    width: "100%",
    backgroundColor: "#F5C359",
    justifyContent: "space-between",
    padding: "40px 390px",
  };
  const contentStyle = {
    display: "flex",
    alignItems: "center",
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
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
      }}
    >
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
          <p style={titleStyle}>맞춤추천</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "101px",
          }}
        >
          <div>
            <img src="/image/landing/mid2.png" alt="customize" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 10px",
            }}
          >
            <p style={titleStyle}>
              진단결과를 바탕으로 <br />
              상품추천
            </p>
            <p style={subtitleStyle}>
              퍼스널 컬러에 기반한 맞춤 추천으로 더욱 빛나는 자신을 만나보세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bottombanner;
