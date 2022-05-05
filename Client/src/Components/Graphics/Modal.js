import React from "react";
import "../../CSS/style.css";
import { Modal } from "reactstrap";

//Se crean props para hacer el modal dinamico
function ModalContainer(props) {
  return (
    <>
      <Modal isOpen={props.showw} toggle={props.toggleModal}>
        {props.children}
      </Modal>
    </>
  );
}

export default ModalContainer;
