import React from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../Tools/BackBar";

import Main from "../Main/MainPage";


const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
    margin: '0px',
  };


const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div style={backgroundStyle}>
    {/* <BackBar pageName="가상 메이크업" onClick={()=>navigate("/")}/> */}
    <Main />
    </div>
  );
};

export default LoginSignup;