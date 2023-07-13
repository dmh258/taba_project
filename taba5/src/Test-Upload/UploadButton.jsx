import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//navigate가 안됨
function FileUploader() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const navigate = useNavigate();

  // 파일 선택 시 호출되는 함수
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file.name);
  };

  // 파일 전송 시 호출되는 함수
  const handleFileUpload = () => {
    if (selectedFile) {
      navigate('/test/spring');
      // const formData = new FormData();
      // formData.append('file', selectedFile);

      // fetch('http://your-server-url', {
      //   method: 'POST',
      //   body: formData
      // })
      //   .then(response => {
      //     // 서버 응답 처리
      //     // 예제에서는 파일 전송 후 /makeup/main 페이지로 이동합니다.
      //     navigate('/makeup/main');
      //   })
      //   .catch(error => {
      //   });
    } else {
      console.log('파일을 선택해주세요.');
    }
  };


  //style
  const buttonStyle = {
    width: '200px',
    height: '50px',
    border: 'none',
    backgroundColor: '#ffffff',
    margin: '60px 0 0',
    padding: '0',
    cursor: 'pointer',
  };

  return (
    <div >
      <div style={{width: '450px', display: 'flex', justifyContent: 'space-between', }}>
          <div style={{display:'flex', flexDirection: 'column'}}>
            <div>
            <label htmlFor="file-input" style={buttonStyle}>
              <img src="/image/upload/select.svg" alt="파일 선택" />
            </label>
            <input id="file-input" type="file" style={{display: 'none' }} onChange={handleFileSelect} />
          </div>
          <div>
          {fileName && <p style={{ textAlign: 'start', margin: '3px 20px',}}>{fileName}</p>}
          </div>
        </div>
        <button style={buttonStyle} onClick={handleFileUpload}>
          <img src="/image/upload/submit-test.svg" alt="퍼스널컬러 진단" />
        </button>
      </div>
    </div>
  );
}

export default FileUploader;
