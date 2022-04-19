import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/style.css"
function Button(props) {
  return (
    <>
      <Link to={props.direccion}>
        <button
          onClick={props.onClick}
          className="p-4 text-center btn btn-dark m-2 rounded-pill"
          type={props.type}
        >
        {props.buttonText}
        </button>
      </Link>
    </>
  );
}

export default Button;
