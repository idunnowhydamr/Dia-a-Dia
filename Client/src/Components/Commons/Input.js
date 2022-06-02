import React from "react";
import "../../CSS/style.css";

import {
  Label,
  GroupInput,
  BugLegend,
  ValidationIcon,
  InputElement
} from "../../Elements/Formulario";

import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Input = ({estado, cambiarEstado, tipo, label, placeholder, name, leyendaError, expresionRegular, funcion}) => {
	const onChange = (e) => {
		cambiarEstado({...estado, campo: e.target.value});
	}

	const validacion = () => {
		if(expresionRegular){
			if(expresionRegular.test(estado.campo)){
				cambiarEstado({...estado, valido: 'true'});
			} else {
				cambiarEstado({...estado, valido: 'false'});
			}
		}

		if(funcion){
			funcion();
		}
	}

	return (
		<div>
			<Label htmlFor={name} valido={estado.valido}>{label}</Label>
			<GroupInput>
				<InputElement 
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={estado.campo}
					onChange={onChange}
					onKeyUp={validacion}
					onBlur={validacion}
					valido={estado.valido}
				/>
				<ValidationIcon
					icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
					valido={estado.valido}
				/>
			</GroupInput>
			<BugLegend valido={estado.valido}>{leyendaError}</BugLegend>
		</div>
	);
}
 
export default Input;