import React, { useState, useEffect } from "react";
import YoutubePlayer from '../Tools/YoutubePlayer';
import ProductList from '../Product/ProductList_test';

import { Link } from 'react-router-dom';

const Test3_Autumn = () => {
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
        margin: '10px 0',
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
            <div style={{backgroundImage: `url('/image/test/test3-banner.png')`,}}>
            <div className='header' style={{paddign:'0 300px'}}>
                <div style={{height:'600px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: '50px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold' }}>가을 웜톤</p>
                </div>
            </div>
            </div>
            <div>
            <div className='explain' style={containerStyle}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <p style={mid2Style}>'{userName}'님의 퍼스널컬러 진단 결과</p>
                <p style={mid3Style}>고요하고 우아한 가을!</p>
                <p style={mid3Style}>가을의 퍼스널컬러는 깊고 풍성한 컬러로 당신의 피부와 어우러져 고급스러운 분위기를 연출해 드립니다.</p>
                <p style={mid3Style}>선명한 컬러와 조화로운 조화로움으로 당신의 스타일을 더욱 멋지게 만들어 보세요.</p>
                <p style={{ fontSize: '36px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold', padding:'40px 0 20px' }}>가을 웜톤</p>
                <img src='/image/test/color-setting.svg' style={buttonStyle}/>
                <img src='/image/test/sharing.svg' style={buttonStyle}/>
                </div>
            </div>
            <div className='feature' style={containerStyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:'0 20px 0 0', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                    <p style={titleStyle}>가을 웜톤의 특징</p>
                    <p style={mid2Style}>가을의 이미지를 가진 퍼스널 컬러는 저명도와 저채도의 노란기 있는 어두운 색이 주를 이루며 전체적으로 차분한 분위기가 떠오른다.</p>
                    <p style={mid2Style}>가을 웜톤에 속하는 사람들은 카멜색, 베이지색, 주황색, 금색, 밤색은 잘 어울리지만 파란색 계열은 잘 맞지 않을 수 있다.</p>
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
                <p style={titleStyle}>가을 웜톤을 위한 추천상품</p>
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                    <ProductList
                        id= '3103'
                        image= '/image/test/test3/3103.png'
                        name= '[TRENDY]린넨자개NB 오렌지 '
                        price= '24000'
                    />
                    <ProductList
                        id= '3104'
                        image= '/image/test/test3/3104.png'
                        name= '[TRENDY]린넨자개NB 초록'
                        price= '24000'
                    />
                    <ProductList
                        id= '3200'
                        image= '/image/test/test3/3200.png'
                        name= '크리니크 치크 팝 - 누드팝'
                        price= '33000'
                    />
                    <ProductList
                        id= '3203'
                        image= '/image/test/test3/3203.png'
                        name= '무지개맨션 피팅 블러쉬 05파인드 '
                        price= '14400'
                    />
                    <ProductList
                        id= '3300'
                        image= '/image/test/test3/3300.png'
                        name= '웨이크메이크 소프트 블러링 아이팔레트-뮤트 코랄 블러링'
                        price= '34000'
                    />
                    <ProductList
                        id= '3301'
                        image= '/image/test/test3/3301.png'
                        name= '홀리카홀리카 마이페이브 무드 아이팔레트 -  데이지'
                        price= '28000'
                    />
                    <ProductList
                        id= '3400'
                        image= '/image/test/test3/3400.png'
                        name= '맥 파우더 키스 립스틱 - 멀 잇 오버'
                        price= '31000'
                    />
                    <ProductList
                        id= '3401'
                        image= '/image/test/test3/3401.png'
                        name= '페리페라 잉크무드 매트스틱 - 12호 힙생힙사'
                        price= '14000'
                    />
                </div>
            </div>
            <div style={{backgroundColor:'#4EB983'}}>
            <div className='youtube' style={containerStyle}>
                <div>
                <p style={titleStyle}>가을 웜톤 스타일링 팁</p>
                </div>
                <a href='https://www.youtube.com/playlist?list=PLUCU-wCND3_1YJSBlYSe7yABUy292ymLx' style={linkStyle} target="_blank">
                <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <p style={subtitleStyle}>더보기</p>
                    <img src='/image/test/chevron-right.svg' style={{margin:'0'}}/>
                </div>
                </a>
                <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <YoutubePlayer
                    videoId="UtFoXSDE0Us"
                    title="가을딥은 다 화려하다?고윤정으로 보는 절제된 가을딥 스타일링"
                    channel="다현쌤"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="qcCfugMLpMo"
                    title="2023 퍼스널컬러 헤어염색 추천 ! (가을웜톤) 편"
                    channel="첫인상은한결"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="caNFage6E5Y"
                    title="을웜 가을뮤트 친구 파우치 털기! 가을 색조 부자♥ 퍼스널컬러 전문가도 칭찬한 꿀템! 유명템 저렴이까지!"
                    channel="룸룸랜드"
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
export default Test3_Autumn;