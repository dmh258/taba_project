import React, { useState, useEffect } from "react";
import YoutubePlayer from '../Tools/YoutubePlayer';
import ProductList from '../Product/ProductList_test';

import { Link } from 'react-router-dom';

const Test4_Winter = () => {
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
            <div style={{backgroundImage: `url('/image/test/test4-banner.png')`}}>
            <div className='header' style={{paddign:'0 300px'}}>
                <div style={{height:'600px', display:'flex', justifyContent:'center', alignItems:'center',}}>
                <p style={{ fontSize: '50px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold' }}>겨울 쿨톤</p>
                </div>
            </div>
            </div>
            <div className='explain' style={containerStyle}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <p style={mid2Style}>'{userName}'님의 퍼스널컬러 진단 결과</p>
                <p style={mid3Style}>화사하고 차가운 겨울! </p>
                <p style={mid3Style}>겨울의 퍼스널컬러는 선명하고 강렬한 컬러로 당신의 아름다움을 더욱 돋보이게 합니다.</p>
                <p style={mid3Style}>화이트와 같은 차분한 컬러와 함께 선명한 컬러를 조화롭게 활용하여 당신의 스타일을 독창적으로 완성해 보세요.</p>
                <p style={{ fontSize: '36px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold', padding:'40px 0 20px' }}>겨울 쿨톤</p>
                <img src='/image/test/color-setting.svg' style={buttonStyle}/>
                <img src='/image/test/sharing.svg' style={buttonStyle}/>
                </div>
            </div>
            <div className='feature' style={containerStyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:'0 20px 0 0', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                    <p style={titleStyle}>겨울 쿨톤의 특징</p>
                    <p style={mid2Style}>겨울의 이미지를 가진 퍼스널 컬러는 저명도와 저채도, 고명도와 고채도의 푸른기 있는 색이 주를 이루며 전체적으로 선명하고 강한 분위기가 떠오른다.</p>
                    <p style={mid2Style}>겨울 쿨톤에 속하는 사람들은 검정색, 흰색, 남색, 빨간색은 잘 어울리나 베이지색, 주황색, 금색은 잘 맞지 않는다.</p>
                    <div style={{backgroundColor:'cammel', width:'20px', height:'20px'}} />
                </div>
                <div style={{padding:'0 0 0 20px'}}>
                    <img src='/image/test/mid-img.png' />
                </div>
                </div>
            </div>
            <img src='/image/test/decoBar.png' style={{width:'100%'}}/>
            <div className='items' style={containerStyle}>
                <div>
                <p style={titleStyle}>겨울 쿨톤을 위한 추천상품</p>
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                    <ProductList
                        id= '4105'
                        image= '/image/test/test4/4105.png'
                        name= '[1+1][오프라인베스트]컬러포켓T 파랑 '
                        price= '18000'
                    />
                    <ProductList
                        id= '4110'
                        image= '/image/test/test4/4110.png'
                        name= '프릴 탑 '
                        price= '49900'
                    />
                    <ProductList
                        id= '4200'
                        image= '/image/test/test4/4200.png' 
                        name= '크리니크 치크 팝 - 팬지팝'
                        price= '33000'
                    />
                    <ProductList
                        id='4200'
                        image='/image/test/test4/4203.png'
                        name='무지개맨션 피팅 블러쉬 01오드 '
                        price='14400'
                    />
                    <ProductList
                        id= '4300'
                        image= '/image/test/test4/4300.png'
                        name= '웨이크메이크 소프트 블러링 아이팔레트- 생기 블러링'
                        price= '34000'
                    />
                    <ProductList
                        id= '4301'
                        image= '/image/test/test4/4301.png'
                        name= '3CE 멀티 아이 컬러 팔레트 - 오토 포커스'
                        price= '39000'
                    />
                    <ProductList
                        id= '4400'
                        image= '/image/test/test4/4400.png'
                        name= '페리페라 잉크무드 매트스틱 -13호 일잘플럼'
                        price= '14000'
                    />
                    <ProductList
                        id= '4401'
                        image= '/image/test/test4/4401.png'
                        name= '에스쁘아 꾸뛰르 립틴트 벨벳 - 카민모브'
                        price= '20000'
                    />
                </div>
            </div>
            <div style={{backgroundColor:'#4EB983'}}>
            <div className='youtube' style={containerStyle}>
                <div>
                <p style={titleStyle}>겨울 쿨톤 스타일링 팁</p>
                </div>
                <a href='https://www.youtube.com/playlist?list=PLUCU-wCND3_2g_TI-hP65EdhYLnCHhtDN' style={linkStyle} target="_blank">
                <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <p style={subtitleStyle}>더보기</p>
                    <img src='/image/test/chevron-right.svg' style={{margin:'0'}}/>
                </div>
                </a>
                <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <YoutubePlayer
                    videoId="NUhNdjADwTk"
                    title="겨울쿨톤은 꼭 보세요!✨#퍼스널컬러"
                    channel="다현쌤"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="NJ99DnSCIps"
                    title="#퍼스널 컬러 [겨울딥 & 다크] ep.01 ⬛️ 겨울딥&겨울다크 이미지 연출법! - 패션편 ⬛️ 올블랙 착붙! 🧨카리스마 폭팔!!💣 #겨울딥코디#겨울다크코디 [ENG sub]"
                    channel="예영이예영"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="dk_3bYSA3pA"
                    title="겨울쿨톤에 어울리는 헤어스타일 (염색 ,컷 ,펌)"
                    channel="무지개요정우리"
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
export default Test4_Winter;