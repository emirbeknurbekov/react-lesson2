import React, { useState } from "react";

const Colors = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);
  return (
    <div>
      <div
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
      ></div>
      <button onClick={() => setBackgroundColor("green")}>green</button>
      <button onClick={() => setBackgroundColor("blue")}>blue</button>
      <button onClick={() => setBackgroundColor("#000000")}>black</button>
      <input
        placeholder="width"
        type="number"
        onChange={(event) => setWidth(+event.target.value)}
      />
      <input
        placeholder="height"
        type="number"
        onChange={(event) => setHeight(+event.target.value)}
      />
      <select onChange={(e) => setBackgroundColor(e.target.value)}>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
      </select>
    </div>
  );
};

export default Colors;
