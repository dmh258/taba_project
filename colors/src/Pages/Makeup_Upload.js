import React from "react";
// import { useNavigate } from "react-router-dom";
import BackBar from "../Tools/BackBar";

import UploadPage from "../Makeup-Upload/UploadPage";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
    margin: '0px',
  };

const Upload = () => {
    return (
      <div style={backgroundStyle}>
      <BackBar pageName="가상 메이크업"/>
      <UploadPage />
      </div>
    );
  };
  
  export default Upload;