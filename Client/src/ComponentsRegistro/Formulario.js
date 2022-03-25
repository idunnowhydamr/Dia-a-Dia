import React, { Component }  from "react";
import "../CSS/Registro.css"
import PropsFormulario from "../ComponentsRegistro/PropsFormulario.json"

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo:"Nombre 1",
            type:"text",
            className:"hijo form-control",
            placeholder:"Ingresar Primer nombre",
            arialabel:"Primer nombre",
        };
      }
    render(){

    
  return (
    <><div className="m-5 justify-content-center">
          <h1 className="text-center">Registro</h1>
      </div><div className="padre row m-5 justify-content-center">
      <div className="m-3 col-sm-5">
                  <h4>{this.state.titulo}</h4>
                  <input
                      type={this.state.type}
                      className={this.state.className}
                      placeholder={this.state.placeholder}
                      aria-label={this.state.arialabel} />
              </div>
              
              <div className="m-3 col-sm-5">
                  <h4>Nombre 2</h4>
                  <input
                      type="text"
                      className="hijo form-control"
                      placeholder="Ingresar Segundo nombre"
                      aria-label="Segundo Nombre" />
              </div>
              <div className="m-3 col-sm-5">
                  <h4>Apellido 1</h4>
                  <input
                      type="text"
                      className="hijo form-control"
                      placeholder="Ingresar Primer Apellido"
                      aria-label="Primer Apellido" />
              </div>
              <div className="m-3 col-sm-5">
                  <h4>Apellido 2</h4>
                  <input
                      type="text"
                      className="hijo form-control"
                      placeholder="Ingresar Segundo Apellido"
                      aria-label="Segundo Apellido" />
              </div>
              <div className="m-3 col-sm-5">
                  <h4>Email</h4>
                  <input
                      type="email"
                      className="hijo form-control"
                      placeholder="Ingresar Correo Electronico"
                      aria-label="Correo Electronico" />
              </div>
              <div className="m-3 col-sm-5">
                  <h4>Contraseña</h4>
                  <input
                      type="password"
                      className="hijo form-control"
                      placeholder="Ingresar Contraseña Nueva"
                      aria-label="Contraseña" />
              </div>
              <div className="m-3 col-sm-5 ">
                  <h4>Usuario</h4>
                  <input
                      type="text"
                      className="hijo form-control"
                      
                      placeholder="Ingresar Usuario Nuevo"
                      aria-label="Usuario" />
              </div>
              <div class="btn-group m-3 col-sm-5 d-flex justify-content-center">
                  <a href="www.hola.com" class="p-4 text-center btn btn-dark m-2 rounded-pill" aria-current="page">
                      Siguiente
                  </a>
                  <a href="www.hola.com" class="p-4 text-center btn btn-dark m-2 rounded-pill">
                      Volver
                  </a>
              </div>
          </div></>
  );
    }
}

export default Formulario;
