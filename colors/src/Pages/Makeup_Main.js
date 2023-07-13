import React from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../Tools/BackBar";

import MakeupPage from "../Makeup-Main/MakeupPage";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
    margin: '0px',
  };


const Makeup = () => {

  return (
    <div style={backgroundStyle}>
    <BackBar pageName="가상 메이크업"/>
    <MakeupPage />
    </div>
  );
};

export default Makeup;