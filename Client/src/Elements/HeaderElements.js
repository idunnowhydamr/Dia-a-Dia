//Sirve para poner estilos a cada componente
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

//Se trae aca para editar los iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
    success: "#1ed12d"
  };
  

const LinkTo = styled(Link)`
  outline: none;
  text-decoration: none;
`;
const A = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.5em;
`;

const NavBar = styled(Navbar)`
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
`;

//Icons
const BellIcon = styled(FontAwesomeIcon)`
font-size: 30px;
${props =>
  props.valid === "true" &&
  css`
    color: ${colors.success};
  `}
`;

const CalendarIcon = styled(FontAwesomeIcon)`
font-size: 30px;
${props =>
  props.valid === "true" &&
  css`
    color: ${colors.success};
  `}
`;

const PigIcon = styled(FontAwesomeIcon)`
font-size: 30px;
${props =>
  props.valid === "true" &&
  css`
    color: ${colors.success};
  `}
`;

export {
    LinkTo,
    A,
    NavBar,
    BellIcon,
    CalendarIcon,
    PigIcon
};
