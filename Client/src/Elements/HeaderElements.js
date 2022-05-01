//Sirve para poner estilos a cada componente
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

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
    background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important
`;
export {
    LinkTo,
    A,
    NavBar 
};