import React, { useState } from "react";

export const FormSubmit = () => {
  const [video, setVideo] = useState({ like: "2", views: "28k" });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    console.log("e:", e.target.value);
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="button">
        <input
          name="title"
          className="inputField"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          name="url"
          type="url"
          className="inputField"
          placeholder="url"
          onChange={handleChange}
        />
      </div>
      <button>submit button</button>
    </>
  );
};
