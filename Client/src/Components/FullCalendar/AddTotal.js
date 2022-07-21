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
  baseURL: `http://localhost:2020/`,
});

//HOOKS para el formulario
const AddTotal = () => {
    const [money, moneyChange] = useState({campo: '', valido: null});

  //Guardar
  const cookies = new Cookies();
  const id = cookies.get("id"); //Cookies enviada desde el login


  const onSubmit = async () =>{
    //Se hace peticion a la api
    await api.post('/total', {
        total: money.campo,
        userid: id
      })
      Alert.fire({
        icon: 'success',
        title: 'Guardado Correctamente.',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
       //Redirigimos la pagina cuando inicie sesion
      window.location.href="/Calendar"
      });
      
    }
  return (
    <main className=" content justify-content-center bg-dark" style={{ backGround:"black"}}>
      <Title className="text-light" style={{ marginBottom:"20px", marginTop:"20px" }}>Dinero Total</Title>
      <Formulario action="" className="d-flex bg-light p-4" style={{ marginRight:"30px",marginBottom:"20px"}}>
        <div className="align-items:center justify-content:center" >
        <Input
          estado={money}
          cambiarEstado={moneyChange}
          label="Dinero Total"
          placeholder="Ingrese la cantidad de dinero que posee"
          style={{ width: "19em"}}
        />
        <div className="btn-group m-4 justify-content-center">
          <Button buttonText="Guardar" type="submit" className="text-center btn btn-info m-2 rounded" onClick={onSubmit} />
        </div>
        </div>
      </Formulario>
    </main>
  );
};

export default AddTotal;