import React, { useState } from "react";
import "./styles/index.scss";
import SButton from "./components/Button/index";
import SModal from "./components/Modal/Modal";
import ReactEvent from "./components/ReactEvent";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App m-font-13">
      {/* <SButton
        buttonShape="fillet"
        buttonType="link"
        className="ft-14"
        onClick={() => {
          setShowModal(true);
        }}
      ></SButton>
      <SModal
        visible={showModal}
        title={"title"}
        width={470}
        paddingHorizontal={24}
        onClose={() => {
          setShowModal(false);
        }}
        btns={["确定", "取消", "other links"]}
        renderBottom={() => <div>123</div>}
      >
        <div>1231231231231</div>
      </SModal> */}
      <ReactEvent />
    </div>
  );
}

export default App;
