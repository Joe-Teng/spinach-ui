import React, { useRef, useEffect } from "react";

const ReactEvent = () => {
  const parentRef = useRef<any>();
  const childRef = useRef<any>();

  useEffect(() => {
    console.log(
      "%cReactEvent.tsx line:8 object",
      "color: #007acc;",
      "document didmount"
    );
    document.addEventListener("click", () => {
      console.log("冒泡到document上");
    });
    parentRef.current?.addEventListener("click", () => {
      console.log(
        "%cReactEvent.tsx line:10 object",
        "color: #007acc;",
        "原生事件： 父元素DOM监听"
      );
    });
    childRef.current?.addEventListener("click", () => {
      console.log(
        "%cReactEvent.tsx line:13 object",
        "color: #007acc;",
        "原生事件：子元素DOM监听"
      );
    });
    return () => {};
  }, []);

  return (
    <div
      className=""
      ref={parentRef}
      onClick={() => {
        console.log("父元素：React合成事件");
      }}
    >
      <div
        ref={childRef}
        onClick={() => {
          console.log("子元素：React合成事件");
        }}
      >
        分析合成事件，原生事件执行顺序
      </div>
    </div>
  );
};

export default ReactEvent;
