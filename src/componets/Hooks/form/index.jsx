import React, { useState } from "react";

export const FormSubmit = ({ dispatch }) => {
  const [video, setVideo] = useState();
  const handleSubmit = () => {
    // AddVideo(video);
    dispatch({ type: "ADD", payload: video });
  };
  const handleChange = (e) => {
    setVideo({
      ...video,
      // this method to get the different  property of video object.,other case we difined the multiple state
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
      <button onClick={handleSubmit}>submit button</button>
    </>
  );
};
