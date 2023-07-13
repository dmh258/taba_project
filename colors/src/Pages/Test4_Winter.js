import Winter from '../Test-Main/Test4_Winter';
import BackBar from "../Tools/BackBar";

const Test4_Winter = () => {

    const backgroundStyle = {  
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.5%',
        padding: '0px',
        margin: '0px',
      };

    return (
        <div style={backgroundStyle}>
            <BackBar pageName="퍼스널컬러 진단결과(겨울)"/>
            <Winter />
        </div>
    );
};
export default Test4_Winter;