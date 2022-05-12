import React, { useState } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import Button from "../Commons/Button"
import Modal from "./Modal"
import dataProyect from "../../utils/mocks/dataProyect";
import { CardContainer, Container } from "../../Elements/GraphicsElements";

function Graphics() {
  // Se crea un objeto de hooks para mostrar el modal
  const [show, setShow] = useState({
    showLine: false,
    showBar: false,
    showDoughnut: false,
  });
  //Metodos para cambiar el estado de las hooks(True para abrir/ False para cerrar) siempre se va activar para poner el valor contrario.
  const toggleModal = () => setShow({ ...show, showLine: !show.showLine });
  const toggleModal1 = () => setShow({ ...show, showBar: !show.showBar });
  const toggleModal2 = () => setShow({ ...show, showDoughnut: !show.showDoughnut });

  return (
    <>
      <Container>
        <CardContainer className="card bg-light">
          <LineChart className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Modal showw={show.showLine} toggleModal={toggleModal}>
              <LineChart />
            </Modal>
            <Button onClick={toggleModal} buttonText="Ver" />
          </div>
        </CardContainer>
        <CardContainer className="card bg-light">
          <BarChart className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Modal showw={show.showBar} toggleModal={toggleModal1}>
              <BarChart />
            </Modal>
            <Button onClick={toggleModal1} buttonText="Ver" />
          </div>
        </CardContainer>
        <CardContainer className="card bg-light">
          <DoughnutChart className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Modal showw={show.showDoughnut} toggleModal={toggleModal2}>
              <DoughnutChart />
            </Modal>
            <Button onClick={toggleModal2} buttonText="Ver" />
          </div>
        </CardContainer>
      </Container>
    </>
  );
}

export default Graphics;
