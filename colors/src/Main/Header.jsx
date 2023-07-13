import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header =()=> {
    const [personalColor, setPersonalColor] = useState(null);

    // 퍼스널 컬러 정보가 있는지 확인하는 함수
    const hasPersonalColor = () => {
        // 퍼스널 컬러 정보가 있다고 가정하고 구현
        // 실제로는 personalColor 값을 어떻게 확인하는지에 따라 다를 수 있습니다.
        return personalColor !== null;
    };


    //style

    const titleStyle={
        fontSize: '32px',
        width: '410px',
        flexWrap: 'wrap',
    };

    const subtitleStyle={
        fontSize: '18px',
        color: '#666666',
    };

    const buttonStyle={
        width: '68px',
        border:'none',
        backgroundColor: 'transparent',
    };


    return (
        <div>
        {hasPersonalColor() ? (
            // 퍼스널 컬러 정보가 있을 때의 배너
            <div style={{height: '600px', width: '100%', backgroundColor: '#F5C359', }}>
                <div style={{display:'flex', justifyContent: 'center', padding: '120px 300px'}}>
                    <div style={{margin:'0 20px'}}><img src='/image/main-slide1.png' /> </div>
                    <div style={{display:'flex', flexDirection: 'column', margin:'0 20px'}}>
                    <p style={titleStyle}>퍼스널컬러 알아보고 내 취향 찾자!</p>
                    <p style={subtitleStyle}>컬러놀이에서 퍼스널컬러를 진단하고, 어울리는 상품 추천받기</p>
                    <Link to='/'>
                    <button style={buttonStyle}>
                        <img src='/image/test-button-red.svg' />
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        ) : (
            // 퍼스널 컬러 정보가 없을 때의 배너
            <div style={{height: '600px', width: '100%', backgroundColor: '#F5B4B2', }}>
                <div style={{display:'flex', justifyContent: 'center', padding: '120px 300px'}}>
                    <div style={{margin:'0 20px'}}><img src='/image/main-slide1.png' /> </div>
                    <div style={{display:'flex', flexDirection: 'column', margin:'0 20px'}}>
                    <p style={titleStyle}>퍼스널컬러를 진단받으셨나요? 이제 어울리는 제품을 찾아봐요!</p>
                    <p style={subtitleStyle}>컬러놀이에서 추천하는 제품 보러가기</p>
                    <Link to='/makeup/upload'>
                    <button style={buttonStyle}>
                        <img src='/image/product-button-red.svg' />
                    </button>
                    </Link>
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};

export default Header;