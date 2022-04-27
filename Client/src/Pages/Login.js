import React from "react";
import Info from "../Components/Login/Info.js";
import Form from "../Components/Login/Form";
import dataProyect from "../utils/mocks/dataProyect.js";

import {
  Cover,
  ContainerCover,
  ContainerInfo,
  CoverH1,
  CoverH2} from "../Elements/LoginElements";

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
            <Info data={dataProyect} />
          </ContainerInfo>
          <Form />
        </ContainerCover>
      </Cover>
    </>
  );
}

export default Login;
