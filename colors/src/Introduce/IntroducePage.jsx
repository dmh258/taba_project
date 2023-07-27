import React, { useState } from 'react';
import { Link} from 'react-router-dom';

// import LazyLoad from 'react-lazyload';


const Introduce = () => {

    const imgStyle={
        maxWidth:'100%',
        minWidth:'1280px',
    };


    return (
        <div>
            <div>
                <img src='/image/intro/intro1.png' style={imgStyle}/>
                <img src='/image/intro/intro2.png' style={imgStyle}/>
                <img src='/image/intro/intro3.png' style={imgStyle}/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to='/test/upload'>
                <button style={{margin:'80px',border:'none', backgroundColor:'#ffffff'}}>
                <img src='/image/intro/test-button-yellow.svg' />
                </button>
                </Link>
            </div>
        </div>
    );
};


export default Introduce;