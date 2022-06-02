import React from "react";
import { TotalContainer } from "../../Elements/GraphicsElements";

//Se crean props para hacer el modal dinamico
function Total(props) {
  return (
    <>
      <TotalContainer>
          <h1>
              Total {props.total}
          </h1>
    </TotalContainer>

    </>
  );
}

export default Total;
