import React, { useState } from 'react';
import BackBar from "../Tools/BackBar";

import Search from "../Product/ProductSearch";

const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
  };

  const ProductSearch = () => {

    return (
      <div style={backgroundStyle}>
      <BackBar pageName="검색"/>
      <div style={{display:'flex', alignItems: 'center', justifyContent: 'center',}}>
        <Search />
      </div>
      </div>
    );
  };
  
  export default ProductSearch; 