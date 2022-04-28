import DiaADiaImg from "../../Images/iconDiaADia.png"
import React from "react";
import { Link } from "react-router-dom";
import {
    PrincipalHeader,
    HeaderContainer,
    Logo,
    Img,
    NavContainer,
    Nav,
    Ul,
    Li,
    A} from "../../Elements/HeaderElements";
function Header(){
    return(
        <>
    <PrincipalHeader>
        <HeaderContainer>
            <Logo>
                <Img src={DiaADiaImg}  alt=""/>
            </Logo>
            <NavContainer>
                <Nav>
                    <Ul>
                        <Li><Link to="">Progreso</Link></Li>
                        <Li><Link to="" href="#">Graficos</Link></Li>
                        <Li><Link to="">Recordatorios</Link></Li>
                        <Li><Link to="">Perfil</Link></Li>
                    </Ul>
                </Nav>
                <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
            </NavContainer>
        </HeaderContainer>
    </PrincipalHeader>
        </>
    )
}

export default Header;