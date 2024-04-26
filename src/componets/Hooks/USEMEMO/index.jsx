import React, { useMemo, useState } from "react";

const UseMemoFunction = () => {
  const [number, setNumber] = useState(6);
  function fib(n) {
    if (n === 1 || n == 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }
 const fibMmeo =  useMemo(() => fib(number), [number]);
  return (
    <div>
      <h1>Use Memo Function</h1>
      <h1>fib :{fibMmeo}</h1>
    </div>
  );
};

export default UseMemoFunction;
