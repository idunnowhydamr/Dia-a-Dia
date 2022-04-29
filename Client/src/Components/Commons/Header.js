import DiaADiaImg from "../../Images/icon.svg"
import React from "react";
import wd3 from '../../Images/wd3.svg'
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
<<<<<<< HEAD
                <Img src={wd3} alt=""/>
=======
                <Img src={DiaADiaImg}  alt=""/>
>>>>>>> 64f1ac4632c16e153d49ee3d3f12cf9a4830a67c
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