import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import "./_style.scss";

import { Button } from "antd";
import "antd/lib/button/style/css";

const MButton = (props) => {
  const { className, children, type = "primary", size, ...restProps } = props;
  const classes = classNames("m-btn", className, {
    [`m-btn-${type}`]: type,
    [`m-btn-${size}`]: size,
  });

  return (
    <button className={classes} {...restProps}>
      {children || "button"}
    </button>
  );
};

export default MButton;
