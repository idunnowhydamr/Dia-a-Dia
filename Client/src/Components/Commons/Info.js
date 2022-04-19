import React from "react";
import "../../CSS/style.css";

function Info(props) {

    return(
        props.data.map((item) => {
            return(
                <>
                <p>{item.problema}</p>;
                </>
            )
          })
    )
  
}
export default Info;
