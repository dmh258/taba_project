import React, { useState } from 'react';
import HairColor from './HairColor';
import LipsColor from './LipsColor';

const Tab = ({ activeTab, setActiveTab, tabContent }) => {

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '60px',
    borderBottom: '1px solid #dbdbdb',
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
          style={activeTab === 'hair' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'hair' ? 'active' : ''}
          onClick={() => setActiveTab('hair')}
        >
          머리카락
        </button>
        <button
          style={activeTab === 'lips' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'lips' ? 'active' : ''}
          onClick={() => setActiveTab('lips')}
        >
          입술
        </button>
      </div>
      <div>{tabContent}</div>
    </div>
  );
};



const PartsTab = () => {
  const [activeTab, setActiveTab] = useState('hair');

  let tabContent;
  if (activeTab === 'hair') {
    tabContent = <HairColor />;
  } else if (activeTab === 'lips') {
    tabContent = <LipsColor />;
  }

  return (
    <div style={{ display: 'flex', width: '660px', padding: '0px 10px',backgroundColor: '#ffffff'}}>
      <div>
        {/* <h1>탭으로 전환하기</h1> */}
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabContent={tabContent} />
      </div>
    </div>
  );
};


export default PartsTab;