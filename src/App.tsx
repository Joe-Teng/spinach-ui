import React, { useState } from "react";
import "./styles/index.scss";
import SButton from "./components/Button/index";
import SModal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App m-font-13">
      <SButton
        styles={{
          background: "red",
          color: "#FFF",
        }}
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
      >
        <div>1231231231231</div>
      </SModal>
    </div>
  );
}

export default App;
