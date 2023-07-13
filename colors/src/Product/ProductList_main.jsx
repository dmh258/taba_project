import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

//??? 무한스크롤 되는건지 안되는건지...

// 제품리스트 생성
const ProductList = ({ id, image, name, price }) => { 
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  //상세페이지 링크이동
  const handleClick = (productId) => {
    navigate(`/product/detail/${productId}`);
  };

  //상품명 줄임표
  const truncateProductName = (name, maxLength) => {
    if (name.length > 30) {
      return name.substring(0, 30) + '...';
    }
    return name;
  };

  // 가격: 쉼표(,)를 포함한 문자열로 변환
  const formatPrice = (price) => {
    return price.toLocaleString(); 
  };  

  //style
  const ContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    // width: '1320px',
    justifyContent: 'space-between',
    margin: '0px',
  };

  const productListStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '240px',
    height: '400px',
    // justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    margin: '0px',
    fontSize: '14px',
    cursor:'pointer',
  };

  
  return (
    <div className="Container" style={ContainerStyle}>
        <div key={id}className="productList" style={productListStyle} onClick={() => handleClick(id)}>
          <div style={{ width: '240px', height: '240px', margin: '10px 0px', overflow:'hidden'}}>
          {/* 상품이미지 */}
          <img src={image} alt={name} style={{width: '100%', height: '100%'}}/>
          </div>
          <div style={{width:'220px', height:'110px', margin: '0px', display: 'flex',flexDirection: 'column'}}>
            {/* 브랜드 */}
            {/* <p style={{margin:'0px'}}>{brand}</p> */}
            {/* 상품명 */}
            <h3 style={{flexWrap: 'wrap', margin: '0px', fontSize: '14px', color: '#272727'}}>{truncateProductName(name)}</h3>
            {/* 가격 */}
            <p style={{margin:'15px 0px 0px', fontSize: '16px'}}>{formatPrice(price)} 원</p>
            {/* <p>{tags.join(', ')}</p> */}
          </div>
        </div>
    </div>
  );
};

export default ProductList;






