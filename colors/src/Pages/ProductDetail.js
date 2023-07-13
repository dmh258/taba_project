import React, { useState } from 'react';
import BackBar from "../Tools/BackBar";

import Detail from "../Product/ProductDetail";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
  };

  const ProductDetail = () => {

    return (
      <div style={backgroundStyle}>
      <BackBar pageName="상세보기"/>
      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center',}}>
        <Detail />
      </div>
      <img src='/image/product/decoBar.png' style={{padding:'80px 0 0'}}/>
      </div>
    );
  };
  
  export default ProductDetail; 