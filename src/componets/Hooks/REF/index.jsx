import React, { useRef, useState } from "react";
import { useEffect } from "react";

const RefHook = () => {
  const number = useRef(1);
  const [state, setState] = useState(0);
  console.log(number);
  const handleAdd = () => {
    // setState((pre) => pre + 1);
    number.current += 1;
  };
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.value = "hello";
  }, []);
 
  
  return (
    <div>
      <h1>
        Number: {number.current}
        state: {state}
      </h1>
      <button onClick={handleAdd}>Add</button>

      <input ref={inputRef} type="text" name="title" value="title" />
    </div>
  );
};

export default RefHook;
