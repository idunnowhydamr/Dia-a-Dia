import React, {useState} from "react";
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";
import axios from "axios";
import { Formulario, Title } from "../../Elements/Formulario";
import Alert from "sweetalert2";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:2020/`
})

//HOOKS para el formulario
const Form = () => {
  const [user, userChange] = useState({campo: '', valido: null});
  const [password, passwordChange] = useState({campo: '', valido: null});
  const [password2, password2Change] = useState({campo: '', valido: null});
  const [email, emailChange] = useState({campo: '', valido: null});
  const [name1, name1Change] = useState({campo: '', valido: null});
  const [name2, name2Change] = useState({campo: '', valido: null});
  const [lastName1, lastName1Change] = useState({campo: '', valido: null});
  const [lastName2, lastName2Change] = useState({campo: '', valido: null});
  

  const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const Register = async (e) => {
    e.preventDefault();
    //Condicional para saber si los input estan correctos y poder enviar el registro al back.
    if(
			user.valido === 'true' &&
			name1.valido === 'true' &&
      name2.valido === 'true' &&
      lastName1.valido === 'true' &&
      lastName2.valido === 'true' &&
			password.valido === 'true' &&
			password2.valido === 'true' &&
			email.valido === 'true'
		){
      try {
        await api.post('/register', {
          usuario: user.campo,
          nombre1: name1.campo,
          nombre2: name2.campo,
          apellido1: lastName1.campo,
          apellido2: lastName2.campo,
          email: email.campo,
          password: password.campo,
          password2: password2.campo 
        })

        Alert.fire({
          icon: 'success',
          title: 'Registrado Correctamente.',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
         //Redirigimos la pagina cuando inicie sesion
        window.location.href="./"
        });
        
    } catch (error) {
        if (error.response) {
          console.log(error.respose)
          Alert.fire({
            icon: 'error',
            title: 'Ha ocurrido un error.',
            showConfirmButton: false,
            timer: 1500
          })
        }
    }
    }
    
}

  const passwordValidation = () =>{
    //Condicional para saber si ya se escribio la contraseña
    if(password.campo.length > 0){
      //Se comparan las contraseñas
      if(password.campo !== password2.campo){
        password2Change((prevState) => {
          return{...prevState, valido: 'false'}
        });
      }else {
        password2Change((prevState) => {
          return{...prevState, valido: 'true'}
        });
      }
    }
  }
  return (
    <main className="  content justify-content-center">
      <Title>Registro</Title>
      <Formulario action="" className="row justify-content-center">
      <Input
					estado={user}
					cambiarEstado={userChange}
					tipo="text"
					label="Usuario"
					placeholder="john123"
					name="usuario"
					leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expressions.user}
				/>
        <Input
          estado={email}
          cambiarEstado={emailChange}
          tipo="email"
          label="Correo"
          placeholder="Ingrese el Correo"
          name="email"
          leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          expresionRegular={expressions.email}
        />

        <Input
          estado={password}
          cambiarEstado={passwordChange}
          tipo="password"
          label="Contraseña"
          placeholder="Ingrese la contraseña"
          name="password"
          leyendaError="La contraseña tiene que ser de 4 a 12 dígitos."
          expresionRegular={expressions.password}
        />
        <Input
          estado={password2}
          cambiarEstado={password2Change}
          tipo="password"
          label="Repetir contraseña"
          placeholder="Ingrese nuevamente la contraseña"
          name="password2"
          funcion={passwordValidation}
          leyendaError="Ambas contraseñas deben ser iguales."
        />

        <Input
          estado={name1}
          cambiarEstado={name1Change}
          tipo="name"
          label="Nombre 1"
          placeholder="Ingrese su primer nombre"
          name="name1"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expressions.name}

        />
        <Input
          estado={name2}
          cambiarEstado={name2Change}
          tipo="name"
          label="Nombre 2"
          placeholder="Ingrese su segundo nombre"
          name="name2"
          leyendaError="El nombre solo puede contener letras y espacios."
          expresionRegular={expressions.name}
        />
        <Input
          estado={lastName1}
          cambiarEstado={lastName1Change}
          tipo="name"
          label="Apellido 1"
          placeholder="Ingrese su primer apellido"
          name="lastName1"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={expressions.name}
        />
        <Input
          estado={lastName2}
          cambiarEstado={lastName2Change}
          tipo="name"
          label="Apellido 2"
          placeholder="Ingrese su segundo apellido"
          name="lastName2"
          leyendaError="El apellido solo puede contener letras y espacios."
          expresionRegular={expressions.name}
        />
        <div className="btn-group m-2 justify-content-center">
          <Button buttonText="Registrar" type="submit" onClick={Register}  className="text-center btn btn-dark m-2 rounded"/>
          <Button buttonText="Regresar" direccion="/" className="text-center btn btn-dark m-2 rounded" />
        </div>
      </Formulario>
    </main>
  );
};

export default Form;

