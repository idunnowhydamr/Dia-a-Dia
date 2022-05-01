import React, { Component } from "react";
import EventCalendar from "../Components/FullCalendar/EventCalendar"

class Calendar extends Component {
  render() {
    return (
      <div>
        <EventCalendar/>
      </div>
    );
  }
}

export default Calendar;