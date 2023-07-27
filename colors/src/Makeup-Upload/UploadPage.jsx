import React from 'react';

import NotionImages from './NotionImages';


const UploadPage = () => {
   
    return (
      <div style={{ display: 'flex',flexDirection: 'column',alignItems: 'center', backgroundColor:'#F5815C', minWidth:'1280px'}}>
        <div style={{padding: '40px 0'}}><NotionImages /></div>
        <img src='/image/upload/decoBar.png' style={{ width: '100%', padding:'5px 0pxs'}} alt="deco" />
      </div>
    );
};
  
export default UploadPage;