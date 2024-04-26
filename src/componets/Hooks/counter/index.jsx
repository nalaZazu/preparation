import React, { useState } from "react";

const Counter = () => {
     const [count, setCount] = useState(0);
    const handleCountPositive = () => {
      setCount((pre) => pre + 1)

    };
    const handleCountnegtive = () => {
      setCount((pre) => pre - 1);

    };
  // here is play button condition
  const [Playing, setPlaying] = useState(false);
  const handlePlay = () => {
    setPlaying(!Playing);
  };
  const user = {
    name: "zazu",
    classUser: {
      first: 40,
      second: 50,
    },
  };
  console.log(user)
  const user2 = (user.classUser.second = 60);
  console.log("user2:", user2);

  return (
    <div>
    {/* Use State */}
      <h1> Use State</h1>
      <h1>{Playing ? "Play" : "pasuse"}</h1>
      <button onClick={handlePlay} className="button1">play button</button>
      <h1>{count}</h1>
      <div className="button">
        <button onClick={handleCountPositive} className="button1">
          Count++
        </button>
        <button className="button2" onClick={handleCountnegtive}>
          Count--
        </button>
      </div>
    </div>
  );
};

export default Counter;
