import React from "react";

import Form from "../Components/Login/Form";
import dataProyect from "../utils/mocks/dataProyect.js";

import {
  Cover,
  ContainerCover,
  ContainerInfo,
  CoverH1,
  CoverH2,
  PInfo} from "../Elements/LoginElements";

function Login() {
  return (
    <>
      <Cover>
        <div className="wave w1"></div>
        <div className="wave w2"></div>
        <ContainerCover>
          <ContainerInfo>
            <CoverH1>DIA A</CoverH1>
            <CoverH2>DIA</CoverH2>
            <PInfo>{dataProyect.map((dataProyect)=>(
              dataProyect.problema
            ))}</PInfo>
          </ContainerInfo>
          <Form />
        </ContainerCover>
      </Cover>
    </>
  );
}

export default Login;
