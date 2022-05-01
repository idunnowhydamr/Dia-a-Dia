import React, { Component } from "react";
import EventCalendar from "../Components/FullCalendar/EventCalendar"
import Header from "../Components/Commons/Header";

class Calendar extends Component {
  render() {
    return (
      <div>
         <Header />
        <EventCalendar/>
      </div>
    );
  }
}

export default Calendar;