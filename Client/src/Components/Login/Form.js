  import React from "react";
import "../../CSS/style.css";
import Input from "../Commons/Input.js";
import Button from "../Commons/Button.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        user: "",
      }
    };
  }

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
      <div className="m-5 content justify-content-center">
        <h1 className="title text-center">Iniciar Sesion</h1>
        <div className="padre row m-5 justify-content-center">
        <Input
          name="emailUser"
          type="text"
          inputTitle="Correo o Usuario"
          placeholder="Ingresar el Correo"
          arialLabel="email"
          required="required"
          onChange={this.handleChange}
        />
        <Input
          name="password"
          type="password"
          inputTitle="Contraseña"
          placeholder="Ingresar la Contraseña"
          arialLabel="password"
          onChange={this.handleChange}
        />
        <div className="btn-group m-3 col-sm-5 d-flex justify-content-center">
          <Button buttonText="Iniciar" onClick={this.handleSubmit}/>
          <Button buttonText="Registrar"/>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Form;