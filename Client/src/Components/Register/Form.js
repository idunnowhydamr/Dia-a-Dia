import React from "react";
import "../../CSS/Registro.css";
import Input from "../Commons/Input.js";

class Form extends React.Component {
  state = {
    form: {
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      email: '',
      password: '',
      user: '',
    },
  };


handleChange = async (e) => {
  e.persist();

  await this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value,
    },
  });

  console.log(this.state.form);
};

  render() {
    
    return (
  
     < div className="m-5 justify-content-center">
      <h1 className="text-center">Registro</h1>

      <Input name="nombre1"
    type="text"
    inputTitle="Nombre 1"
    placeholder="Ingresar Primer Nombre"
    arialLabel="Primer Nombre"
    required="required"
    onChange={this.handleChange}/>
      <div class="btn-group m-3 col-sm-5 d-flex justify-content-center">
        <a
          href="www.hola.com"
          className="p-4 text-center btn btn-dark m-2 rounded-pill"
          aria-current="page"
        >
          Siguiente
        </a>
        <a
          href="www.hola.com"
          class="p-4 text-center btn btn-dark m-2 rounded-pill"
        >
          Volver
        </a>
      </div>
    </div>
    );
  }
}

export default Form
