import React from "react";
import "./styles/index.scss";
import MButton from "./components/Button";

function App() {
  return (
    <div className="App m-font-13">
      <MButton
        size={"large"}
        onClick={() => {
          console.log(111);
        }}
      />
      <MButton
        onClick={() => {
          console.log(111);
        }}
      />
      <MButton
        size={"small"}
        onClick={() => {
          console.log(111);
        }}
      />
      <MButton
        type={"default"}
        onClick={() => {
          console.log(111);
        }}
      />
      <MButton
        type={"default"}
        size={"small"}
        onClick={() => {
          console.log(111);
        }}
      />
    </div>
  );
}

export default App;
