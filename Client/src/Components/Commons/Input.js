import React from "react";
import "../../CSS/style.css";

function Input(props) {
  return (
    <>
      <div className="m-3 col-sm-5">
              <h4>{props.inputTitle}</h4>
              <input
                name={props.name}
                type={props.type}
                className="hijo form-control"
                placeholder={props.placeholder}
                aria-label={props.arialLabel}
                required={props.required}
                onChange={props.onChange}
              />
      </div>
    </>
  );
}

export default Input;
