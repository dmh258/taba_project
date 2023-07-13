import React, { useState, useEffect } from 'react';
import PartsTab from './PartsTab';

const MakeupImage = () => {

    const images = [
      '/image/makeup/makeup_1.png',
      '/image/makeup/makeup_2.png',
      '/image/makeup/makeup_3.png',
    ];
  
    //슬라이드
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images]); 
    
    //style
    const containerStyle = {
      width: '660px',
      height: '750px',
      backgroundColor: '#ffffff',
      padding: '0px',
      margin: '0px',
    };
  
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    };
  
    return (
      <div style={containerStyle}>
        <img src={images[currentImageIndex]} style={imageStyle} alt="Makeup" />
      </div>
    );
  };
  

const MakeupPage = () => {

    const makeuppageStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: '40px 300px',
    };

    return(
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center', backgroundColor:'#F5C359'}}>
            <div style={makeuppageStyle}>
                <MakeupImage />
                <PartsTab />
            </div>
            <img src='/image/makeup/decoBar.png' style={{ width: '100%', padding:'5px 0pxs'}} alt="deco" />
        </div>
        
    );
};

export default MakeupPage;