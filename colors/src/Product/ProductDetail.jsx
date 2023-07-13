import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//하위 메뉴: 상의(퍼스널컬러)
const ProductDetail = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({
        id:'',
        image: '',
        name: '',
        price: '',
        personalColor: '',
      });

    //서버에서 제품정보를 받아오기
    React.useEffect(() => {

        const data = {
            image: '/image/product/example.png',
            name: '티맥스타바상품명이 엄청 길면 어떻게 되는지 실험중',
            price: '275000',
            personalColor: '봄 웜',
          };
    
          setProduct({
            image: data.image,
            name: data.name,
            price: data.price,
            personalColor: data.personalColor,
            });
        }, []);

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('서버의 초기값을 가져올 API 엔드포인트');
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setProduct({
    //                     image: data.image,
    //                     name: data.name,
    //                     price: data.price,
    //                     personalColor: data.personalColor,
    //                     });
    //                 } else {
    //                     console.log('*제품정보를 가져오는데 실패했습니다.');
    //                 }
    //             } catch (error) {
    //                 console.log('*서버에 연결할 수 없습니다.', error);
    //             }
    //         };
    //         fetchData();
    // }, []);

     
    // 가격: 쉼표(,)를 포함한 문자열로 변환
    const formattedPrice = parseInt(product.price).toLocaleString();

//style
    const imgStyle ={
        width:'420px',
        height:'420px',
        objectFit: 'cover',
        margin:'0px',
        padding:'0 10px',
    };

    const nameStyle ={
        fontSize: '24px',
        color: '#272727',
        flexWrap: 'wrap',
        margin: '0 0 40px',
    };

    const colorStyle ={
        display:'flex',
        justifyContent: 'center',
        fontSize: '16px',
        width: '65px',
        color: '#D01C59',
        border: '1px solid #D01C59',
        borderRadius: '50px',
        padding: '5px 3px',
    };

    return(
        <div style={{padding:'40px 390px'}}>
            <div style={{display:'flex', justifyContent: 'space-between', alignContent:'center'}}>
                <img src={product.image} style={imgStyle} alt={product.name} />
                <div style={{ width:'420px', padding:'0 10px'}}>
                    <p style={nameStyle}>{product.name} </p>
                    <div style={{display:'flex', alignItems: 'center', margin: '0 0 20px', fontSize:'24px'}}>
                        <p stlye={{fontSize: '28px'}}>{formattedPrice}</p>
                        <p stlye={{margin:'0 5px'}}> 원</p>
                    </div>
                    <p style={colorStyle}>{product.personalColor}</p>
                </div>
            </div>
            <h2>Product ID: {productId}</h2>
            
        </div>
            
    );
};

export default ProductDetail;