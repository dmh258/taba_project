import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';

const MypagePage = () => {
    const [personalColorType, setPersonalColorType] = useState('어떤 퍼스널컬러를 가지셨나요?'); 
    const [name, setName] = React.useState('컬러놀이사용자');
    const [imageURL, setImageURL] = useState('/image/mypage/mypage-img.png');

    // // useEffect(() => {
    // //     fetchData();
    // // }, []);

    // //서버에서 사용자 퍼스널컬러, 닉네임 불러오기
    // const fetchData = () => {
    //     fetch('your-api-endpoint')
    //       .then(response => response.json())
    //       .then(data => {
    //         setPersonalColorType(data.personalColorType);
    //         setUsername(data.username);
    //         setImageURL(data.imageURL);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   };

    React.useEffect(() => {
        // 임시로 데이터를 사용하여 초기값 설정
          const data = {
            name: "John Doe",
          };
          setName(data.name);
        }, []);
    

    //style
    const imageStyle ={
        width: '450px',
        height: '400px',
        objectFit: 'contain',
        backgroundColor: '#dbdbdb',
        margin:'0px',
    };

    const textStyle ={
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        fontSize: '24px',
        color: '#272727',
        margin: '0 40px',
    };

    const buttonStyle ={
        margin:'40px 40px',
        border: 'none',
        backgroundColor: 'transparent',
        background: 'none !important',
        cursor: 'pointer',
    };

    return(
        <div style={{padding:'40px 300px'}}>
        <p style={{display: 'flex', alignItems: 'center',fontSize:'24px', height:'60px'}}>마이페이지</p>
            <div style={{display: 'flex', backgroundColor: '#F5FC9E', margin:'0 0 40px'}}>
                <div style={{width:'450px', height:'400px', backgroundColor: '#dbdbdb'}}>
                <div className='image' style={{imageStyle}}>
                    <img src={imageURL} alt="프로필 이미지" />
                </div>
                </div>
                <div className='text' style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',}}>
                    <div style={textStyle}>
                        <div style={{margin:'40px 0', fontSize:'29px'}}>{personalColorType}</div>
                    </div>
                    <div style={textStyle}>
                        {name}
                        <p style={{margin: '0px 3px'}}>님</p>
                    </div>
                    <p style={{margin: '3px 40px',fontSize: '18px'}}>컬러놀이가 추천하는 다양한 스타일링을 구경하세요!</p>
                    <Link to='/test/upload'>
                    <button style={buttonStyle}><img src='/image/mypage/test-button-yellow.svg' alt="퍼스컬컬러 진단하기" /></button>
                    </Link>
                </div>
            </div>
        <UserInfo />
        </div>
    );

};

export default MypagePage;