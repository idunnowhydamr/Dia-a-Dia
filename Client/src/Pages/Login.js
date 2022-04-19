import React from "react";
import Form from "../Components/Login/Form";
import imageForm from "../Images/form.svg";
function Login() {
  return (
    <>
      <div className="justify-content-center">
      <div className="cover">
        <div className="wave w1"></div>
        <div className="wave w2"></div>
        <div class="container__cover">
                <div class="container__info">
                    <h1>DIA A</h1>
                    <h2>DIA</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut impedit ea debitis ab, amet ipsa ipsum odio magnam voluptatem dicta praesentium obcaecati facilis, nulla fugiat itaque repellendus eaque tempora.</p>
                </div>
                <div class="container__vector">
                    <img src={imageForm} alt=""/>
                </div>
            </div>
      </div>
      <Form />
      </div>
    </>
  );
}

export default Login;
