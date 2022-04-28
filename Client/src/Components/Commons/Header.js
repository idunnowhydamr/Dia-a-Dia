import DiaADiaImg from "../../Images/iconDiaADia.png"
import React from "react";
import {
    PrincipalHeader,
    HeaderContainer,
    Logo,
    Img,
    NavContainer,
    Nav,
    Ul,
    Li,
    LinkTo} from "../../Elements/HeaderElements";
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
                        <Li><LinkTo to="/Progress">Progreso</LinkTo></Li>
                        <Li><LinkTo to="/Graphics">Graficos</LinkTo></Li>
                        <Li><LinkTo to="/Calendar">Recordatorios</LinkTo></Li>
                        <Li><LinkTo to="/User">Perfil</LinkTo></Li>
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