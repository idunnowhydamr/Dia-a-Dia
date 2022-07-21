import React, { Component } from "react";
import Footer from "../Components/Commons/Footer";
import Header from "../Components/Commons/Header/Header";

import dataProyect from "../utils/mocks/dataProyect";
import Graphics from "../Components/Graphics/Graphics";
import Total from "../Components/Graphics/Total";

import Cookies from "universal-cookie";
import axios from "axios";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:2020/`,
});

//Cookies
const cookies = new Cookies();
const id = cookies.get("id"); //Cookies enviada desde el login
class Development extends Component {
  state = {
    total: [],
    totalFinal: null
  };

  componentDidMount() {
    this.getTotal1();
  }

  //Metodo para obtener el total
  getTotal1 = async () => {
    //Traer total
    await api
      .get(`total/${id}`)
      .then((response) => {
        return response.data;
      })
      //Recibimos los datos retornados y se guardan en el parametro
      .then((total) => {
        this.setState({ total: total });
        this.setState({totalFinal:this.state.total[0].total});
      });
  };

  render() {
    return (
      <>
        <Header />
        <Total total={this.state.totalFinal}/>
        <Graphics />
        <Footer data={dataProyect} />
      </>
    );
  }
}

export default Development;
