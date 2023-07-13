import React from "react";
import BackBar from "../Tools/BackBar";

import Login from "../LoginSignup/LoginSignupPage";
import { useNavigate } from "react-router-dom";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
    margin: '0px',
  };


const Product = () => {
  const navigate = useNavigate();

  return (
    <div style={backgroundStyle}>
    {/* <BackBar pageName="가상 메이크업" onClick={()=>navigate("/")}/> */}
    <Tab />
    </div>
  );
};

export default Product;