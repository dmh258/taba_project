import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '100px',
    display: isVisible ? 'block' : 'none',
    zIndex: '999',
    backgroundColor: 'transparent',
    border: 'none',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
  };

  return (
    <button onClick={scrollToTop} style={buttonStyle}>
      <img src='/image/totop/totop.svg' />
    </button>
  );
};

export default ScrollToTopButton;
