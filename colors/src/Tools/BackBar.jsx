import React from 'react';
import { Link} from 'react-router-dom';

const BackBar = ({ pageName, onBackClick }) => {

    const backbarStyle = {
        borderTop: '1px solid #dbdbdb', 
        borderBottom: '1px solid #dbdbdb', 
        padding:'5px 0px', 
        width:'100%', 
        justifyContent: 'center',
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
            <div style={{padding: '0px 10%', width:'1280px', display:'flex', alignItems: 'center', justifyContent: 'left'}}>
                <Link to="/main"><img src="/image/back/back.svg" alt="Back" style={backButtonStyle}/></Link>
                <div> <span style={pageNameStyle}>{pageName}</span> </div>
            </div>
        </div>
  );
};

export default BackBar;
