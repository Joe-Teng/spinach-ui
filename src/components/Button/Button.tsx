import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import "./_style.scss";

export type ButtonType = "fill" | "border" | "link";
export type ButtonShape = "square" | "circular" | "fillet";

interface BaseButtonProps {
  /** type of the button */
  buttonType?: ButtonType;
  /** shape of the button */
  buttonShape?: ButtonShape;
  /** className of the button */
  className?: String;
  /** lik type button should have href */
  href?: string;
  /** styles of the button */
  styles?: React.CSSProperties;
  /** children */
  children?: React.ReactNode;
}

/**
 * native event
 */
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const SButton: FC<ButtonProps> = (props) => {
  const {
    children = <span>button</span>,
    buttonShape = "square",
    buttonType = "fill",
    className,
    styles,
    ...restProps
  } = props;

  const classes = classNames("s-btn", className, {
    [`s-btn-${buttonShape}`]: buttonShape,
    [`s-btn-${buttonType}`]: buttonType,
  });

  return buttonType && buttonType === "link" ? (
    <a className={classes} style={styles} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} style={styles} {...restProps}>
      {children}
    </button>
  );
};

export default SButton;
