import React from "react";
import "../CSS/Registro.css"
function Input(){
    return(
        <>
            <h4>{this.props.InputTitle}</h4>
            <input
                      type={this.props.type}
                      className="hijo form-control"
                      placeholder={this.props.placeholder}
                      aria-label={this.props.arialLabel}
                      required={this.props.required}
                      onChange={this.props.onChange}
             />
        </>
    )
}

export default Input;