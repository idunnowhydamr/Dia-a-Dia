import React, {useState} from "react";
import Button from "../Commons/Button.js";
import Input from "../Commons/Input.js";

import { Formulario, Title } from "../../Elements/Formulario";

const Form = () => {
  const [user, userChange] = useState({field: '', valid: null});
  const [password, passwordChange] = useState({field: '', valid: null});

  const expressions = {
		user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		phone: /^\d{7,14}$/ // 7 a 14 numeros.
	}
  return (
    <main className="ml-5  content justify-content-center">
      <Title>Iniciar Sesion</Title>
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
        <div className="btn-group m-2 justify-content-center">
          <Button buttonText="Iniciar" type="submit" />
          <Button buttonText="Registrar" direccion="/Register" />
        </div>
      </Formulario>
    </main>
  );
};

export default Form;
