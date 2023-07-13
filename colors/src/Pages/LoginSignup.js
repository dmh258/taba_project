import React from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../Tools/BackBar";

import Login from "../LoginSignup/LoginSignupPage";


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
    <BackBar pageName="로그인/회원가입" onClick={()=>navigate("/")}/>
    <Login />
    </div>
  );
};

export default LoginSignup;