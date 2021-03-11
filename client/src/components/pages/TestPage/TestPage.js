import React, { useState } from "react";

function TestPage() {
  const [total, setTotal] = useState(null);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);

  const totalChange = (e) => {
    setTotal(e);
    setNum1(e);
    setNum2(0);
    if (e > 10) {
      setTotal(10);
    }
    if (e < 0) {
      setTotal(0);
    }
  };

  const num1Change = (e) => {
    if (e >= total) {
      setNum1(total);
      setNum2(0);
    }
    if (e >= 0) {
      let current = 0;
      current = total - e;
      setNum1(total - current);
      setNum2(current);
    }
  };

  const num2Change = (e) => {
    if (e >= total) {
      setNum2(total);
      setNum1(0);
    }
    if (e >= 0) {
      let current = 0;
      current = total - e;
      setNum2(total - current);
      setNum1(current);
    }
  };

  return (
    <div>
      <input
        type="number"
        name="total"
        onChange={(e) => totalChange(e.target.value)}
        value={total}
      />
      <input
        type="number"
        name="num1"
        onChange={(e) => num1Change(e.target.value)}
        value={num1}
      />
      <input
        type="number"
        name="num2"
        onChange={(e) => num2Change(e.target.value)}
        value={num2}
      />
    </div>
  );
}

export default TestPage;
