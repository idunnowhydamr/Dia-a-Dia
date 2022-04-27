import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/style.css"
import {
  Buton
} from "../../Elements/Formulario";

function Button(props) {
  return (
    <>
      <Link to={props.direccion}>
        <Buton
          onClick={props.onClick}
          className="text-center btn btn-dark m-2 rounded"
          type={props.type}
        >
        {props.buttonText}
        </Buton>
      </Link>
    </>
  );
}

export default Button;
