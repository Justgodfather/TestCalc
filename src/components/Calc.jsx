import React, { useState } from "react";

const Calc = () => {
  let [calc, setCalc] = useState(0);

  return (
    <div className="calc-style">
      <button id="input4">{calc}</button>
      <button
        id="input"
        onClick={() => {
          setCalc(++calc);
        }}
      >
        +
      </button>
      <button
        id="input2"
        onClick={() => {
          calc > 0 ? setCalc(calc - 1) : setCalc(0);
        }}
      >
        -
      </button>
      <button
        id="input3"
        onClick={() => {
          setCalc(0);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Calc;
