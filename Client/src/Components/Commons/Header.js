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
    A} from "../../Elements/HeaderElements";
function Header(){
    return(
        <>
    <PrincipalHeader>
        <HeaderContainer>
            <Logo>
                <Img src={wd3} alt=""/>
            </Logo>
            <NavContainer>
                <Nav>
                    <Ul>
                        <Li><A href="#" class="select">HOME</A></Li>
                        <Li><A href="#">ABOUT US</A></Li>
                        <Li><A href="#">HOW IT WORK</A></Li>
                        <Li><A href="#">CONTACT US</A></Li>
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