import React, {useState} from "react";
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";

import { Formulario, Title } from "../../Elements/Formulario";

const Form = () => {
  const [user, userChange] = useState({field: '', valid: null});
  const [password, passwordChange] = useState({field: '', valid: null});
  const [email, emailChange] = useState({field: '', valid: null});
  const [name1, name1Change] = useState({field: '', valid: null});
  const [name2, name2Change] = useState({field: '', valid: null});
  const [lastName1, lastName1Change] = useState({field: '', valid: null});
  const [lastName2, lastName2Change] = useState({field: '', valid: null});
  

  const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ // 7 a 14 numeros.
	}
  return (
    <main className="  content justify-content-center">
      <Title>Registro</Title>
      <Formulario action="" className="row justify-content-center">
        <Input
          label="Usuario"
          placeholder="Jhon123"
          type="text"
          name="user"
          bugLegend="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          regularExpression={expressions.user}
          validationIcon={user.valid}
          estate={user.field}
          estateChange={userChange}
        />
        <Input
          label="Correo"
          placeholder="Ingrese el Correo"
          type="email"
          name="email"
          bugLegend="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          regularExpression={expressions.email}
          validationIcon={email.valid}
          estate={email.field}
          estateChange={emailChange}
        />

        <Input
          label="Contraseña"
          placeholder="Ingrese la Contraseña"
          type="password"
          name="password"
          bugLegend="La contraseña tiene que ser de 4 a 12 dígitos."
          regularExpression={expressions.password}
          validationIcon={password.valid}
          estate={password.field}
          estateChange={passwordChange}
        />

        <Input
          label="Nombre 1"
          placeholder="Ingrese su primer nombre"
          type="name"
          name="name1"
          bugLegend="El nombre solo puede contener letras y espacios."
          regularExpression={expressions.name}
          validationIcon={name1.valid}
          estate={name1.field}
          estateChange={name1Change}
        />
        <Input
          label="Nombre 2"
          placeholder="Ingrese su segundo nombre"
          type="name"
          name="name2"
          bugLegend="El nombre solo puede contener letras y espacios."
          regularExpression={expressions.name}
          validationIcon={name2.valid}
          estate={name2.field}
          estateChange={name2Change}
        />
        <Input
          label="Apellido 1"
          placeholder="Ingrese su primer apellido"
          type="name"
          name="lastName1"
          bugLegend="El apellido solo puede contener letras y espacios."
          regularExpression={expressions.name}
          validationIcon={lastName1.valid}
          estate={lastName1.field}
          estateChange={lastName1Change}
        />
        <Input
          label="Apellido 2"
          placeholder="Ingrese su segundo apellido"
          type="name"
          name="lastName2"
          bugLegend="El apellido solo puede contener letras y espacios."
          regularExpression={expressions.name}
          validationIcon={lastName2.valid}
          estate={lastName2.field}
          estateChange={lastName2Change}
        />
        <div className="btn-group m-2 justify-content-center">
          <Button buttonText="Registrar" type="submit" />
          <Button buttonText="Regresar" direccion="/" />
        </div>
      </Formulario>
    </main>
  );
};

export default Form;

