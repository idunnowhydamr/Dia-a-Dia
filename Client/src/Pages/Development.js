import React from "react";
import Footer from "../Components/Commons/Footer";
import Header from "../Components/Commons/Header";
import dataProyect from "../utils/mocks/dataProyect";


function Development(){
    return(
        <>
        <Header/>
        <Footer
        data = {dataProyect}
        />
        </>
        )
}

export default Development;