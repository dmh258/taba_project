import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

//??? 무한스크롤 되는건지 안되는건지...

// 제품리스트 생성
const ProductList = ({ products }) => { 
  const [productList, setProductList] = useState([]);

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
        id: 1,
        image: './image/image240.png',
        brand: '브랜드명1',
        name: '상품명1',
        price: 10000,
        tags: ['태그1', '태그2'],
      },
      {
        id: 2,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 3,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 4,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2d어쩌구저ㄲ쩌구엄청길어졌을때를 대비하여',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 5,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 6,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 7,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 8,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 9,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 10,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 11,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 12,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 13,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 14,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 15,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 16,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 17,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 18,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 19,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 20,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 21,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 22,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 23,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },
      {
        id: 24,
        image: './image/image240.png',
        brand: '브랜드명2',
        name: '상품명2',
        price: 20000,
        tags: ['태그3', '태그4'],
      },

      // 추가적인 상품 데이터...
    ];

    setProductList(tempProductList);
  }, []);

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

  

  //style
  const ContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    // width: '1320px',
    justifyContent: 'space-between',
    margin: '60px 10px',
  };

  const productListStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '240px',
    height: '430px',
    justifyContent: 'space-between',
    backgroundColor: '#dbdbdb',
    margin: '0px 0px 60px',
    fontSize: '14px',
  };

  
  return (
    <div className="Container" style={ContainerStyle}>
      {productList.map((product) => (
        <div key={product.id} ref={Econtents} className="productList" style={productListStyle}>
          <div style={{ width: '240px', height: '240px', margin: '28px 0px'}}>
          {/* 상품이미지 */}
          <img data-src={product.image} alt={product.name} />
          </div>
          <div style={{width:'200px', height:'110px', margin: '10px 0px', display: 'flex',flexDirection: 'column'}}>
            {/* 브랜드 */}
            {/* <p style={{margin:'0px'}}>{product.brand}</p> */}
            {/* 상품명 */}
            <h3 style={{flexWrap: 'wrap', margin: '0px', fontSize: '14px', color: '#272727'}}>{product.name}</h3>
            {/* 가격 */}
            <p style={{margin:'15px 0px 0px', fontSize: '16px'}}>{formatPrice(product.price)} 원</p>
            {/* <p>{product.tags.join(', ')}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;






