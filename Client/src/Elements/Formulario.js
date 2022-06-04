//Sirve para poner estilos a cada componente
import styled, { css } from "styled-components";

//Se trae aca para editar los iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  color: "#fff",
  error: "#bb2929",
  success: "#1ed12d",
};

const Formulario = styled.form`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.138);
  margin-left: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${props =>
    props.valido === "false" &&
    css`
      color: ${colors.error};
    `}
`;
const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;

const InputElement = styled.input`
  width: 100%;
  background: #fff;
  border-raiud: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  //Se pone para que no haya un salto de linea feo en la transacion
  border: 3px solid transparent;

  //Accedemos al mismo input
  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  //Accedemos a las propiedades del input
  //Comprobamos el valor valido, si se cumple se ejecuta codigo css
  ${props =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${props =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colors.error} !important;
    `}
`;

const BugLegend = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  //Se pone none porque no queremos que se muestre por defecto
  display: none;
  ${props =>
    props.valido === "true" &&
    css`
      display: none;
    `}

  ${props =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 18px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;
  
  ${props =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colors.error};
    `}
    
  ${props =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colors.success};
    `}
`;

const Buton = styled.button`
  padding: 0.5em 2.5em 0.5em 2.5em;
`;

const Title = styled.h1`
  text-align: center;
  margin: 1.4em 0 1.2em 0;
  font-weight: 700;
  color:black;

`;

export {
  Formulario,
  Label,
  GroupInput,
  InputElement,
  BugLegend,
  ValidationIcon,
  Buton,
  Title,
};
