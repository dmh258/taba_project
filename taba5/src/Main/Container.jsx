import React, { useState } from 'react';
import ProductList from '../Product/ProductList_main';
import YoutubePlayer from '../Tools/YoutubePlayer';
import { Link } from 'react-router-dom';

const Container = () => {

  // style
  const titleStyle = {
    fontSize: '24px',
    margin: '10px 0 0',
  };

  const subtitleStyle = {
    fontSize: '15px',
    color: '#666666',
    margin: '10px 0',
  };

  const linkStyle = {
    textDecoration: 'none',
  };

  const buttonStyle = {
    display:'flex',
    padding:'0px',
    margin: '10px 0',
    border: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <div>
    <div style={{ padding: '0 390px' }}>
      <Link to='/makeup/upload' style={linkStyle}>
        <div style={{margin: '80px 0'}}>
        <div style={{height: '200px', backgroundImage: `url('/image/main/mid-banner1.png')`,backgroundSize: 'cover',}}>
          <div style={{ display: 'flex', flexDirection: 'column',  padding: '50px 100px' }}>
            <p style={{ fontSize: '18px', color: '#ffffff' }}>어울리는 메이크업을 체험하자!</p>
            <p style={{ fontSize: '14px', color: '#ffffff' }}>지금 바로 체험하세요</p>
          </div>
        </div>
        </div>
      </Link>
        <div style={{margin: '80px 0'}}>
            <div style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <p style={titleStyle}>신상품</p>
            </div>
            <Link to='/product/new' style={linkStyle}>
            <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p style={subtitleStyle}>더보기</p>
                <button style={buttonStyle}>
                <img src='/image/main/chevron-right.svg' />
                </button>
            </div>
            </Link>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
              <ProductList
                id= '1100'
                image= '/image/database/1/1100.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '1200'
                image= '/image/database/1/1200.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '1300'
                image= '/image/database/1/1300.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '1400'
                image= '/image/database/1/1400.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
            </div>
        </div>
        <div style={{margin: '40px 0 0'}}>
            <div style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <p style={titleStyle}>추천상품</p>
            </div>
            <Link to='/product/recommend' style={linkStyle}>
            <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p style={subtitleStyle}>더보기</p>
                <button style={buttonStyle}>
                <img src='/image/main/chevron-right.svg' />
                </button>
            </div>
            </Link>
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
              <ProductList
                id= '2100'
                image= '/image/database/2/2100.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '2200'
                image= '/image/database/2/2200.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '2300'
                image= '/image/database/2/2300.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
              <ProductList
                id= '2300'
                image= '/image/database/2/2400.png'
                name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                price= '18000'
              />
            </div>
        </div>
    </div>
    <img src='/image/main/decoBar2.png' style={{ width: '100%',}}/>
    <div style={{ padding: '0 390px' }}>
        <div style={{margin: '80px 0',  display: 'flex', justifyContent: 'space-between'}}>
            <div style={{height: '280px', width: '540px', backgroundImage: `url('/image/main/mid-banner2.png')`,backgroundSize: 'cover',}}>
                <div style={{display:'flex', flexDirection: 'column', padding: '80px 40px'}}>
                <p style={{fontSize:'18px', color:'#ffffff'}}>퍼스널컬러 진단하고 나와 어울리는 컬러 찾기</p>
                <Link to='/test/upload' style={linkStyle}>
                <button style={buttonStyle}>
                <img src='/image/main/test-button-red-small.svg' />
                </button>
                </Link>
                </div>
            </div>
            <div style={{height: '280px', width: '540px', backgroundImage: `url('/image/main/mid-banner3.png')`,backgroundSize: 'cover',}}>
                <div style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '80px 40px'}}>
                <p style={{fontSize:'18px', color:'#ffffff'}}>메이크업 시뮬레이션</p>
                <Link to='/makeup/upload' style={linkStyle}>
                <button style={buttonStyle}>
                <img src='/image/main/makeup-button-red-small.svg' />
                </button>
                </Link>
                </div>
            </div>
        </div>
        </div>
        <div style={{ padding: '40px 390px', margin: '60px 0',backgroundColor: '#F574C9'}}>
          <div>
            <div style={{display:'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <p style={titleStyle}>스타일링 추천 팁</p>
            </div>
              <a href='https://www.youtube.com/playlist?list=PLUCU-wCND3_30NbZzTu_9BRBbrfYyHpi0' style={linkStyle} target="_blank">
                <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p style={subtitleStyle}>더보기</p>
                <button style={buttonStyle}>
                <img src='/image/main/chevron-right.svg' />
                </button>
            </div>
            </a>
            <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <YoutubePlayer
                    videoId="KOw1FQBAsdI"
                    title="[ENG] 코덕이자 찐 퍼스널 컬러리스트가 직접 추천하는 메이크업! 웜톤&봄 라이트 주목, 매일 해도 예쁜 봄 라이트 메이크업의 정석. 이 컬러는 절대로 하지마세요!"
                    channel="Harper's BAZAAR Korea"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="_u5CqXronio"
                    title="가을웜톤 메이크업 왔댜! 갈웜 베베들 일루와바! 🥰 | 디얼빈 dearbeauty"
                    channel="디얼빈 dearbeen"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="lMPn9MsqSRo"
                    title="겨울 / 여름 브라이트 특집! 메이크업 방법 및 색조 추천까지! (feat. 아이린, 이유비, 현아)"
                    channel="컬러요정, 원더은아"
                />
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Container;
