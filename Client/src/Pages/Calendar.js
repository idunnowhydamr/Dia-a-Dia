import React, { Component } from "react";
import EventCalendar from "../Components/FullCalendar/EventCalendar"
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer";
import dataProyect from "../utils/mocks/dataProyect";

class Calendar extends Component {
  render() {
    return (
      <div>
         <Header />
        <EventCalendar/>
        <Footer
        data = {dataProyect}
        />
      </div>
    );
  }
}

export default Calendar;