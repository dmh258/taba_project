import React, { useState, useEffect } from "react";
import YoutubePlayer from '../Tools/YoutubePlayer';
import ProductList from '../Product/ProductList_test';

import { Link } from 'react-router-dom';

const Test1_Spring = () => {
    const [userName, setUserName] = useState('');

    //서버에서 사용자 닉네임받기
    useEffect(() => {
        fetchUserNameFromServer().then((name) => {
          setUserName(name);
        }).catch((error) => {
          console.log(error);
        });
      }, []);
    
      const fetchUserNameFromServer = () => {
        // 서버 API 호출하여 사용자 이름 가져오기
        return fetch('/api/user')
          .then((response) => response.json())
          .then((data) => data.name);
      };


    //style
    const containerStyle ={
        padding:'60px 390px',
        margin:'0',
    };

    const mid1Style = {
        display:'flex',
        fontSize: '24px',
        color: '#272727',
        margin: '40px 0',
    };

    const mid2Style = {
        display:'flex',
        justifyContent:'center',
        alignText:'center',
        fontSize: '18px',
        color: '#272727',
        margin: '10px 0',
        width:'500px',
    };

    const mid3Style = {
        display:'flex',
        justifyContent:'center',
        alignText:'center',
        textAlign:'center',
        fontSize: '18px',
        color: '#272727',
        margin: '0',
        width:'500px',
    };

    const titleStyle = {
        fontSize: '24px',
        margin: '10px 0',
        display:'flex',
        flexDirection:'column',
    };

    const subtitleStyle = {
        fontSize: '15px',
        color: '#666666',
        margin: '0',
    };

    
      const linkStyle = {
        textDecoration: 'none',
      };

      const buttonStyle = {
        display:'flex',
        padding:'0px',
        margin: '20px 0 10px',
        border: 'none',
        backgroundColor: 'transparent',
      };

    return (
        <div>
            <div style={{backgroundImage: `url('/image/test/test1-banner.png')`,}}>
            <div className='header' style={{paddign:'0 300px'}}>
                <div style={{height:'600px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: '50px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold'}}>봄 웜톤</p>
                </div>
            </div>
            </div>
            <div>
            <div className='explain' style={containerStyle}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <p style={mid2Style}>'{userName}'님의 퍼스널컬러 진단 결과</p>
                <p style={mid3Style}>새로운 시작과 활력이 가득한 봄!</p>
                <p style={mid3Style}>밝고 생기 넘치는 컬러로 당신의 얼굴을 환하게 빛내며 자연스러운 매력을 강조해 드립니다.</p>
                <p style={mid3Style}>봄의 따뜻한 햇살을 담은 컬러로 여러분의 스타일을 더욱 돋보이게 해보세요.</p>
                <p style={{ fontSize: '36px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold', padding:'40px 0 20px' }}>봄 웜톤</p>
                <img src='/image/test/color-setting.svg' style={buttonStyle}/>
                <img src='/image/test/sharing.svg' style={buttonStyle}/>
                </div>
            </div>
            <div className='feature' style={containerStyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:'0 20px 0 0', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                    <p style={titleStyle}>봄 웜톤의 특징</p>
                    <p style={mid2Style}>봄의 이미지를 가진 퍼스널 컬러는 고명도와 고채도의 노란기 있는 밝은 색이 주를 이루며 전체적으로 화사한 분위기가 떠오른다. </p>
                    <p style={mid2Style}>봄 웜톤에 속하는 사람들은 카멜색, 복숭아색, 금색 계열이 잘 어울리고 어둡고 탁한 컬러는 잘 맞지 않는다.</p>
                    <div style={{backgroundColor:'cammel', width:'20px', height:'20px'}} />
                </div>
                <div style={{padding:'0 0 0 20px'}}>
                    <img src='/image/test/mid-img.png' />
                </div>
                </div>
            </div>
            </div>
            <img src='/image/test/decoBar.png' style={{width:'100%'}}/>
            <div className='items' style={containerStyle}>
                <div>
                <p style={titleStyle}>봄 웜톤을 위한 추천상품</p>
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                    <ProductList
                        id= '1101'
                        image= '/image/test/test1/1101.png'
                        name= 'ZARA 로맨틱 크롭 블라우스 - 크림'
                        price= '55900'
                    />
                    <ProductList
                        id= '1105'
                        image= '/image/test/test1/1105.png'
                        name= '여성) 립 웨이브 가디건 '
                        price= '19900'
                    />
                    <ProductList
                        id= '1200'
                        image= '/image/test/test1/1200.png'
                        name= '크리니크 치크 팝 - 멜론팝'
                        price= '33000'
                    />
                    <ProductList
                        id= '1203'
                        image= '/image/test/test1/1203.png'
                        name= '무지개맨션 피팅 블러쉬 04바이브 '
                        price= '14400'
                    />
                    <ProductList
                        id= '1300'
                        image= '/image/test/test1/1300.png'
                        name= '웨이크메이크 소프트 블러링 아이팔레트 - 소다 코랄 블러링'
                        price= '34000'
                    />
                    <ProductList
                        id= '1301'
                        image= '/image/test/test1/1301.png'
                        name= '클리오 프로 아이 팔레트 - 2호 브라운슈'
                        price= '34000'
                    />
                    <ProductList
                        id= '1400'
                        image= '/image/test/test1/1400.png'
                        name= '페리페라 잉크무드 매트스틱- 14호 코랄쭈고'
                        price= '14000'
                    />
                    <ProductList
                        id= '1401'
                        image= '/image/test/test1/1401.png'
                        name= '입생로랑 루쥬 볼립떼 샤인 립스틱 -45호'
                        price= '52000'
                    />
                </div>
            </div>
            <div style={{backgroundColor:'#4EB983'}}>
            <div className='youtube' style={containerStyle}>
                <div>
                <p style={titleStyle}>봄 웜톤 스타일링 팁</p>
                </div>
                <a href='https://www.youtube.com/playlist?list=PLUCU-wCND3_2GERGaDmF9GsSixJ09DuKe' style={linkStyle} target="_blank">
                <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <p style={subtitleStyle}>더보기</p>
                    <img src='/image/test/chevron-right.svg' style={{margin:'0'}}/>
                </div>
                </a>
                <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <YoutubePlayer
                    videoId="6o6J8agjGFU"
                    title="🔍퍼스널컬러로 알아보는 나에게 딱 맞는 코디법 - 봄 웜톤편🌸퍼스널컬러의 중요성, 베스트컬러, 워스트컬러, 봄라이트, 봄트루, 봄브라이트"
                    channel="룩쏘굿"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="YGnuInuofaw"
                    title="봄라이트!봄브라이트!톤의 완벽한 봄패션🌷봄 & 간절기 데일리룩✔️메이크업✔️헤어컬러✔️"
                    channel="다현쌤"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="TYMrszy5zxQ"
                    title="봄 브라이트에 대한 모든 것! (feat. 나연 님)"
                    channel="컬러요정, 원더은아"
                />
                </div>
            </div>
            </div>
            </div>
            <div style={containerStyle}>
                <Link to='/test/upload' style={linkStyle}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'20px 0'}}>
                    <img src='/image/test/retest.svg' />
                    </div>
                </Link>
            </div>
        </div>
        
    );
};
export default Test1_Spring;