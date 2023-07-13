import React, { useState, useEffect } from 'react';
import UploadButton from './UploadButton';

const NotionImages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <img src='/image/upload/caution1.png' alt="주의사항 1" />,
    <img src='/image/upload/caution2.png' alt="주의사항 2" />,
    <img src='/image/upload/caution3.png' alt="주의사항 3" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const Indicator = (index) => {
    const isActive = index === currentSlide;
    return (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          backgroundColor: isActive ? '#F5C359' : '#dbdbdb',
          margin: '10px',
          cursor: 'pointer',
        }}
      />
    );
  };

  //style

  const containerStyle = {
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '660px',
    // height: '680px',
    backgroundColor: '#ffffff',
    border: '1px solid #272727',
  };

  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '450px',
    height: '417px',
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    background: 'none !important',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={{display: 'flex',justifyContent: 'center', }}>
        <button style={buttonStyle} onClick={goToPreviousSlide}><img src='/image/upload/chevron-left.svg' /></button>
        <div style={{slideStyle}}>{slides[currentSlide]}</div>
        <button style={buttonStyle} onClick={goToNextSlide}><img src='/image/upload/chevron-right.svg' /></button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
        {slides.map((slide, index) => Indicator(index))}
      </div>
      <UploadButton />
    </div>
  );
};

export default NotionImages;



