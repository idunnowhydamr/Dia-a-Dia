import React, { Component } from 'react'
import dataProyect from '../../utils/mocks/dataProyect';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component{
    render(){
        return(
            <div>
    <Header/>
    {this.props.children}
    <Footer
    data ={dataProyect}
    />
            </div>)
    }
}

export default Layout;