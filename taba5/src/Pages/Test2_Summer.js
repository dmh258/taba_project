import Summer from '../Test-Main/Test2_Summer';
import BackBar from "../Tools/BackBar";

const Test2_Summer = () => {

    const backgroundStyle = {  
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.5%',
        padding: '0px',
        margin: '0px',
      };

    return (
        <div style={backgroundStyle}>
            <BackBar pageName="퍼스널컬러 진단결과(여름)"/>
            <Summer />
        </div>
    );
};
export default Test2_Summer;