import React from 'react';
import { Link} from 'react-router-dom';

const BackBar = ({ pageName, onBackClick }) => {

    const backbarStyle = {
        borderTop: '1px solid #dbdbdb', 
        borderBottom: '1px solid #dbdbdb', 
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'left',
        padding: '5px 10%',
        margin: '0px',
        fontFamily: 'Noto Sans KR, sans-serif',
        height: '35px',
        maxWidth: '100%',
        minWidth: '1280px',
        overflow: 'hidden',
        display: 'flex',
    };

    const backButtonStyle = {
        cursor: 'pointer',
        width: '24px',
        height: '24px',
        margin:'0 5px',
    };

    const pageNameStyle = {
        padding: '0px',
        margin: '0px',
        fontSize: '15px',
        letterSpacing: '0.5%',
    };

  return (
        <div style={backbarStyle}>
            <div style={{display:'flex', alignItems: 'center',}}>
                <Link to="/main"><img src="/image/back/back.svg" alt="Back" style={backButtonStyle}/></Link>
                <div> <span style={pageNameStyle}>{pageName}</span> </div>
            </div>
        </div>
  );
};

export default BackBar;
