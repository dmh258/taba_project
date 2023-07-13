import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./Tools/NavigationBar";
import Footer from "./Tools/Footer";
import ToTop from "./Tools/ToTop";

import Landing from "./Pages/Landing";
import Main from "./Pages/Main";
import Login from "./Pages/LoginSignup";
import Introduce from "./Pages/Introduce";

import Spring from "./Pages/Test1_Spring";
import Summer from "./Pages/Test2_Summer";
import Autumn from "./Pages/Test3_Autumn";
import Winter from "./Pages/Test4_Winter";
import Test_Upload from "./Pages/Test_Upload";
import Makeup_Main from "./Pages/Makeup_Main";
import Makeup_Upload from "./Pages/Makeup_Upload";

import Product1_all from "./Pages/Product1_all";
import Product2_new from "./Pages/Product2_new";
import Product3_recommend from "./Pages/Product3_recommend";
import Product4_top from "./Pages/Product4_top";
import Product5_face from "./Pages/Product5_face";
import Product6_eyes from "./Pages/Product6_eyes";
import Product7_lips from "./Pages/Product7_lips";

import ProductSearch from "./Pages/ProductSearch";
import ProductDetail from "./Pages/ProductDetail";
import Mypage from "./Pages/Mypage";


const backgroundStyle = {  
  fontFamily: 'Noto Sans KR',
  fontSize: '14px',
  letterSpacing: '0.3%',
  margin: '0px',
  padding: '0px',
};

const App = () => {
  return (
    <div style={backgroundStyle}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/introduce" element={<Introduce/>}/>
          <Route path="/test/upload" element={<Test_Upload/>}/>
          <Route path="/test/spring" element={<Spring/>}/>
          <Route path="/test/summer" element={<Summer/>}/>
          <Route path="/test/autumn" element={<Autumn/>}/>
          <Route path="/test/winter" element={<Winter/>}/>
          <Route path="/makeup/upload" element={<Makeup_Upload/>}/>
          <Route path="/makeup/main" element={<Makeup_Main/>}/>

          <Route path="/product/all" element={<Product1_all/>}/>
          <Route path="/product/new" element={<Product2_new/>}/>
          <Route path="/product/recommend" element={<Product3_recommend/>}/>
          <Route path="/product/top" element={<Product4_top/>}/>
          <Route path="/product/face" element={<Product5_face/>}/>
          <Route path="/product/eyes" element={<Product6_eyes/>}/>
          <Route path="/product/lips" element={<Product7_lips/>}/>

          <Route path="/product/search/:searchValue" element={<ProductSearch/>}/>
          <Route path="/product/detail/:productId" element={<ProductDetail />} />
          <Route path="/mypage" element={<Mypage/>}/>


        </Routes>
      </BrowserRouter>
      <ToTop />
      <Footer />
    </div>
  );
};

export default App;
