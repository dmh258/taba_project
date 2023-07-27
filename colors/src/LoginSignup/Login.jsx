import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import UserInfo from "../Mypage/UserInfo";

const Login = () => {
  const [ErrorMessage, setErrorMessage] = React.useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [user_num , setUserNum] = useState("");

  // 컴포넌트가 마운트 될 때 로컬 스토리지에 저장된 토큰을 가져옵니다.
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('accessToken');

    /*    const json = {
          "email" : userEmail,
          "password" : userPassword,
        };
      */
    const formData = new FormData();
//    formData.append("key",JSON.stringify(userEmail, userPassword));  //key 지정하기
    formData.append("email", userEmail);
    formData.append("password", userPassword);

    const requestBody = {
      email: userEmail,
      password: userPassword,
    };

    console.log("email type ", typeof userEmail);
    console.log("password ", typeof user_password);
    console.log("FormData:", formData);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    try {
      const response = await fetch('http://localhost:8080/user_data/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 데이터 형식을 JSON으로 지정
          'Authorization': `Bearer ${token}`, // 헤더에 토큰 추가
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        body: JSON.stringify(requestBody), // 데이터를 JSON 문자열로 변환하여 전송
      });

      if (response.ok) {
        console.log("response : ", response);
        const data = await response.json();  // 여기서 발생할 수 있는 오류를 잡기 위해, 이 부분을 try-catch 블록 안에 넣었습니다.
        console.log("data : ", data);
        const token = data.token; // 서버에서 받은 토큰
        console.log("token : ", token);
        const user_num = data.user_num;

        const user_password  = data.userPassword ;
        const nickname  = data.nickname ;
        const sex  = data.sex ;
        const user_phone  = data.user_phone ;
        const user_year  = data.user_year ;
        const user_month  = data.user_month ;
        const user_day  = data.user_day ;
        const user_token  = data.user_token ;
        setAccessToken(token);
        setUserEmail(data.email);

        console.log("data" + data);
        console.log("user_password" + user_password);


        localStorage.setItem('user_num', user_num);
        localStorage.setItem('user_password', user_password);
        localStorage.setItem('nickname', nickname);
        localStorage.setItem('sex', sex);
        localStorage.setItem('user_phone', user_phone);
        localStorage.setItem('user_email', userEmail);
        localStorage.setItem('user_year', user_year);
        localStorage.setItem('user_month', user_month);
        localStorage.setItem('user_day', user_day);
        localStorage.setItem('user_token', user_token);

        setAccessToken(token); // 토큰 상태 업데이트
        setUserEmail(data.email);
        setUserNum(user_num);

        localStorage.setItem('accessToken', token);

        window.location.href = 'http://localhost:3000';
      } else {
        // 서버 응답이 오류인 경우 오류 메시지 설정
        setErrorMessage('로그인 정보가 일치하지 않습니다. 다시 로그인 정보를 입력하세요.');
      }
    } catch (error) {
      console.log("error", error);
      // 네트워크 오류 등 예외 발생 시 오류 메시지 설정
      setErrorMessage('111111서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.');
    }
  };

  // 로그인 상태 유지 등의 기능을 구현할 때 토큰을 사용할 수 있습니다.
  // 예시: 토큰이 있는 경우에만 로그인 상태 유지 기능을 활성화
  const isLoggedIn = !!accessToken;

  // 로그인 후에는 토큰을 HTTP 헤더에 포함시켜 요청을 보낼 수 있습니다.
  // 예시: 'Authorization' 헤더에 'Bearer' 스키마로 토큰 전달
  const handleProtectedRequest = async () => {
    try {
      const response = await fetch('http://localhost:8080/protected/resource', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      // 처리 결과 확인
      if (response.ok) {
        // 성공적으로 요청을 처리한 경우
        // ...
      } else {
        // 토큰이 만료되었거나 유효하지 않은 경우 등의 처리
        // ...
      }
    } catch (error) {
      // 네트워크 오류 등 예외 발생 시 처리
      // ...
    }
  };


  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth:'1280px',
  };

  const inputStyle = {
    width: '508px',
    margin: '10px 0px 5px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
    letterSpacing: '1%',
  };

  const formStyle2 = {
    width:'508px',
    padding: '5px 0px 0px',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const submitStyle = {
    width:'508px',
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
      <div>
        {isLoggedIn ? (
            <div>
              <p>로그인 상태 유지 중</p>
              <button onClick={handleProtectedRequest}>보호된 리소스 요청</button>
              {/* 기타 로그인 상태 유지 관련 기능 */}
            </div>
        ) : (
            <form method="post" action="http://localhost:8080/user_data/check" id="login-form" onSubmit={handleSubmit} >
              <div style={formStyle}>
                <input type="text" name="userEmail" placeholder="example@gmail.com" style={inputStyle} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <input type="password" name="userPassword" placeholder="비밀번호 입력" style={inputStyle} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                {ErrorMessage && <p style={errorStyle}>{ErrorMessage}</p>}
                
                <div style={formStyle2}>
                  <label htmlFor="remember-check">
                    <input type="checkbox" id="remember-check" /> 로그인 상태 유지
                  </label>
                  <a href="#" style={{textDecoration: 'none',color: '#272727',}}>아이디/비밀번호 찾기</a>
                </div>
                <input type="submit" value="로그인" style={submitStyle} />
                
              </div>
            </form>
        )}
      </div>
  );
};

export default Login;