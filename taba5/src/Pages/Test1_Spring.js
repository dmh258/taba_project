import Spring from '../Test-Main/Test1_Spring';
import BackBar from "../Tools/BackBar";

const Test1_Spring = () => {

    const backgroundStyle = {  
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.5%',
        padding: '0px',
        margin: '0px',
      };

    return (
        <div style={backgroundStyle}>
            <BackBar pageName="퍼스널컬러 진단결과(봄)"/>
            <Spring />
        </div>
    );
};
export default Test1_Spring;