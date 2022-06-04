import React, { useState } from "react";

import axios from "axios";

import Cookies from "universal-cookie";
import Alert from "sweetalert2";

//Componentes
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";

//Elementos
import { Formulario, Title, Label} from "../../Elements/Formulario";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

//HOOKS para el formulario
const Form = () => {
  const [activeName, activeNameChange] = useState({ campo: "", valido: null });
  const [activeValue, activeValueChange] = useState({ campo: "", valido: null });
  const [accionId, setAccionId] = useState ();

  //Metodo para cambiar la opcion seleccionada
  const handleSelect = (event) => {
    if(event.target.value==="Ingreso"){
      setAccionId(1)
    }else{
      setAccionId(2)
    }
    
  }
  //Opciones para seleccionar
  const categories= [
    {id: 1, value: '-----------------------'},
    {id: 2, value: 'Ingreso'},
    {id: 3, value: 'Gasto'}
  ];

  //Guardar
  const cookies = new Cookies();
  const id=cookies.get('id'); //Cookies enviada desde el login

  const onSubmit = async () =>{
    //Se hace peticion a la api
    await api.post('active/', {nombreActivo: activeName.campo, valorActivo: activeValue.campo, idAccion: accionId, idUsuario: id})
     //Se recibe la respuesta
     .then(response => {
      Alert.fire({
        icon: 'success',
        title: `${response.data.msg}`,
        showConfirmButton: false,
        timer: 1800
      }).then(() => {
       //Redirigimos la pagina cuando inicie sesion
      window.location.href="/Calendar"
      });
    })

    .catch(error=>{
      if(error.response){
        //Se recibe error programado desde el backend
        Alert.fire({
          icon: 'error',
          title: `${error.response.data.msg}`,
          showConfirmButton: false,
          timer: 2000
        });
      }    
  });
  }

  return (
    <main className=" content justify-content-center bg-dark">
      <Title className="text-light" style={{ marginBottom:"20px", marginTop:"20px" }}>Agregar Activo</Title>
      <Formulario action="" className="d-flex bg-light p-4" style={{ marginRight:"30px",marginBottom:"20px"}}>
        <div className="align-items:center justify-content:center" >
        <Input
          estado={activeName}
          cambiarEstado={activeNameChange}
          tipo="text"
          label="Nombre"
          placeholder="Digite el nombre del activo"
          name="nombreActivo"
        />
        <Input
          estado={activeValue}
          cambiarEstado={activeValueChange}
          tipo="number"
          label="Valor"
          placeholder="Digite el valor del activo"
          name="valorActivo"
        />
           <div class="form-group mt-2">
      <Label for="sel1">Seleccionar:</Label>
      <select onChange={handleSelect}>
      {categories.map(category =>
          <option id={category.id}>
             {category.value}
          </option>
      )}
      </select>
      </div>

        <div className="btn-group m-4 justify-content-center">
          <Button buttonText="Guardar" type="submit" className="text-center btn btn-info m-2 rounded" onClick={onSubmit} />
        </div>
        </div>
      </Formulario>
    </main>
  );
};

export default Form;
