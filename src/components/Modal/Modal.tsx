import React, { FC, useEffect } from "react";
import "./_styles.scss";
import classNames from "classnames";
import { CloseOutlined } from "@ant-design/icons";

interface ModalProps {
  /** show or hidden the component */
  visible: boolean;
  /** title of the component */
  title?: string;
  /** width of the component */
  width?: number;
  /** custom classes of container */
  className?: string;
  /** custom classes of content */
  contentClassName?: string;
  /** padding of the container */
  paddingHorizontal?: number;
  /** callback of close the component */
  onClose?: () => void;
  /** callback of click the confirm button */
  onConfirm?: () => void;
  /** footer buttons */
  btns?: string[];
}

const SModal: FC<ModalProps> = (props) => {
  /** initial props */
  const {
    visible = false,
    title = "Test Title",
    className = "",
    contentClassName = "",
    width = 350,
    paddingHorizontal = 24,
    onClose = () => {},
    onConfirm = () => {
      onClose();
    },
    children,
    btns = [],
  } = props;
  const classes = classNames("s-modal", className, {});
  const contentClasses = classNames("s-modal-content", contentClassName, {
    [`s-modal-pd-horizontal-${paddingHorizontal}`]: paddingHorizontal,
    [`s-modal-content-${width}`]: width && width > 0,
  });

  /**
   * disablePageScrolling
   * @params {string} type 'hidden': disable; 'scroll': allow;
   */
  const disablePageScrolling = (type: string): void => {
    document.getElementsByTagName("body")[0].style.overflow = type;
  };

  useEffect(() => {
    disablePageScrolling(visible ? "hidden" : "scroll");
  }, [visible]);

  return visible ? (
    <div className={classes} onClick={onClose}>
      <div
        className={contentClasses}
        onClick={(e: React.SyntheticEvent) => {
          e.stopPropagation();
        }}
      >
        <div className="s-modal-header">
          <span>{title}</span>
          <CloseOutlined onClick={onClose} />
        </div>
        <div className="s-modal-body">{children}</div>
        {btns && btns.length > 0 && (
          <div className="s-modal-footer">
            {btns.length === 2 && (
              <React.Fragment>
                <div
                  className="modal-footer-btn s-btn-cancle"
                  onClick={onClose}
                >
                  {"取消"}
                </div>
                <div
                  className="modal-footer-btn s-btn-confirm"
                  onClick={onConfirm}
                >
                  {"确认"}
                </div>
              </React.Fragment>
            )}
            {btns.length > 2 && (
              <React.Fragment>
                <div className="modal-footer-links">
                  {btns.slice(2).map((item: string, index: number) => (
                    <span
                      key={`s-btn-link-${index}`}
                      className="modal-footer-btn s-btn-link"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="modal-footer-btns">
                  <div
                    className="modal-footer-btn s-btn-cancle"
                    onClick={onClose}
                  >
                    {"取消"}
                  </div>
                  <div
                    className="modal-footer-btn s-btn-confirm"
                    onClick={onConfirm}
                  >
                    {"确认"}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SModal;
