import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 관리하는 상태(state)
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken'); // 로그아웃 시 토큰 삭제
  };


  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  //검색페이지 링크이동
  const searchhandleClick = (searchValue) => {
    navigate(`/product/search/${searchValue}`);
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      searchhandleClick(searchValue); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  
//스타일
  const navbarStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 300px',
    margin: '0px',
    fontFamily: 'Noto Sans KR, sans-serif',
    position: 'relative',
    height: '90px',
    overflow: 'hidden',
  };

  const linkStyle = {
    fontSize: '15px',
    margin: '10px',
    color: '#272727',
    textDecoration: 'none',
  };

  const logoStyle = {
    width: '220px',
    // height: '40px',
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
  };
  
  const menuStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  };

  const inputStyle = {
    width: '240px',
    height: '44px',
    fontSize: '16px',
    padding: '0 20px',
    border: 'none',
    borderRadius: '50px 0 0 50px',
    backgroundColor: '#E9E9E9',
    '::placeholder': {color: '#dbdbdb',},
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="left-menu" style={menuStyle}>
        <Link to="/product/all" style={linkStyle}>카테고리</Link>
        <Link to="/introduce" style={linkStyle}>컬러놀이 소개</Link>
        <Link to="/test/upload" style={linkStyle}>퍼스널컬러 진단</Link>
        <Link to="/makeup/upload" style={linkStyle}>가상 메이크업</Link>
      </div>
      <div className="logo" style={logoStyle}>
        <Link to="/main"><img src="/image/nav/logo.svg" alt="Logo" /></Link>
      </div>
      <div className="right-menu" style={menuStyle}>
        {/* <Link to="/" style={linkStyle}>공지사항</Link> */}
        {isLoggedIn ? (
          <React.Fragment>
          <Link to="/mypage" style={linkStyle}>
            <img src="/image/nav/mypage.svg" alt="마이페이지" style={{padding:'0 10px'}}/> 
          </Link>
          <Link to="/login" style={linkStyle} onClick={handleLogout}>
            로그아웃
          </Link>
          </React.Fragment>
        ) : (
          <Link to="/login" style={linkStyle} onClick={handleLogin}>
            <img src="/image/nav/login.svg" alt="로그인" />
          </Link>
        )}
        <input type="text" style={inputStyle} value={searchValue} onChange={handleSearchInputChange} onKeyPress={handleOnKeyPress} placeholder="퍼스널컬러 진단하기"/>
        <div style={{padding: '0 10px 0 0',backgroundColor:'#e9e9e9', borderRadius:'0 50px 50px 0'}}>
        <img src="/image/nav/search.svg" alt="검색" style={{padding:'10px 0', cursor:'pointer'}} onClick={() => searchhandleClick(searchValue)} />
        </div>
      </div>
    </div>
  );
  };

export default NavigationBar;