import React from 'react';
import { Link} from 'react-router-dom';

const BackBar = ({ pageName, onBackClick }) => {

    const backbarStyle = {
        margin:'0px',
        padding: '0px 5px',
        height: '40px',
        borderTop: '1px solid #dbdbdb',
        borderBottom: '1px solid #dbdbdb',
        color: '#666666',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-start',
    };

    const backButtonStyle = {
        cursor: 'pointer',
        width: '24px',
        height: '24px',
    };

    const pageNameStyle = {
        padding: '0px',
        margin: '0px 10px',
        fontSize: '15px',
    };

  return (
    <div style={backbarStyle}>
        <div style={{padding: '0px 300px', margin: '0px', width: '100%', display: 'flex', alignItems: 'center' }}>
            <div onClick={onBackClick} style={backButtonStyle}>
            <Link to="/main"><img src="/image/back/back.svg" alt="Back" /></Link> </div>
            <div> <span style={pageNameStyle}>{pageName}</span> </div>
        </div>
    </div>
  );
};

export default BackBar;
