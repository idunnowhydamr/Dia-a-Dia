import React from "react";
import { Modal } from "reactstrap";

//Se crean props para hacer el modal dinamico
function ModalContainer(props) {
  return (
    <>
      <Modal isOpen={props.showw} toggle={props.toggleModal} className={props.className}>
        {props.children}
      </Modal>
    </>
  );
}

export default ModalContainer;
