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
    const colors = ['#D68A70', '#9C5F4C', '#FE8F7E', '#E35C4D', '#F45E46', '#EF705F', '#D76F66', '#E05A61', '#E23D29', '#E12523', '#C0332A', '#EC5F32', '#E1573B', '#EC7F6A', '#EB3728'];
  
    return <ColorSet colors={colors} />;
  };
const SummerColor = () => {
    const colors = ['#DDB7B6', '#E099A7', '#F09DB9', '#E58EB1', '#EB8DA7', '#ED7B94', '#EC708A', '#FF50AB', '#FF50AB', '#D5556C', '#A42327', '#FB919F', '#E9A3A5', '#EA8DA2', '#D25785'];
  
    return <ColorSet colors={colors} />;
  };
const AutumnColor = () => {
  const colors = ['#CC9883', '#D08778', '#EC958B', '#C8756D', '#C4775D', '#B96952', '#9F3E2D', '#A0463B', '#D85E5B', '#9F4753', '#B6424B', '#C94540', '#BE2E26', '#D61D25', '#943229'];

  return <ColorSet colors={colors} />;
};
const WinterColor = () => {
    const colors = ['#951516', '#C52551', '#DB3E85', '#CF2271', '#DC3A75', '#BA2157', '#8F1A47', '#AB3A72', '#87326D', '#5D1449', '#61374D', '#34102A', '#6F2526', '#5B2824', '#512121'];
  
    return <ColorSet colors={colors} />;
  };


const LipsColor = () => {
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

export default LipsColor;