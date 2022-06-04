import React from "react";
import Button from "../Commons/Button.js";
import axios from "axios";
import { Formulario, Title, Label } from "../../Elements/Formulario";
import Alert from "sweetalert2";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

//HOOKS para el formulario
const DeleteEvent = (props) => {

  const onSubmit = async () => {
    //Se hace peticion a la api
    await api
      .delete(`event/${props.eventoId}`)
      //Se recibe la respuesta
      .then((response) => {
        Alert.fire({
          icon: "success",
          title: `${response.data.msg}`,
          showConfirmButton: false,
          timer: 1800,
        }).then(() => {
          //Redirigimos la pagina cuando inicie sesion
          window.location.href = "/Calendar";
        });
      })

      .catch((error) => {
        if (error.response) {
          //Se recibe error programado desde el backend
          Alert.fire({
            icon: "error",
            title: `${error.response.data.msg}`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <main className=" content justify-content-center bg-dark">
      <Title
        className="text-light"
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        Eliminar Objetivo
      </Title>
      <Formulario
        action=""
        className="d-flex bg-light p-4"
        style={{ marginRight: "30px", marginBottom: "20px" }}
      >
        <div className="align-items:center justify-content:center">

          <Label>Nombre:</Label>
          <p>{props.nombre}</p>
          <Label>Descripción:</Label>
          <p>{props.descripcion}</p>
          <Label>Valor:</Label>
          <p>{props.valor}</p>
          <Label>Tipo:</Label>
          <p>{props.accion}</p>
          <Label>Fecha:</Label>
          <p>{props.fecha}</p>
          
          <div className="btn-group m-4 justify-content-center">
            <Button
              buttonText="Eliminar"
              type="submit"
              className="text-center btn btn-danger m-2 rounded"
              onClick={onSubmit}
            />
          </div>
        </div>
      </Formulario>
    </main>
  );
};

export default DeleteEvent;
