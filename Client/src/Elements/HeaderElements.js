//Sirve para poner estilos a cada componente
import styled from "styled-components";


const PrincipalHeader = styled.header`
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    background: rgb(28,28,28);
    background: linear-gradient(90deg, rgba(28,28,28,0.9026961126247374) 17%, rgba(0,0,0,0.8578781854538691) 55%);
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
`;

const A = styled.a`
    color: #fff;
    font-size: 14px;
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
    A
};