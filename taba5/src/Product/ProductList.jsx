import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

//??? 무한스크롤 되는건지 안되는건지...

// 제품리스트 생성
const ProductList = ({ products }) => { 
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // 데이터베이스 API 호출하여 상품 정보를 받아옴
        const response = await fetch(`api-url/products`);
        const data = await response.json();
        setProductList((prevList) => [...prevList, ...data]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

  //   fetchProducts();
  // }, []);
  
  //임시 상품데이터
  const tempProductList = [
    {
      id: 1100,
      image: '/image/database/1/1100.png',
      name: '상품명1',
      price: 10000,
      tags: ['태그1', '태그2'],
    },
    {
      id: 2,
      image: '/image/database/1/1201.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    {
      id: 3,
      image: '/image/database/1/1202.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    {
      id: 3,
      image: '/image/database/1/1203.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    {
      id: 3,
      image: '/image/database/1/1400.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    {
      id: 3,
      image: '/image/database/2/2100.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    {
      id: 3,
      image: '/image/database/2/2200.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/2/2201.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/2/2300.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/2/2301.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/3/3100.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/3/3200.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/3/3201.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/3/3300.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/3/3301.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/4/4400.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/4/4200.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/4/4300.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/4/4400.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },{
      id: 3,
      image: '/image/database/4/4401.png',
      name: '상품명2',
      price: 20000,
      tags: ['태그3', '태그4'],
    },
    // 추가적인 상품 데이터...
  ];

    setProductList(tempProductList);
  }, []);

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

  //무한스크롤(IntersectionObserver API)
  const Econtents = useRef(null);

  const callback = ([entry], observer) => {
    if (entry.isIntersecting) {
      const productList = entry.target.querySelectorAll('.content');
      [0, 3].forEach(i => productList[i].classList.add('first-in'));
      [1, 2].forEach(i => productList[i].classList.add('second-in'));
      observer.disconnect(entry.target);
    }
  };

  const observer = new IntersectionObserver(callback);

  useEffect(() => {
    if (Econtents.current) {
      observer.observe(Econtents.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // //북마크
  // const handleBookmark = (productId) => {
  //   // Implement your logic to handle bookmarking the product with the given productId
  // };


  //style
  const ContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '1010px',
    justifyContent: 'space-between',
    margin: '60px 0px',
  };

  const LinkStyle = {
    textDecoration: 'none',
    color: '#272727',
  };

  const productListStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '240px',
    height: '400px',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    margin: '10px 0',
    fontSize: '14px',
    cursor:'pointer'
  };

  return (
    <div className="Container" style={{}}>
        <div style={ContainerStyle}>
        {productList.map((product) => (
          <div key={product.id} ref={Econtents} className="productList" style={productListStyle} onClick={() => handleClick(product.id)}>
            <div style={{ width: '240px', height: '240px', margin: '10px 0px', overflow:'hidden'}}>
            {/* 상품이미지 */}
            <img src={product.image} alt={product.name} style={{width: '100%', height: '100%'}}/>
            </div>
            <div style={{width:'220px', height:'110px', margin: '0px', display: 'flex',flexDirection: 'column'}}>
              {/* 브랜드 */}
              {/* <p style={{margin:'0px'}}>{product.brand}</p> */}
              {/* 상품명 */}
              <h3 style={{flexWrap: 'wrap', margin: '0px', fontSize: '14px', color: '#272727'}}>{product.name}</h3>
              {/* 가격 */}
              <p style={{margin:'15px 0px 0px', fontSize: '16px'}}>{formatPrice(product.price)} 원</p>
              {/* <p>{product.tags.join(', ')}</p> */}
              {/* <button onClick={() => handleBookmark(product.id)}>
                <img src='/image/heart-blank.svg' />
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


