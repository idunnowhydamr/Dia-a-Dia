import React from "react";
//Se utiliza Style Component
import { PInfo, Ul, FOoter, A } from "../../Elements/FooterElements";

function Footer(props) {
  //Colocamos un .map para traer informacion de dataProyect
  return props.data.map((item) => {
    return (
      <>
        <div class="container my-5 bg-dark">
          <FOoter>
          
            <div class="container p-4">
              <div class="row">
                <div class="col-lg-6 col-md-12 mb-4">
                  <h5 class="mb-3"> {item.nombre} </h5>
                  <PInfo>{item.slogan}</PInfo>
                </div>
                <div class="col-lg-6 col-md-6 ">
                  <h5 class="mb-3">Integrantes</h5>
                  <Ul class="list-unstyled mb-0">
                    <li class="mb-1">
                      <A href={item.link_I1} target="_blank">
                        {" "}
                        {item.integrante_1}{" "}
                      </A>
                    </li>
                    <li class="mb-1">
                      <A href={item.link_I2} target="_blank">
                        {" "}
                        {item.integrante_2}{" "}
                      </A>
                    </li>
                    <li class="mb-1">
                      <A href={item.link_I3} target="_blank">
                        {" "}
                        {item.integrante_3}{" "}
                      </A>
                    </li>
                  </Ul>
                </div>
              </div>
            </div>
          </FOoter>
        </div>
      </>
    );
  });
}

export default Footer;
