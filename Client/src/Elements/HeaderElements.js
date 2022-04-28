//Sirve para poner estilos a cada componente
import styled from "styled-components";
import { Link } from "react-router-dom";


const PrincipalHeader = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    background: rgba(0,0,0,0.8578781854538691);
`;

const HeaderContainer = styled.div`
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 0px 20px;
`;

const Logo = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    width: 150px;
`;

const NavContainer = styled.div`
    position: relative;
    height: 100%;
`;

const Nav = styled.nav`
    height: 100%;
`;

const Ul = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Li = styled.li`
    margin: 0px 20px;
    list-style-type: none;
`;



const LinkTo = styled(Link)`
    color: #fff;
    font-size: 14px;
    outline: none;
    text-decoration: none;
`;

export {
    PrincipalHeader,
    HeaderContainer,
    Logo,
    Img,
    NavContainer,
    Nav,
    Ul,
    Li,
    LinkTo
};