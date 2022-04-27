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
<<<<<<< HEAD
        <div class="container__cover">
          <div class="container__info">
            <h1>DIA A</h1>
            <h2>DIA</h2>
         
            <Info data = {dataProyect}/>
          </div>
=======
        <ContainerCover>
          <ContainerInfo>
            <CoverH1>DIA A</CoverH1>
            <CoverH2>DIA</CoverH2>
            <Info data={dataProyect} />
          </ContainerInfo>
>>>>>>> e34efcd585517e4b66ff3a810eb1305baf56d6f1
          <Form />
        </ContainerCover>
      </Cover>
    </>
  );
}

export default Login;
