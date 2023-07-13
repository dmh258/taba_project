import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';


//카테고리 메뉴바 생성
const ProductMenu = ({activeTab, setActiveTab, tabContent }) => {
  const [isSticky, setIsSticky] = useState(false);

  let selectedMenuText;
  if (activeTab === 'all') {
    selectedMenuText = '전체보기';
  } else if (activeTab === 'new') {
    selectedMenuText = '신상품';
  } else if (activeTab === 'recommend') {
    selectedMenuText = '추천상품';
  } else if (activeTab === 'top') {
    selectedMenuText = '상의';
  } else if (activeTab === 'lips') {
    selectedMenuText = '립메이크업';
  }else if (activeTab === 'eyes') {
    selectedMenuText = '아이메이크업';
  }else if (activeTab === 'face') {
    selectedMenuText = '페이스메이크업';
  }

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const scrollThreshold = 100; // 일정 스크롤 위치 이상일 때 메뉴바 위치 변경

    setIsSticky(scrollPosition > 100);
  };


  //style
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    // margin:'0 100px 0 0',
    width:'250px',
    border: '1px solid #dbdbdb',
    borderBottom: 'none',
  };

  const buttonStyle = {
    padding: '20px 0px 20px 28px',
    width: '100%',
    height: '60px',
    border: 'none',
    borderBottom: '1px solid #dbdbdb',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'left',
  };

  const activeButtonStyle = {
    ...buttonStyle,
    color: '#D01C59',
  };

  const stickyDivStyle = {
    position: isSticky ? 'fixed' : 'static',
    top: '20px',
    zIndex: 0,
    backgroundColor: '#ffffff',
    width: '250px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '24px',
    transition: 'height 0.3s ease', // 애니메이션 효과 추가
    height: isSticky ? '60px' : 'auto', // 스티키 상태일 때 높이를 설정
  };

  return (
    <div style={{}}>
      <div style={stickyDivStyle}>
        <div style={{display:'flex', width:'250px',textAlign: 'left'}}>
        {selectedMenuText && `${selectedMenuText}`}
        </div>
      
      <div style={formStyle}>
        <Link to="/product/all">
        <button
          style={activeTab === 'all' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          전체보기
        </button>
        </Link>
        <Link to="/product/new">
        <button
          style={activeTab === 'new' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'new' ? 'active' : ''}
          onClick={() => setActiveTab('new')}
        >
          신상품
        </button>
        </Link>
        <Link to="/product/recommend">
        <button
          style={activeTab === 'recommend' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'recommend' ? 'active' : ''}
          onClick={() => setActiveTab('recommend')}
        >
          추천상품
        </button>
        </Link>
        <Link to="/product/top">
        <button
          style={activeTab === 'top' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'top' ? 'active' : ''}
          onClick={() => setActiveTab('top')}
        >
          상의
        </button>
        </Link>
        <Link to="/product/face">
        <button
          style={activeTab === 'face' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'face' ? 'active' : ''}
          onClick={() => setActiveTab('face')}
        >
          페이스메이크업
        </button>
        </Link>
        <Link to="/product/eyes">
        <button
          style={activeTab === 'eyes' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'eyes' ? 'active' : ''}
          onClick={() => setActiveTab('eyes')}
        >
          아이메이크업
        </button>
        </Link>
        <Link to="/product/lips">
        <button
          style={activeTab === 'lips' ? activeButtonStyle : buttonStyle}
          className={activeTab === 'lips' ? 'active' : ''}
          onClick={() => setActiveTab('lips')}
        >
          립메이크업
        </button>
        </Link>
      </div>
      <div>{tabContent}</div>
    </div>
    </div>
  );
};

export default ProductMenu;

