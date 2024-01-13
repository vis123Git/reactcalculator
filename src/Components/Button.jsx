import React from 'react';

const Button = ({ name, operation, performOperation }) => {
  const handleClick = () => {
    performOperation(operation);
  };

  return (
    <button style={{backgroundColor:"black", color:"white", border:"none", margin :"5px", padding: "5px 20px", textAlign: "center", fontWeight:"bold", marginTop:"20px"}} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
