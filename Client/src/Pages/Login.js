import React from "react";
import Info from "../Components/Commons/Info.js";
import Form from "../Components/Login/Form";
import dataProyect from "../utils/mocks/dataProyect.js"

function Login() {
  return (
    <>
      <div className="cover">
        <div className="wave w1"></div>
        <div className="wave w2"></div>
        <div class="container__cover">
          <div class="container__info">
            <h1>DIA A</h1>
            <h2>DIA</h2>
         
            <Info data = {dataProyect}/>
          </div>
          <Form />
        </div>
      </div>
      
      
    </>
  );
}

export default Login;
