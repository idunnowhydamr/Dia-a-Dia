import React from "react";

function Input(){
    return(
        <>
            <h3>{this.props.InputTitle}</h3>
            <input className={this.props.className} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value} required={this.props.required} />
        </>
    )
}

export default Input;