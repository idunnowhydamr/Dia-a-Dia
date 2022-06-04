import React, { useState } from "react";
import Button from "../Commons/Button.js";
import axios from "axios";
import { Formulario, Title, Label } from "../../Elements/Formulario";
import Alert from "sweetalert2";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:8000/`,
});

//HOOKS para el formulario
const DeleteForm = (props) => {
  const [activoId, setActivoId] = useState();

  //Metodo para saber la opcion seleccionada
  const handleSelect = (event) => {
    for( var i =0; i < props.categories.length; i++){
      if(event.target.value===props.categories[i].title){
        setActivoId(props.categories[i].id);
      }
    }
  };

  const onSubmit = async () => {
    //Se hace peticion a la api
    await api
      .delete(`active/${activoId}`)
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
        Eliminar Activo
      </Title>
      <Formulario
        action=""
        className="d-flex bg-light p-4"
        style={{ marginRight: "30px", marginBottom: "20px" }}
      >
        <div className="align-items:center justify-content:center">
          <div class="form-group mt-2">
            <Label for="sel1">Seleccionar:</Label>
            <select onChange={handleSelect}>
            <option>------------------------</option>
              {props.categories.map((category) => (
                <option id={category.id}>{category.title}</option>
              ))}
            </select>
          </div>

          <div className="btn-group m-4 justify-content-center">
            <Button
              buttonText="Guardar"
              type="submit"
              className="text-center btn btn-info m-2 rounded"
              onClick={onSubmit}
            />
          </div>
        </div>
      </Formulario>
    </main>
  );
};

export default DeleteForm;
