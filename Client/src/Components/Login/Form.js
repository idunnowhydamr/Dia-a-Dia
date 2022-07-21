import React, {useState} from "react";
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";
import axios from "axios";
import Cookies from "universal-cookie";
import Alert from "sweetalert2";

//Estilos
import { Formulario, Title } from "../../Elements/Formulario";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:2020/`
})

//Instacia de las cookies
const cookies = new Cookies();

const Form = () => {
  //Estados para modificar los estilos
  const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
  const [password, changePassword] = useState({campo: '', valido: null});
  
  //Expresiones para los input
   const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  //Login
  const onSubmit = async (e) =>{
    //Se hace la petición a la api
    await api.post('login/', {user:usuario.campo, password: password.campo})

    //Se recibe la respuesta
    .then(response => {
      return response.data
    })

    //Se utiliza el arreglo enviado por la api
    .then(response =>{
      if(response.length > 0){//Siginifica que inicio sesion de forma correcta

        //Se guardan las variables de sesion
        let respuesta = response[0];
        cookies.set('id', respuesta.id, {path: "/"}) //Para que los atributos sean acesibles en cual pestañana se pone path
        cookies.set('primer_nombre', respuesta.primer_nombre, {path: "/"}) 
        cookies.set('primer_apellido', respuesta.primer_apellido, {path: "/"})
        //Alerta con alertsween 
        Alert.fire({
          icon: 'success',
          title: `Bienvenido ${respuesta.primer_nombre} ${respuesta.primer_apellido}`,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
         //Redirigimos la pagina cuando inicie sesion
        window.location.href="/Calendar"
        });
      }
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
    <main className="ml-5  content justify-content-center">
      <Title>Iniciar Sesion</Title>
      <Formulario action="" className="row justify-content-center" >
      <Input
					estado={usuario}
					cambiarEstado={cambiarUsuario}
					tipo="text"
					label="Usuario"
					placeholder="john123"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expressions.user}
				/>
         <Input
          estado={password}
					cambiarEstado={changePassword}
					tipo="password"
					label="Contraseña"
					placeholder="Digite la contraseña"
					name="password"
					leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
					expresionRegular={expressions.password}
        />
        <div className="btn-group m-2 justify-content-center">
          <Button buttonText="Iniciar" onClick={onSubmit} className="text-center btn btn-dark m-2 rounded" />
          <Button buttonText="Registrar" direccion="/Register" className="text-center btn btn-dark m-2 rounded" />
        </div>
      </Formulario>
    </main>
  );
};

export default Form;
