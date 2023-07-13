import React from "react";
import BackBar from "../Tools/BackBar";

import Intro from "../Introduce/IntroducePage";

const backgroundStyle = {
  fontFamily: 'Noto Sans KR, sans-serif',
  fontSize: '14px',
  letterSpacing: '0.5%',
  padding: '0px',
  margin: '0px',
  };


const Introduce = () => {

  return (
    <div style={backgroundStyle}>
    <BackBar pageName="컬러놀이 소개"/>
    <Intro />
    </div>
  );
};

export default Introduce;