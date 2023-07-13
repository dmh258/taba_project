import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '160px 0px 0px 0px',
    padding: '0px',
    textAlign: 'center',
    position: 'relative',
    borderTop: '1px solid #dbdbdb',
    fontSize: '13px',
  };

  const ContainerStyle = {
    padding: '0px 300px',
    margin: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 304px 0px',
  };

  const topContainerStyle = {
    display: 'flex',
  };

  const leftContainerStyle = {
    flex: 1,
    textAlign: 'left',
  };

  const rightContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'right',
    height: '100%', 
  };

  const linkStyle = {
    padding: '5px',
    color: '#272727',
    textDecoration: 'none',
    lineHeight: '13px',
    fontSize: '13px',
  };

  const paragraphStyle = {
    margin: '0px',
    padding: '5px',
    color: '#666666',
    lineHeight: '15px',
    fontSize: '13px',
  };


  return (
    <footer className="footer" style={footerStyle}>
        <div className="top-container" style={ContainerStyle}>
            <div className="top-left" style={topContainerStyle}>
                <a href="#" style={linkStyle}>개인정보처리방침</a>
                <a href="#" style={linkStyle}>이용약관</a>
                <a href="#" style={linkStyle}>프로젝트 소개</a>
            </div>
            <div className="top-right" style={topContainerStyle}>
                <a href="#" style={linkStyle}>CCCR</a>
                <a href="#" style={linkStyle}>TABA 2기</a>
            </div>
        </div>
      
        <div className="bottom-container" style={ContainerStyle}> 
              <div className="left-container" style={leftContainerStyle}>
                  <h3 style={paragraphStyle}>(주)내일해5조</h3>
                  <p style={paragraphStyle}>프로젝트명:내일해5조 컬러놀이 퍼스널컬러진단 서비스</p>
                  <p style={paragraphStyle}>경기 용인시 수지구 죽전로 152(죽전동)ICT관 b103호</p>
                  <p style={paragraphStyle}>통신판매업신고:2023-taba프로젝트-5 | E-mail : taba5@tmax.com</p>
                  <div style={{ height: '10px' }}></div>
                  <p style={paragraphStyle}>소비자피해보상</p>
                  <p style={paragraphStyle}>본 제품은 공정거래위원회 고시 소비자 분쟁해결기준에 의거 교환 또는 보상받을 수 있습니다.</p>
                  <p style={paragraphStyle}>copyright (C)2023TABA2기PROJECT, PERSONALCOLORISREAL.</p>
              </div>
              <div className="right-container" style={rightContainerStyle}>
                  <h4 href="#" style={linkStyle}>공지사항</h4>
                  <h4 href="#" style={linkStyle}>FQA</h4>
                  <h4 href="#" style={linkStyle}>1:1 문의 바로가기</h4>
                  <h4 href="#" style={linkStyle}>컬러놀이APP 다운로드</h4>
              </div>
        </div>
    </footer>
  );
};

export default Footer;
