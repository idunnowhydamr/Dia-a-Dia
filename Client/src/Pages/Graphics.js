import React from "react";
import LineChart from "../Components/Graphics/LineChart";
import BarChart from "../Components/Graphics/BarChart";
import DoughnutChart from "../Components/Graphics/DoughnutChart";
import Header from "../Components/Commons/Header";
import Button from "../Components/Commons/Button";
import { CardContainer, Container } from "../Elements/GraphicsElements";
function Graphics() {
  return (
    <>
      <Header />
      <Container>
      <CardContainer className="card bg-light">
        <LineChart className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Button buttonText="Ver"/>
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
        </div>
      </CardContainer>
      </Container>
    </>
  );
}

export default Graphics;
