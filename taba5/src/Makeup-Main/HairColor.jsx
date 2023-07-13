import React, { useState } from 'react';
import ColorSet from './ColorSet';

//퍼스널컬러 필터
const ColorTab = ({ activeTab, setActiveTab , tabContent }) => {

  const formStyle = {
    display: 'flex',
    alignItems: 'center', // 가운데 정렬
    borderBottom: '1px solid #dbdbdb',
    height: '60px',
    // width: '100%',
    backgroundColor: '#ffffff',
  };

  const buttonStyle = {
    margin: '15px 8px',
    padding: '7px 13px',
    border: 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    border: '1px solid #666666',
    borderRadius: '50px',
  };

  const activeButtonStyle = {
      ...buttonStyle,
      border: '1px solid #D01C59',
      color: '#D01C59',
  };


  return (
    <div>
      <div style={formStyle}>
        <button
          style={activeTab === 'spring' ? activeButtonStyle : buttonStyle} onClick={() => setActiveTab('spring')}>
          봄 웜톤
        </button>
        <button
          style={activeTab === 'summer' ? activeButtonStyle : buttonStyle} onClick={() => setActiveTab('summer')}>
          여름 쿨톤
        </button>
        <button
          style={activeTab === 'autumn' ? activeButtonStyle : buttonStyle} onClick={() => setActiveTab('autumn')}>
          가을 웜톤
        </button>
        <button
          style={activeTab === 'winter' ? activeButtonStyle : buttonStyle} onClick={() => setActiveTab('winter')}>
          겨울 쿨톤
        </button>
      </div>
      <div>{tabContent}</div>
    </div>
  );
};

//퍼스널컬러별 색상팔레트
const SpringColor = () => {
    const colors = ['#413225','#382D2B','#251B18','#94795C', '#A7865B', '#90745F','#93785D', '#A27452', '#98583C', '#7F5434', '#EE7B87', '#EA531C', '#FFEE4F', '#4CBCAB', '#7F9ABE'];
  
    return <ColorSet colors={colors} />;
  };
const SummerColor = () => {
    const colors = ['#302921','#32271F','#181518','#5B4B3A', '#554434', '#756858', '#5D594D','#353430','#382F26','#5A2C2F', '#F19FC4', '#D1005A', '#66C08E', '#73BFEA', '#943082'];
  
    return <ColorSet colors={colors} />;
  };
const AutumnColor = () => {
  const colors = ['#28201B','#16130E','#12120F','#594739', '#906240', '#786142','#625044', '#423223','#4F473C','#2B2321', '#A1060D', '#BF8213', '#BDC132', '#24542D', '#007480'];

  return <ColorSet colors={colors} />;
};
const WinterColor = () => {
    const colors = ['#1E1916','#1D1E19','#141215','#352D2A', '#532B33','#2C1112', '#332F26', '#222631', '#292524', '#0E0D0B', '#E5007E', '#0076B6', '#2F1F4D', '#E0F2F4', '#FDF8D1'];
  
    return <ColorSet colors={colors} />;
  };


const HairColor = () => {
  const [activeTab, setActiveTab] = useState('spring');
  let tabContent = null;

  if (activeTab === 'spring') {
    tabContent = <SpringColor />;
  } else if (activeTab === 'summer') {
    tabContent = <SummerColor />;
  } else if (activeTab === 'autumn') {
    tabContent = <AutumnColor />;
  } else if (activeTab === 'winter') {
    tabContent = <WinterColor />;
  }

  return <ColorTab activeTab={activeTab} setActiveTab={setActiveTab} tabContent={tabContent} />;
};

export default HairColor;