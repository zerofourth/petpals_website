import React from 'react';

const StartChoices = ({ handleResponse }) => {
  const buttonStyle = {
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '20px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '12px',
  };

  const handleButtonClick = (responseType) => {
    handleResponse(responseType);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => handleButtonClick('Emergency')}>
        Emergency
      </button>
      <button style={buttonStyle} onClick={() => handleButtonClick('Adoption')}>
        Adoption
      </button>
      <button style={buttonStyle} onClick={() => handleButtonClick('Other')}>
        Other
      </button>
    </div>
  );
};

export default StartChoices;