import React, { useState } from "react";

import axios from "axios";

import Cookies from "universal-cookie";
import Alert from "sweetalert2";

//Componentes
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";

//Elementos
import { Formulario, Title} from "../../Elements/Formulario";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

//HOOKS para el formulario
const AddEvent = () => {
  const [eventObjetive, setEventObjetive] = useState({ campo: "", valido: null });
  const [date, setDate] = useState({ campo: "", valido: null });

  //Guardar
  const cookies = new Cookies();
  const activeId = cookies.get("idActive"); //Cookies enviada desde EventCalendar.js

  const onSubmit = async () =>{
    //Se hace peticion a la api
    await api.post('event/', {objetive: eventObjetive.campo,date: date.campo, IdActivo: activeId})
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
      <Title className="text-light" style={{ marginBottom:"20px", marginTop:"20px" }}>Agregar Objetivo</Title>
      <Formulario action="" className="d-flex bg-light p-4" style={{ marginRight:"30px",marginBottom:"20px"}}>
        <div className="align-items:center justify-content:center" >
        <Input
          estado={eventObjetive}
          cambiarEstado={setEventObjetive}
          tipo="text"
          label="Objetivo"
          placeholder="Ejem: Ahorrar para viajar"
          name="objetivo"
        />
        <Input
          estado={date}
          cambiarEstado={setDate}
          tipo="date"
          label="Fecha"
          name="fecha"
        />

        <div className="btn-group m-4 justify-content-center">
          <Button buttonText="Guardar" type="submit" className="text-center btn btn-info m-2 rounded" onClick={onSubmit} />
        </div>
        </div>
      </Formulario>
    </main>
  );
};

export default AddEvent;
