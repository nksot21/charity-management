import React from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  const width = props.width || "fit-content";
  return (
    <div className={classes.modal} style={{ width }}>
      {props.children}
    </div>
  );
};

function Modal(props) {
  const hideModalHandler = () => {
    props.onCloseModal()
  };

  return (
    <>
      {createPortal(
        <Backdrop onClick={hideModalHandler} />,
        document.getElementById("backdrop")
      )}
      {createPortal(
        <ModalOverlay width={props.width}>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
