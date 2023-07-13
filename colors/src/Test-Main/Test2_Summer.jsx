import React, { useState, useEffect } from "react";
import YoutubePlayer from '../Tools/YoutubePlayer';
import ProductList from '../Product/ProductList_test';

import { Link } from 'react-router-dom';

const Test2_Summer = () => {
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
            <div style={{backgroundImage: `url('/image/test/test2-banner.png')`,}}>            
            <div className='header' style={{paddign:'0 300px'}}>
                <div style={{height:'600px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{ fontSize: '50px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold' }}>여름 웜톤</p>
                </div>
            </div>
            </div>
            <div>
            <div className='explain' style={containerStyle}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <p style={mid2Style}>'{userName}'님의 퍼스널컬러 진단 결과</p>
                <p style={mid3Style}>시원하고 청량한 여름!</p>
                <p style={mid3Style}>상쾌하면서도 섬세한 아름다움을 담아내어 여러분의 매력을 돋보이게 합니다.</p>
                <p style={mid3Style}>밝은 피부톤과 조화로운 컬러를 선택하여 여름의 빛나는 햇살 아래서 더욱 화사하게 빛나보세요.</p>
                <p style={{ fontSize: '36px', fontFamily: 'PyeongChang Peace', fontWeight: 'bold', padding:'40px 0 20px' }}>여름 쿨톤</p>
                <img src='/image/test/color-setting.svg' style={buttonStyle}/>
                <img src='/image/test/sharing.svg' style={buttonStyle}/>
                </div>
            </div>
            <div className='feature' style={containerStyle}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{padding:'0 20px 0 0', display:'flex', flexDirection:'column', justifyContent:'center',}}>
                    <p style={titleStyle}>봄 웜톤의 특징</p>
                    <p style={mid2Style}>여름의 이미지를 가진 퍼스널 컬러는 고명도와 저채도의 푸른기 있는 밝은 색이 주를 이루며 전체적으로 산뜻한 분위기가 떠오른다.</p>
                    <p style={mid2Style}>여름 쿨톤에 속하는 사람들은 라벤더색, 연분홍색, 연하늘색은 잘 어울리지만 검정이나 주황색은 다소 어색할 수 있다.</p>
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
                <p style={titleStyle}>여름 쿨톤을 위한 추천상품</p>
                </div>
                <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                    <ProductList
                        id= '2101'
                        image= '/image/test/test2/2101.png'
                        name= '[1+1][오프라인베스트]컬러포켓T 보라 '
                        price= '18000'
                    />
                    <ProductList
                        id= '2105'
                        image= '/image/test/test2/2105.png'
                        name= '[컬러추가][오프라인베스트]쮸리반팔MTM 소라-백색 '
                        price= '29000'
                    />
                    <ProductList
                        id= '2200'
                        image= '/image/test/test2/2200.png'
                        name= '롬앤 배러 댄 치크 - W02 스트로베리 밀크'
                        price= '12000'
                    />
                    <ProductList
                        id= '2201'
                        image= '/image/test/test2/2201.png'
                        name= '나스 블러셔 - 스릴'
                        price= '45000'
                    />
                    <ProductList
                        id= '2300'
                        image= '/image/test/test2/2300.png'
                        name= '클리오 프로 아이 팔레트-14호 한남동 아뜰리에'
                        price= '34000'
                    />
                    <ProductList
                        id= '2301'
                        image= '/image/test/test2/2301.png'
                        name= '에스쁘아 리얼 팔레트- 모브미'
                        price= '32000'
                    />
                    <ProductList
                        id= '2400'
                        image= '/image/test/test2/2400.png'
                        name= '페리페라 워터베어 틴트- 8호 여쿨러팅'
                        price= '12000'
                    />
                    <ProductList
                        id= '2401'
                        image= '/image/test/test2/2401.png'
                        name= '에스쁘아 꾸뛰르 립틴트 벨벳- 핑크미업'
                        price= '20000'
                    />
                </div>
            </div>
            <div style={{backgroundColor:'#4EB983'}}>
            <div className='youtube' style={containerStyle}>
                <div>
                <p style={titleStyle}>여름 쿨톤 스타일링 팁</p>
                </div>
                <a href='https://www.youtube.com/playlist?list=PLUCU-wCND3_28zwZ28ikX88vGdkpf61g9' style={linkStyle} target="_blank">
                <div style={{display:'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <p style={subtitleStyle}>더보기</p>
                    <img src='/image/test/chevron-right.svg' style={{margin:'0'}}/>
                </div>
                </a>
                <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>
                <YoutubePlayer
                    videoId="aYI8C0J4KFY"
                    title="여라 모여라!🙋‍♀️ 여름 라이트톤 데일리 메이크업💝 feat. 퍼스널 컬러의 중요성 (with하누)"
                    channel="Saerom Min개코의 오픈스튜디오"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="2dSvJKta9pk"
                    title="1년만에 돌아온 여쿨 파우치 털기⚡️ (여쿨 라이트립 BEST 10ㅣ신상 쿨톤 블러셔 모음 ZIP 🎁l 쿨톤 싱글 섀도우 이거로 끝 l 리피"
                    channel="리피"
                />
                </div>
                <div>
                <YoutubePlayer
                    videoId="I_nJdruW25E"
                    title="🤟실패 없는 컬러 코디, 퍼스널 컬러 여름, 쿨 톤 편! 💙/ 쿨 톤은 베이지 못입나요?"
                    channel="프릴라이, Style & Color"
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
export default Test2_Summer;