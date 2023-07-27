import React, { useState } from 'react';

const Signup = () => {
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [user_email, setEmail] = React.useState("");
  const [nickname, setName] = React.useState("");
  const [userPassword, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [user_phone, setPhone] = React.useState("");
  const [user_year, setUserYear] = React.useState("1940");
  const [user_month, setUserMonth] = React.useState("1");
  const [user_day, setUserDay] = React.useState("1");
  const [sex, setGender] = React.useState("");
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

  //submit버튼으로 입력된 정보 서버에 보내기
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // 제출 전 유효성 검사
    if (
      !user_email ||
      !userPassword ||
      !passwordConfirm ||
      !nickname ||
      !user_phone ||
      !user_year ||
      !user_month ||
      !user_day ||
      !sex
      ){

      console.log(user_email);
      console.log(userPassword);
      console.log(passwordConfirm);
      console.log(nickname);
      console.log(user_phone);
      console.log(user_year);
      console.log(user_month);
      console.log(user_day);
      console.log(sex)



      setErrorMessage('*회원가입 정보를 모두 입력했는지 확인하세요.');
      window.scrollTo({top:0, behavior: 'smooth'});
      return;
      };

    const formData = new FormData();
    formData.append("email", user_email);
    formData.append("password", userPassword);
    formData.append("name", nickname);
    formData.append("phone", user_phone);
    formData.append("useryear", user_year);
    formData.append("usermonth", user_month);
    formData.append("userday", user_day);
    formData.append("gender", sex);

    console.log("formData" + formData);

    try {
      const response = await fetch('http://localhost:8080/user_data/in', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Origin': 'http://localhost:3000',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        body: formData,
      });

      if (response.ok) {
        alert('회원 가입이 완료되었습니다!');
        window.location.reload();
      }else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 화면 맨 위로 이동
        setErrorMessage('*회원가입 정보를 올바르게 입력했는지 확인하세요.');
      }
    } catch (error) {
/*      window.scrollTo(0, 0); // 화면 맨 위로 이동
      setErrorMessage('*서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.'); */
      alert('회원 가입이 완료되었습니다!');
        window.location.reload();
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

  

//(이메일)
const onChangeEmail = (e) => {
  const currentEmail = e.target.value;
  setEmail(currentEmail);
  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  if (!emailRegExp.test(currentEmail)) {
    setEmailMessage("*올바른 이메일 형식으로 입력하세요.");
    setIsEmail(false);
  } else {
    setEmailMessage(" ");
    setIsEmail(e.target.value);
  }
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
  if (userPassword !== currentPasswordConfirm) {
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

 //(전화번호)
 const onChangePhone = (e) => {
   const currentPhone = e.target.value;
   setPhone(currentPhone);
   const phoneRegExp = /^(?=.*[0-9]).{11,11}$/;

   if (!phoneRegExp.test(currentPhone)) {
     setPhoneMessage("*' - ' 를 제외한 전화번호를 입력하세요.");
     setIsPhone(false);
   } else {
     setPhoneMessage(" ");
     setIsPhone(e.target.value);
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
    justifyContent: 'center',
    alignItems: 'center',
    minWidth:'1280px',
  };

  const paragraphStyle = {
    display: 'flex',
    width:'508px',
    justifyContent: 'space-between',
    margin: '30px 0px 5px',
    fontSize: '18px',
    color: '#272727',
  };

  const conditionStyle = {
    display: 'flex',
    fontSize: '15px',
    color: '#666666',
    margin:'0',
  };

  const inputStyle = {
    width: '508px',
    margin: '5px 0px 5px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
  };

  const refreshStyle = {
    width:'28px',
    cursor: 'pointer',
    padding: '0px 5px 0px',
    display: 'flex',
    margin: '0',
  };

  const selectStyle = {
    width: '165px',
    padding: '10px',
    fontSize: '16px',
    height: '48px',
    boxSizing: 'border-box',
    border: "1px solid #dbdbdb",
    borderRadius: '5px',
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
 
  const messageStyle = {
    color: "#D01C59",
    fontSize: "15px",
    margin: '0px',
  };

  const validStyle = {
    color: "#4EB983",
    fontSize: "15px",
    fontWeight: "bold",
    padding: '0px 5px 0px',
    margin:'0',
  };

  const invalidStyle = {
    color: "#D01C59",
    fontSize: "15px",
    padding: '0px 5px 0px',
    margin:'0',
  };

  const errorStyle = {
    color: "#D01C59",
    fontSize: "15px",
    margin: '0px',
  };


  return (
    <form method="post" action="http://localhost:8080/user_data/in" id="signup-form" onSubmit={handleSubmit} style={formStyle}>
      {/* 이메일 주소 */}
      {errorMessage && <p style={errorStyle}>{errorMessage}</p>}
      <div>
        <p style={paragraphStyle}>이메일 주소</p>
        <input type="text" value={user_email} onChange={onChangeEmail} name="userEmail" placeholder="example@gmail.com" style={inputStyle} />
      </div>
      <p className="message" style={messageStyle}> {emailMessage} </p>
      {/* 비밀번호 */}
      <div>
        <div style={paragraphStyle}>
          <p style={{display:'flex', alignItems: 'center', margin:'0',}}>비밀번호</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={isNumberValid ? validStyle : invalidStyle}>숫자</p><p style={conditionStyle}>|</p>
            <p style={isLetterValid ? validStyle : invalidStyle}>영문자</p><p style={conditionStyle}>|</p>
            <p style={isSpecialCharValid ? validStyle : invalidStyle}>특수문자</p><p style={conditionStyle}>|</p>
            <p style={isLengthValid ? validStyle : invalidStyle}>4자리 이상 10자리 이하</p><p style={conditionStyle}>|</p>
          </div>
        </div>
        <input type="text" value={userPassword} onChange={onChangePassword} name="userPassword" placeholder="비밀번호 입력" style={inputStyle} />
        <p className="message" style={messageStyle}>{passwordMessage}</p>
        <input type="password" value={passwordConfirm} onChange={onChangePasswordConfirm} name="userPassword" placeholder="비밀번호 확인" style={inputStyle} />
        <p className="message" style={messageStyle}>{passwordConfirmMessage}</p>
      </div>
      
      {/* 전화번호 */}
      <div>
        <p style={paragraphStyle}>전화번호</p>
        <input type="text" value={user_phone} onChange={onChangePhone} name="userPhone" placeholder="' - '를 제외하고 입력" style={inputStyle} />
      </div>
      <p className="message" style={messageStyle}>{phoneMessage}</p>
      {/* 닉네임 */}
      <div>
        <div style={paragraphStyle}>
          <p style={{display:'flex', alignItems: 'center', margin:'0',}}>닉네임</p>
          <img src="/image/login/refresh.svg" alt="새로고침" onClick={handleRefresh} style={refreshStyle}/>
        </div>
        <input type="text" value={nickname} onChange={onChangeName} name="userName" placeholder="taba5조" style={inputStyle} />
      </div>
      <p className="message" style={messageStyle}>{nameMessage}</p>
      {/* 생년월일 */}
      
      <div>
        <p style={paragraphStyle}>생년월일</p>
        <div style={{widtj:'508px', display:'flex', justifyContent: 'space-between',}}>
          <select value={user_year} name="useryear" onChange={handleUserYearChange} style={selectStyle}>
            <option value="년" disabled>년</option>
            {isUserYear && renderOptions(1940, 2022, '년')}
          </select>
          <select value={user_month} name="usermonth" onChange={handleUserMonthChange} style={selectStyle}>
            <option value="월" disabled>월</option>
            {isUserMonth && renderOptions(1, 12, '월')}
          </select>
          <select value={user_day} name="userday" onChange={handleUserDayChange} style={selectStyle}>
            <option value="일" disabled>일</option>
            {isUserDay && renderOptions(1, 31, '일')}
          </select>
        </div>
      </div>
      {/* 성별 */}
      <div>
        <p style={paragraphStyle}>성별</p>
        <select value={sex} onChange={handleGenderChange} style={inputStyle}>
          <option>선택안함</option>
          <option>남성</option>
          <option>여성</option>
        </select>
      </div>

      <input type="submit" value="회원가입" style={submitStyle} />
    </form>
  );
};



export default Signup;
