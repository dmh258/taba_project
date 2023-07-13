import Autumn from '../Test-Main/Test3_Autumn';
import BackBar from "../Tools/BackBar";

const Test3_Autumn = () => {

    const backgroundStyle = {  
        fontFamily: 'Noto Sans KR, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.5%',
        padding: '0px',
        margin: '0px',
      };

    return (
        <div style={backgroundStyle}>
            <BackBar pageName="퍼스널컬러 진단결과(가을)"/>
            <Autumn />
        </div>
    );
};
export default Test3_Autumn;