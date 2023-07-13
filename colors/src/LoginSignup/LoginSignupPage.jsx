import React, { useState } from 'react';
import Login from "./Login";
import Signup from "./Signup";

const Tab = ({ activeTab, setActiveTab, tabContent }) => {

  const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // 가운데 정렬
    
  };

  const buttonStyle = {
    margin: '60px 0px 20px',
    padding: '0px 80px 20px',
    border: 'none',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Noto Sans KR, sans-serif',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    color: '#272727',
    fontWeight: 'bold',
    borderBottom: '2px solid #666666',
    transition: 'color 0.3s, border-color 0.3s',
  };
  const inactiveButtonStyle = {
    ...buttonStyle,
    color: '#666666',
    fontWeight: 'normal',
    borderBottom: '2px solid transparent',
    transition: 'color 0.3s, border-color 0.3s',
  };

  return (
    <div>
      <div style={formStyle}>
        <button
          style={activeTab === 'login' ? activeButtonStyle : inactiveButtonStyle}
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          로그인
        </button>
        <button
          style={activeTab === 'signup' ? activeButtonStyle : inactiveButtonStyle}
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          회원가입
        </button>
      </div>
      <div>{tabContent}</div>
    </div>
  );
};



const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');

  let tabContent;
  if (activeTab === 'login') {
    tabContent = <Login />;
  } else if (activeTab === 'signup') {
    tabContent = <Signup />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '507px', justifyContent: 'center'}}>
        {/* <h1>탭으로 전환하기</h1> */}
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabContent={tabContent} />
      </div>
    </div>
  );
};


export default LoginSignup;