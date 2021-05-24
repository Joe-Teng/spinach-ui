import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import "./_style.scss";

export type ButtonType = "fill" | "border" | "link";

interface ButtonProps {
  /** className of the button */
  className?: String;
  /** type of the button */
  buttonType?: ButtonType;
  /** color of the button */
  themeColor?: String;
}

const SButton: FC<ButtonProps> = (props) => {
  const { buttonType, themeColor } = props;

  /** set the butotn normal styles */
  let styles = {};
  switch (buttonType) {
    case "fill":
      styles = {
        background: themeColor || "#1B1B1B",
        backgroundColor: themeColor || "#1B1B1B",
        color: "#FFF",
        border: `2px solid ${themeColor ? themeColor : "#1B1B1B"}`,
      };
      break;
    case "border":
      styles = {
        background: "#FFF",
        backgroundColor: "#FFF",
        border: `2px solid ${themeColor ? themeColor : "#1B1B1B"}`,
        color: themeColor || "#1B1B1B",
      };
      break;
    default:
      break;
  }

  return <div style={styles}>123</div>;
};

export default SButton;
