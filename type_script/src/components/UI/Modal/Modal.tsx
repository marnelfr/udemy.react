import React, { MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { modalActions } from "../../../redux/modal";

const Backdrop: React.FC = (props) => {
  const dispatch = useAppDispatch();

  const clickHandler: MouseEventHandler = (event) => {
    event.preventDefault();
    dispatch(modalActions.hideModal());
  };

  return <div onClick={clickHandler} className={classes.backdrop} />;
};

const ModalContent: React.FC<{ children: ReactNode }> = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const show = useAppSelector((state) => state.modal.display);

  return (
    <>
      {show && ReactDOM.createPortal(<Backdrop />, document.body)}
      {show &&
        ReactDOM.createPortal(
          <ModalContent>{children}</ModalContent>,
          document.body
        )}
    </>
  );
};

export default Modal;
