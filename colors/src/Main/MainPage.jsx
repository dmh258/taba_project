import React, { useState } from 'react';
import Banner from './MainBanner';
import Container from './Container';

const MainPage =()=> {

    return (
        <div>
        <Banner />
            <div>
            <Container />
            </div>
        </div>
    );
};

export default MainPage;