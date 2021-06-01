import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import "./_style.scss";

export type ButtonType = "fill" | "border" | "link";

interface BaseButtonProps {
  /** type of the button */
  buttonType?: ButtonType;
  /** className of the button */
  className?: String;
  /** lik type button should have href */
  href?: string;
  /** children */
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const SButton: FC<ButtonProps> = (props) => {
  const {
    children = <span>button</span>,
    buttonType = "fill",
    className,
    styles,
    ...restProps
  } = props;

  const classes = classNames("s-btn", className, {
    [`s-btn-${buttonType}`]: buttonType,
  });

  return buttonType && buttonType === "link" ? (
    <a>{children}</a>
  ) : (
    <button className={classes} style={styles} {...restProps}>
      {children}
    </button>
  );
};

export default SButton;
