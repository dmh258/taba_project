import React, { useState } from 'react';
import ProductList, { getProductCount } from './ProductList_search';
import { useParams } from 'react-router-dom';

const ProductSearch = ({productData}) => {
    const { searchValue } = useParams();

    //총 몇개의 상품이 있는지 확인
    const getProductCount = () => {
        if (productData && productData.length > 0) {
          return productData.reduce((count, product) => count + product.items.length, 0);
        }
        return 0;
    };
    
    //검색입력값이 없으면, 공백으로 처리
    const searchValueCount = () => {
        if (searchValue && searchValue.trim().length > 0) {
          return searchValue;
        }
        return "/";
      };


//style

    return(
        <div style={{padding:'40px 300px'}}>
            <p style={{display: 'flex', alignItems: 'center',fontSize:'24px', height:'60px'}}>검색</p>
            <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '0 10px'}}>
                <div style={{display:'flex', margin: ' 5px 0px', color:'#D01C59'}}>
                    <p>'{searchValueCount(searchValue)}'</p>
                    <p style={{margin: '0px 3px', color: '#272727'}}>의 검색 결과</p>
                </div>
                <div style={{display:'flex', margin: ' 5px 0px', color:'#D01C59'}}>
                    {getProductCount(productData)}
                    <p style={{margin: '0px 3px', color: '#272727'}}>개의 상품이 있습니다.</p>
                </div>
            </div>
            <div style={{flexDirection: 'column'}}>
            <ProductList productData={productData}/>
            </div>
        </div>
            
    );
};

export default ProductSearch;