import React, { useState } from "react";
function Question1() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  function fibonacci(num) {
    var temp1 = 1;
    var temp2 = 1;
    var sum;
    var i = 0;
    for (i = 0; i < num; i++) {
      sum = temp1 + temp2;
      temp1 = temp2;
      temp2 = sum;
    }
    return temp2;
  }
  const newdata = count.map((data) => {
    return (
      <div style={{ textAlign: "center" }}>
        {fibonacci(data)}
        <br />
      </div>
    );
  });

  return (
    <div>
      {newdata}
    </div>
  );
}

export default Question1;
