import React, { useState } from 'react';

const Login = () => {
  const [ErrorMessage, setErrorMessage] = React.useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");   

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    
    const json = {
      "email" : userEmail,
      "password" : userPassword,
    };
    const formData = new FormData();
    formData.append("key",JSON.stringify(userEmail, userPassword));  //key 지정하기
    console.log(formData.keys(0));
    try {
      const response = await fetch('서버의url', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.href = 'https://www.naver.com/';
      } else {
        // 서버 응답이 오류인 경우 오류 메시지 설정
        setErrorMessage('로그인 정보가 일치하지 않습니다. 다시 로그인 정보를 입력하세요.');
      }
    } catch (error) {
      // 네트워크 오류 등 예외 발생 시 오류 메시지 설정
      setErrorMessage('서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.');
    }
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px auto',
  };

  const inputStyle = {
    width: '100%',
    margin: '10px 0px 5px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
    letterSpacing: '1%',
  };

  const linkStyle = {
    padding: '5px 0px 0px',
    display:'flex', 
    justifyContent: 'space-between',
    color: '#272727',
    textDecoration: 'none',
  };
  
  const submitStyle = {
    cursor: 'pointer',
    fontSize: '16px',
    backgroundColor: '#F5C359',
    marginTop: '60px',
    padding: '13px',
    borderRadius: '50px',
  };

  const errorStyle = {
    color: "#D01C59",
    fontSize: "15px",
    margin: '0px',
  };

  return (
    <form method="post" action="서버의url" id="login-form" onSubmit={handleSubmit} style={formStyle}>
      <input type="text" name="userEmail" placeholder="example@gmail.com" style={inputStyle} value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}/>
      <input type="password" name="userPassword" placeholder="비밀번호 입력" style={inputStyle} value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)} />
      {ErrorMessage && <p style={errorStyle}>{ErrorMessage}</p>}
      <div style={linkStyle}>
        <label htmlFor="remember-check">
          <input type="checkbox" id="remember-check" /> 로그인 상태 유지
        </label>
        <a href="#" style={linkStyle}>아이디/비밀번호 찾기</a>
      </div>
      <input type="submit" value="로그인" style={submitStyle} />
    </form>
  );
};

export default Login;