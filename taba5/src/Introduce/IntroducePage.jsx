import React, { useState } from 'react';
import { Link} from 'react-router-dom';

// import LazyLoad from 'react-lazyload';

const Introduce = () => {
    return (
        <div>
            <div>
                <img src='/image/intro/intro1.png'/>
                <img src='/image/intro/intro2.png'/>
                <img src='/image/intro/intro3.png'/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Link to='/makeup/upload'>
                <button style={{margin:'80px',border:'none', backgroundColor:'#ffffff'}}>
                <img src='/image/intro/test-button-yellow.svg' />
                </button>
                </Link>
            </div>
        </div>
    );
};


export default Introduce;