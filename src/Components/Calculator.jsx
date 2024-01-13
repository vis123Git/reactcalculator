import React, { useState } from "react";
import Button from "./Button";
import "../calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, setter) => {
    const inputValue = e.target.value;
    setter(inputValue);
  };

  const performOperation = (operation) => {
    if (!num1 || !num2 || isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setErrorMessage("Please enter valid numbers for both inputs.");
      setResult(null);
      return;
    }

    setErrorMessage("");

    switch (operation) {
      case "add":
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case "subtract":
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case "multiply":
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case "divide":
        if (parseFloat(num2) === 0) {
          setErrorMessage("Cannot divide by zero.");
          setResult(null);
        } else {
          setResult(parseFloat(num1) / parseFloat(num2));
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator-box">
      <h1>React Calculator</h1>
        <input style={{ minWidth: "95%", outline: "none", border: "1px solid lightgray", height: "20px", margin: "10px 0px" }} type="number" placeholder="Please enter number..." value={num1} onChange={(e) => handleInputChange(e, setNum1)} />      
        <input style={{ minWidth: "95%", outline: "none", border: "1px solid lightgray", height: "20px", margin: "10px 0px" }} type="number" placeholder="Please enter number..." value={num2} onChange={(e) => handleInputChange(e, setNum2)} />      <div>
        <Button className="calculator-button" name="+" operation="add" performOperation={performOperation} />
        <Button name="-" operation="subtract" performOperation={performOperation} />
        <Button name="*" operation="multiply" performOperation={performOperation} />
        <Button name="/" operation="divide" performOperation={performOperation} />
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      {result !== null && <div style={{ color: "green" }}>Result: {result.toFixed(2)}</div>}
    </div>
  );
};

export default Calculator;
