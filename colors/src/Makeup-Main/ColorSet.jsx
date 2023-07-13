import React, { useState } from 'react';


const CircleButton = ({ color, onClick, isActive }) => {

  const buttonStyle = {
    backgroundColor: color,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '10px',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    border: isActive ? '15px solid #ffffff' : 'none',
  };
    
  return (
    <button style={buttonStyle} onClick={() => onClick(color)} />
  );
};

const ColorSet = ({ colors }) => {
    const [activeColor, setActiveColor] = useState(null);

    //색상코드 전송
    const handleClick = (color) => {
      const data = { color: color };
  
      fetch('/api/sendColor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          // 서버 응답 처리
          console.log('서버 응답:', result);
        })
        .catch(error => {
          // 에러 처리
          console.error('에러:', error);
        });
  
      setActiveColor(color);
    };
    //리셋 신호 전송
    const handleReset = () => {
        const data = { color: 'origin' };
  
        fetch('/api/sendColor', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
          // 서버 응답 처리
          console.log('서버 응답:', result);
        })
        .catch(error => {
          // 에러 처리
          console.error('에러:', error);
        });
  
      setActiveColor(null);
    };

  //style
  const formStlye = {
    alignContent: 'flex-start',
    height: '630px',
    backgroundColor: '#ffffff',
  };
  
 
  return (
    <div style={formStlye}>
      <div style={{display: 'flex', alignItems: 'start',  flexWrap: 'wrap'}}>
        {colors.map((color, index) => (
          <CircleButton
            key={index}
            color={color}
            onClick={handleClick}
            isActive={color === activeColor}
            style={{margin:'0px', padding: '0px'}}
          />
        ))}
        <button onClick={handleReset} style={{width:'100px',height:'100px', margin:'10px', padding:'0px',position: 'relative', background:'none', border:'none', cursor: 'pointer'}}><img src='/image/makeup/refresh.svg' alt="Reset" /></button>
        
      </div>
   </div>
  );

};


export default ColorSet;

