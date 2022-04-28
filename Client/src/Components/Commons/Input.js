import React from "react";
import "../../CSS/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Label,
  GroupInput,
  BugLegend,
  ValidationIcon,
  InputElement
} from "../../Elements/Formulario";

import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const Input = ({validationIcon, estate, estateChange,label, placeholder, type, name, bugLegend, regularExpression}) => {
  const onChange = (e) => {
    //Para sobreescribir el esatdo, agregado el objeto de estado anterior
    estateChange({...estate, field: e.target.value});
  }

  const validation = () => {
    //Se ejecuta si exite una expresion regular
    if(regularExpression){
      //.tes() permite comprobar un valor contra la formula
      if(regularExpression.test(estate)){
        estateChange({...estate, valid: 'true'});
      }else{
        estateChange({...estate, valid: 'false'});
      }
    }

  }
  return (
    <div>
          <Label valid={validationIcon} >{label}</Label>
          <GroupInput>
            <InputElement 
            className="form-control" 
            type={type} placeholder={placeholder} 
            id={name}
            value={estate}
            onChange={onChange}
            //Se ejecuta cuando se levanta el dedo de la tecla
            onKeyUp={validation}
            onBlur={validation}
            valid={validationIcon}
            />
            <ValidationIcon 
            icon={validationIcon === 'false' ? faTimesCircle : faCheckCircle} 
            valid={validationIcon}
            />
          </GroupInput>
          <BugLegend valid={validationIcon}>
              {bugLegend}
          </BugLegend>
    </div>
  );
}

export default Input;
