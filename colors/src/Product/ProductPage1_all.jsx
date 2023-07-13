import React, { useState } from 'react';
import ProductMenu from './ProductMenu';
import ProductList from './ProductList';

//하위 메뉴: 전체보기(전체보기, 상의, 페이스, 아이, 립)
const DetailMenu = ({tabContent }) => {
    const [activeTab, setActiveTab] = useState('_all');
    const buttonStyle = {
        margin: '15px 8px',
        padding: '7px 13px',
        border: 'none',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        fontSize: '14px',
        border: '1px solid #666666',
        borderRadius: '50px',
    };

    const activeButtonStyle = {
        ...buttonStyle,
        border: '1px solid #D01C59',
        color: '#D01C59',
    };

    return (
        <div>
            <div>
                <button
                    style={activeTab === '_all' ? activeButtonStyle : buttonStyle}
                    className={activeTab === '_all' ? 'active' : ''}
                    onClick={() => setActiveTab('_all')}
                >
                    전체보기
                </button>
                <button
                    style={activeTab === '_top' ? activeButtonStyle : buttonStyle}
                    className={activeTab === '_top' ? 'active' : ''}
                    onClick={() => setActiveTab('_top')}
                >
                    상의
                </button>
                <button
                    style={activeTab === '_face' ? activeButtonStyle : buttonStyle}
                    className={activeTab === '_face' ? 'active' : ''}
                    onClick={() => setActiveTab('_face')}
                >
                    페이스메이크업
                </button>
                <button
                    style={activeTab === '_eyes' ? activeButtonStyle : buttonStyle}
                    className={activeTab === '_eyes' ? 'active' : ''}
                    onClick={() => setActiveTab('_eyes')}
                >
                    아이메이크업
                </button>
                <button
                    style={activeTab === '_lips' ? activeButtonStyle : buttonStyle}
                    className={activeTab === '_lips' ? 'active' : ''}
                    onClick={() => setActiveTab('_lips')}
                >
                    립메이크업
                </button>
            </div>
          <div>{tabContent}</div>
        </div>
      );

};



const ProductPage1_all = ({tabContent, productData}) => {
 
    const getProductCount = () => {
        if (productData && productData.length > 0) {
          return productData.length;
        }
        return 0;
      };

//style
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        // width: '1005px',
        height: '60px',
        margin: ' 36px 0px 0px 0px',
        padding: '0px 20px',
        border: '1px solid #dbdbdb',
        fontSize: '14px',
      };

    return(
        <div style={{display:'flex', padding:'0 0 0 60px'}}>
            <div>
                <div style={headerStyle}>
                    <p style={{fontSize: '15px', margin:'0px'}}>전체보기</p>
                    <div style={{padding:'0px 20px',}}>
                    <DetailMenu />
                    </div>
                </div>
                <div style={{display:'flex', margin: ' 5px 0px 0px 0px', padding: '0px 20px', color:'#D01C59'}}>
                    {getProductCount()}
                    <p style={{margin: '0px 3px', color: '#272727'}}>개의 상품이 있습니다.</p>
                </div>
                <div style={{flexDirection: 'column'}}>
                    <ProductList />
                </div>
            </div>
            
        </div>
    );
};

export default ProductPage1_all;