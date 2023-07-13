import React from "react";
// import { useNavigate } from "react-router-dom";
import BackBar from "../Tools/BackBar";

import MypagePage from "../Mypage/MypagePage";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
    margin: '0px',
  };

const Mypage = () => {
    return (
      <div style={backgroundStyle}>
      <BackBar pageName="마이페이지"/>
      <MypagePage />
      </div>
    );
  };
  
  export default Mypage;