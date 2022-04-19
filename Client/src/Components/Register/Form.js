import React from "react";
import "../../CSS/style.css";
import Input from "../Commons/Input.js";
import Button from "../Commons/Button.js";
class Form extends React.Component {
  //Se crea el constructor y se inicializan variables
  constructor(props) { 
    super(props);
    this.state = {
      form: {
        nombre1: "",
        nombre2: "",
        apellido1: "",
        apellido2: "",
        email: "",
        password: "",
        user: "",
      }
    };
  }
  
  //Función asincrona para leer las variables de los input
  handleChange = async (e) => {
    e.persist();//Returns a Promise that resolves to true if the user agent is able to persist your site's storage.(StorageManager)
    await this.setState({ //Se actualiza el estado
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });

  };
  render() {
    return (
      <div className="m-5 justify-content-center">
        <h1 className="text-center">Registro</h1>
        <div className="padre row m-5 justify-content-center">
        <Input
          name="nombre1"
          type="text"
          inputTitle="Nombre 1"
          placeholder="Ingresar Primer Nombre"
          arialLabel="Primer Nombre"
          required="required"
          onChange={this.handleChange}
        />
        <Input
          name="nombre2"
          type="text"
          inputTitle="Nombre 2"
          placeholder="Ingresar Segundo Nombre"
          arialLabel="Segundo Nombre"
          onChange={this.handleChange}
        />
        <Input
          name="apellido1"
          type="text"
          inputTitle="Apellido 1"
          placeholder="Ingresar Primer Apellido"
          arialLabel="Primer Apellido"
          required="required"
          onChange={this.handleChange}
        />
         <Input
          name="apellido2"
          type="text"
          inputTitle="Apellido 2"
          placeholder="Ingresar Segundo Apellido"
          arialLabel="Segundo Apellido"
          onChange={this.handleChange}
        />
        <Input
          name="email"
          type="email"
          inputTitle="Correo"
          placeholder="Ingresar Correo Electronico"
          arialLabel="Correo Electronico"
          required="required"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          type="password"
          inputTitle="Contraseña"
          placeholder="Ingresar Contraseña Nueva"
          arialLabel="Contraseña"
          required="required"
          onChange={this.handleChange}
        />
        <Input
          name="user"
          type="text"
          inputTitle="Usuario"
          placeholder="Ingresar Usuario Nuevo"
          arialLabel="Usuario"
          required="required"
          onChange={this.handleChange}
        />
        <div className="btn-group m-3 col-sm-5 d-flex justify-content-center">
          <Button buttonText="Registrar" onClick={this.handleSubmit}/>
          <Button buttonText="Volver" direccion="/"/>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Form;
