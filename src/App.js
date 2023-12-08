import React from "react";
import Colors from "./components/Colors";
import Title from "./components/Title";

const arr = ["potatoes", "cucumber", "tomato"];

const App = () => {
  return (
    <>
      <Colors />
      <Title text={"Hello"} />
      {arr.map((item) => (
        <Title text={item} />
      ))}
    </>
  );
};

export default App;
