import React from "react";
import Footer from "../Components/Commons/Footer";
import Header from "../Components/Commons/Header/Header";
import dataProyect from "../utils/mocks/dataProyect";
import Graphics from "../Components/Graphics/Graphics"
import Total from "../Components/Graphics/Total"


function Development(){
    return(
        <>
        <Header/>
        <Total/>
        <Graphics/>
        <Footer
        data = {dataProyect}
        />
        </>
        )
}

export default Development;