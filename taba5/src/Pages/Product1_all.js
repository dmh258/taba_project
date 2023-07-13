import React, { useState } from 'react';
import BackBar from "../Tools/BackBar";

import ProductPage from "../Product/ProductPage1_all";
import ProductMenu from "../Product/ProductMenu";


const backgroundStyle = {  
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '14px',
    letterSpacing: '0.5%',
    padding: '0px',
  };

  const Product1_all= () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
      <div style={backgroundStyle}>
      <BackBar pageName="카테고리"/>
      <div style={{display:'flex', padding:'40px 300px'}}>
        <ProductMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductPage />
      </div>
      </div>
    );
  };
  
  export default Product1_all;