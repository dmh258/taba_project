import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

//이메일, 전화번호 수정 불가/ 닉네임, 비밀번호, 생년월일, 성별 수정 가능

const UserInfo = () => {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일, 성별
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [useryear, setUserYear] = React.useState("");
  const [usermonth, setUserMonth] = React.useState("");
  const [userday, setUserDay] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

 // 입력오류메세지 상태 저장
 const [emailMessage, setEmailMessage] = React.useState("");
 const [passwordMessage, setPasswordMessage] = React.useState("");
 const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
 const [nameMessage, setNameMessage] = React.useState("");
 const [phoneMessage, setPhoneMessage] = React.useState("");

 // 유효성 검사
 const [isEmail, setIsEmail] = React.useState(false);
 const [isPassword, setIsPassword] = React.useState(false);
 const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
 const [isname, setIsName] = React.useState(false);
 const [isPhone, setIsPhone] = React.useState(false);
 const [isUserYear, setIsUserYear] = React.useState(true);
 const [isUserMonth, setIsUserMonth] = React.useState(true);
 const [isUserDay, setIsUserDay] = React.useState(true);

  // 서버에서 초기값 가져오기
  React.useEffect(() => {
    // 임시로 데이터를 사용하여 초기값 설정
      const data = {
        email: "example@email",
        name: "John Doe",
        password: "********",
        phone: "123-456-7890",
        useryear: "1990",
        usermonth: "01",
        userday: "01",
        gender: "남성",
      };

      setEmail(data.email);
      setName(data.name);
      setPassword(data.password);
      setPhone(data.phone);
      setUserYear(data.useryear);
      setUserMonth(data.usermonth);
      setUserDay(data.userday);
      setGender(data.gender);
    }, []);
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('서버의 초기값을 가져올 API 엔드포인트');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setEmail(data.email);
  //         setName(data.name);
  //         setName(data.password);
  //         setName(data.phone);
  //         setName(data.useryear);
  //         setName(data.usermonth);
  //         setName(data.userday);
  //         setName(data.gender);
  //       } else {
  //         console.log('*회원정보를 가져오는데 실패했습니다.');
          
  //       }
  //     } catch (error) {
  //       console.log('*서버에 연결할 수 없습니다.', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // 컴포넌트가 마운트될 때 한 번만 실행되도록 빈 배열([])을 useEffect의 의존성 배열로 전달

  //submit버튼으로 수정된 정보 서버에 보내기
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 제출 전 유효성 검사
    if (
      !email ||
      !password ||
      !passwordConfirm ||
      !name ||
      !phone ||
      !useryear ||
      !usermonth ||
      !userday ||
      !gender
      ) {
      setErrorMessage('*수정한 정보가 올바른지 확인해주세요.');
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
      };
    
    const json = {
      "email" : email,
      "password" : password,
      "name" : name,
      "phone" : phone,
      "useryear" : useryear,
      "usermonth" : usermonth,
      "userday" : userday,
      "gender" : gender,
    };
    const formData = new FormData();
    formData.append("key",JSON.stringify(email,password, name, phone, useryear, usermonth, userday, gender));  //key 지정하기
    //key설정하기
    console.log(formData.keys(0));
    try {
      const response = await fetch('서버의url', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('정보 수정이 완료되었습니다!');
        window.location.reload(); //로그인화면으로 이동
      } else {
        window.scrollTo({top:0, behavior: 'smooth'}); // 화면 맨 위로 이동
        setErrorMessage('*수정한 정보가 올바른지 확인해주세요.');
      }
    } catch (error) {
      window.scrollTo(0, 0); // 화면 맨 위로 이동
      setErrorMessage('*서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.');
    }
  };

  // 닉네임 생성
  const handleRefresh = () => {
    setName(generateRandomString(6)); // 닉네임 변경
  };

  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  //(비밀번호)
  const [isLetterValid, setIsLetterValid] = useState(false);
  const [isSpecialCharValid, setIsSpecialCharValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,10}$/;
  
    const isLetterValid = /(?=.*[a-zA-Z])/.test(currentPassword);
    const isSpecialCharValid = /(?=.*[!@#$%^*+=-])/.test(currentPassword);
    const isNumberValid = /(?=.*[0-9])/.test(currentPassword);
    const isLengthValid = /^.{4,10}$/.test(currentPassword);
    
    setIsLetterValid(isLetterValid);
    setIsSpecialCharValid(isSpecialCharValid);
    setIsNumberValid(isNumberValid);
    setIsLengthValid(isLengthValid);
    if (!currentPassword) {
      setPasswordMessage("*비밀번호를 입력하세요.");
      setIsPassword(false);
    } else if(setIsPassword(isLetterValid && isSpecialCharValid && isNumberValid && isLengthValid)){
      setPasswordMessage(" ");
      setIsPassword(e.target.value);
    }
  };
  //(비밀번호 확인)
const onChangePasswordConfirm = (e) => {
  const currentPasswordConfirm = e.target.value;
  setPasswordConfirm(currentPasswordConfirm);
  if (password !== currentPasswordConfirm) {
    setPasswordConfirmMessage("*비밀번호가 같지 않습니다.");
    setIsPasswordConfirm(false);
  } else {
    setPasswordConfirmMessage(" ");
    setIsPasswordConfirm(e.target.value);
  }
};

//(닉네임)
 const onChangeName = (e) => {
   const currentName = e.target.value;
   setName(currentName);
   if (!currentName) {
     setNameMessage("*2글자 이상 10글자 이하의 닉네임을 입력하세요.");
     setIsName(false);
   } else if (currentName.length < 2 || currentName.length > 10) {
     setNameMessage("*2글자 이상 10글자 이하의 닉네임을 입력하세요.");
     setIsName(false);
   } else {
     setNameMessage(" ");
     setIsName(e.target.value);
   }
 };

// 년, 월, 일 옵션 생성 함수
const renderOptions = (start, end, optionText) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    const value = String(i); // value 값을 문자열로 변환해야 합니다.
    const key = String(i); // key 속성에 직접 설정할 값
    options.push(
      <option value={value} key={key}>
        {i}{optionText}
      </option>
    );
  }
  return options;
};

//(생년월일)
const handleUserYearChange = (e) => {
  setUserYear(e.target.value); // 선택된 성별 값을 상태 업데이트 함수를 통해 변경
};
const handleUserMonthChange = (e) => {
  setUserMonth(e.target.value); // 선택된 성별 값을 상태 업데이트 함수를 통해 변경
};
const handleUserDayChange = (e) => {
  setUserDay(e.target.value); // 선택된 성별 값을 상태 업데이트 함수를 통해 변경
};

//(성별)
const handleGenderChange = (e) => {
  setGender(e.target.value); // 선택된 성별 값을 상태 업데이트 함수를 통해 변경
};

// STYLE
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px,',
    width:'507px',
  };

  const paragraphStyle = {
    display: 'flex',
    margin: '30px 0px 5px',
    fontSize: '18px',
    color: '#272727',
  };
  const paragraphStyle2 = {
    display: 'flex',
    margin: '30px 0px 5px',
    fontSize: '15px',
    color: '#666666',
  };

  const inputStyle = {
    width: '100%',
    margin: '5px 0px 5px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
  };

  const refreshStyle = {
    cursor: 'pointer',
    padding: '0px 5px 0px',
    display: 'flex',
    margin: '30px 0px 5px',
  };

  const submitStyle = {
    cursor: 'pointer',
    fontSize: '16px',
    backgroundColor: '#F5C359',
    marginTop: '60px',
    padding: '13px',
    borderRadius: '50px',
  };
 
  const inputcenterStyle = {
    width: '100%',
    margin: '5px 10px 2px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
  };


  const messageStyle = {
    color: "#D01C59",
    fontSize: "15px",
    margin: '0px',
  };

  const validStyle = {
    color: "#4EB983",
    fontSize: "15px",
    fontWeight: "bold",
    padding: '0px 5px 0px', margin: '30px 0px 5px',
  };

  const invalidStyle = {
    color: "#D01C59",
    fontSize: "15px",
    padding: '0px 5px 0px', margin: '30px 0px 5px',
  };

  const errorStyle = {
    color: "#D01C59",
    fontSize: "15px",
    margin: '0px',
  };


  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
    <form method="post" action="서버의url" id="signup-form" onSubmit={handleSubmit} style={formStyle}>
      {/* 이메일 주소 */}
      {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
      <div>
        <p style={paragraphStyle}>이메일 주소</p>
        <input type="text" value={email} name="userEmail" placeholder={email} style={inputStyle} readOnly/>
      </div>
      <p className="message" style={messageStyle}> {emailMessage} </p>
      {/* 비밀번호 */}
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={paragraphStyle}>비밀번호</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={isNumberValid ? validStyle : invalidStyle}>숫자</p><p style={paragraphStyle2}>|</p>
            <p style={isLetterValid ? validStyle : invalidStyle}>영문자</p><p style={paragraphStyle2}>|</p>
            <p style={isSpecialCharValid ? validStyle : invalidStyle}>특수문자</p><p style={paragraphStyle2}>|</p>
            <p style={isLengthValid ? validStyle : invalidStyle}>4자리 이상 10자리 이하</p><p style={paragraphStyle2}>|</p>
          </div>
        </div>
        <input type="text" value={password} onChange={onChangePassword} name="userPassword" placeholder="비밀번호 입력" style={inputStyle} />
        <p className="message" style={messageStyle}>{passwordMessage}</p>
        <input type="password" value={passwordConfirm} onChange={onChangePasswordConfirm} name="userPassword" placeholder="비밀번호 확인" style={inputStyle} />
        <p className="message" style={messageStyle}>{passwordConfirmMessage}</p>
      </div>
      
      {/* 전화번호 */}
      <div>
        <p style={paragraphStyle}>전화번호</p>
        <input type="text" value={phone} name="userPhone" placeholder={phone} style={inputStyle} readOnly/>
      </div>
      <p className="message" style={messageStyle}>{phoneMessage}</p>
      {/* 닉네임 */}
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <p style={paragraphStyle}>닉네임</p>
          <img src="/image/info/refresh.svg" alt="새로고침" onClick={handleRefresh} style={refreshStyle}/>
        </div>
        <input type="text" value={name} onChange={onChangeName} name="userName" placeholder="taba5조" style={inputStyle} />
      </div>
      <p className="message" style={messageStyle}>{nameMessage}</p>
      {/* 생년월일 */}
      <p style={paragraphStyle}>생년월일</p>
      <div style={{ display: 'flex' }}>
        <select value={useryear} name="useryear" onChange={handleUserYearChange} style={inputStyle}>
          <option value="년" disabled>년</option>
          {isUserYear && renderOptions(1940, 2022, '년')}
        </select>
        <select value={usermonth} name="usermonth" onChange={handleUserMonthChange} style={inputcenterStyle}>
          <option value="월" disabled>월</option>
          {isUserMonth && renderOptions(1, 12, '월')}
        </select>
        <select value={userday} name="userday" onChange={handleUserDayChange} style={inputStyle}>
          <option value="일" disabled>일</option>
          {isUserDay && renderOptions(1, 31, '일')}
        </select>
      </div>
      {/* 성별 */}
      <div>
        <p style={paragraphStyle}>성별</p>
        <select value={gender} onChange={handleGenderChange} style={inputStyle}>
          <option>선택안함</option>
          <option>남성</option>
          <option>여성</option>
        </select>
      </div>
      <input type="submit" value="회원정보 수정" style={submitStyle} />
    </form>
    </div>
  );
};



export default UserInfo;
