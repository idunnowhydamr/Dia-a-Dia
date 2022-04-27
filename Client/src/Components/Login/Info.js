import React from "react";
import "../../CSS/style.css";
import {PInfo} from "../../Elements/LoginElements";
function Info(props) {
    //Se pone dentro de un mapa para mostrar la informacion general de la pagina en una sola variable
    return(
        props.data.map((item) => {
            return(
                <>
                <PInfo >{item.problema}</PInfo>;
                </>
            )
          })
    )
  
}
export default Info;
