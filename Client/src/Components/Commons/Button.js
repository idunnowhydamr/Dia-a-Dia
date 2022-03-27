import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Registro.css"
function Button() {
  return (
    <>
      <Link to={this.props.direccion}>
        <button
          onClick={this.props.onClick}
          className="p-4 text-center btn btn-dark m-2 rounded-pills"
          type={this.props.type}
        >
        {this.props.buttonText}
        </button>
      </Link>
    </>
  );
}

export default Button;
