import React, { useState } from 'react';
import ProductList from './ProductList';

//하위 메뉴: 상의(퍼스널컬러)
const ProductPage7_lips = ({tabContent, productData}) => {
    const [selectedSeason, setSelectedSeason] = useState('봄');

    //퍼스널컬러별 선택 (위에 기본 선택을 사용자 정보가 있을 경우에 받아서 써도 됨)
    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };
 
    //총 몇개의 상품이 있는지 확인
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
        width: '1005px',
        height: '60px',
        margin: ' 36px 0px 0px 0px',
        padding: '0px 20px',
        border: '1px solid #dbdbdb',
        fontSize: '14px',
      };

    const selectStyle = {
        margin: '15px 8px',
        padding: '7px 13px',
        border: 'none',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        fontSize: '15px',
    };

    // const activeselectStyle = {
    //     ...selectStyle,
    //     color: '#D01C59',
    // };

    return(
        <div style={{padding:'0 0 0 60px'}}>
            <div style={headerStyle}>
                <p style={{fontSize: '15px', margin:'0px'}}>립메이크업</p>
                <div style={{display: 'flex', padding:'0px 20px'}}>
                    <div style={{marginLeft: 'auto'}}>
                    <select value={selectedSeason} onChange={handleSeasonChange} style={selectStyle}>
                        <option value="spring">봄 웜톤</option>
                        <option value="summer">여름 쿨톤</option>
                        <option value="autumn">가을 웜톤</option>
                        <option value="winter">겨울 쿨톤</option>
                    </select>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',margin: ' 5px 0px 0px 0px', padding: '0px 20px', color:'#D01C59'}}>
                {getProductCount()}
                <p style={{margin: '0px 3px', color: '#272727'}}>개의 상품이 있습니다.</p>
            </div>
            <div style={{flexDirection: 'column'}}>
                <ProductList />
            </div>
        </div>
            
    );
};

export default ProductPage7_lips;