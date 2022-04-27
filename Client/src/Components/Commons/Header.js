import React from "react";
import "../../CSS/style.css"

function Header(){
    return(
        
        <><header id="header">
            <div class="container__header">
                <div class="logo">
                    <img src="images/logo-magtimus.png" alt="" />
                </div>
                <div class="container__nav">
                    <nav id="nav">
                        <ul>
                            <li><a href="ww" class="select">HOME</a></li>
                            <li><a href="ww">ABOUT US</a></li>
                            <li><a href="ww">HOW IT WORK</a></li>
                            <li><a href="ww">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
                </div>
            </div>
        </header><div class="container_all" id="container__all">
                <div class="cover">



                    <div class="bg_color"></div>
                    <div class="wave w1"></div>
                    <div class="wave w2"></div>


                    <div class="container__cover">
                        <div class="container__info">
                            <h1>BUILD YOUR</h1>
                            <h2>BUSINESS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut impedit ea debitis ab, amet ipsa ipsum odio magnam voluptatem dicta praesentium obcaecati facilis, nulla fugiat itaque repellendus eaque tempora.</p>
                            <input type="button" value="Get Started" />
                        </div>
                        <div class="container__vector">
                            <img src="images/undraw_Code_thinking_re_gka2.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div></>
    
    
            

    )
}

export default Header;