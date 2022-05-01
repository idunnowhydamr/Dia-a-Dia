import React, { Component } from "react";

import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import Alert from "sweetalert2";
import {
  CalendarContainer,
  ObjectiveContainer,
  Objective,
  ObjectiveTitle,
} from "../../Elements/CalendarElements";
import "../../CSS/style.css"

import esLocale from "@fullcalendar/core/locales/es";
import "../../CSS/style.css";
class EventCalendar extends Component {
  state = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "99999998",
      },
      {
        title: "My Favorite Murder",
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        id: "99999999",
      },
    ],
    events: [
      { title: "Event 1", id: "1" },
      { title: "Event 2", id: "2" },
      { title: "Event 3", id: "3" },
      { title: "Event 4", id: "4" },
      { title: "Event 5", id: "5" }
    ],
  };

  /**
   * adding dragable properties to external events through javascript
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let color = eventEl.getAttribute("color");
        return {
          title: title,
          id: id,
          color: color
        };
      },
    });
  }

  /**
   * Funcion para generar numero aleatorio.
   */

  generarNumero = (numero) => {
    return (Math.random() * numero).toFixed(0);
  };
  /**
   * Funcion para crear color RGB.
   */
  colorRGB = () => {
    var coolor =
      "(" +
      this.generarNumero(255) +
      "," +
      this.generarNumero(255) +
      "," +
      this.generarNumero(255) +
      ")";
    return "rgb" + coolor;
  };

  /**
   * when we click on event we are displaying event details
   */
  eventClick = (eventClick) => {
    Alert.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsives">
      <table class="table">
      <tbody style="color: black;">
      <tr >
      <td>Title</td>  
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Alert.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  render() {
    return (
      <div className="animated fadeIn p-4 demo-app">
        <Row>
          <Col lg={3} sm={3} md={3}>
            <ObjectiveContainer id="external-events" className="card text-white bg-dark mb-3">
              <p align="center">
                <div className="card-header" >Categorias</div>
              </p>
              {this.state.events.map((event) => (
                <Objective
                  className="fc-event card-text"
                  title={event.title}
                  data={event.id}
                  color={this.colorRGB}
                  key={event.id}
                >
                  {event.title}
                </Objective>
              ))}
            </ObjectiveContainer>
          </Col>

          <Col lg={9} sm={9} md={9}>
          <CalendarContainer id="mycalendartest">
              <FullCalendar
               plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,bootstrap5Plugin]}
              locale={esLocale}
                defaultView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                rerenderDelay={10}
                eventDurationEditable={false}
                editable={true}
                droppable={true}
               themeSystem="bootstrap5"
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                eventDrop={this.drop}
                // drop={this.drop}
                eventReceive={this.eventReceive}
                eventClick={this.eventClick}
                // selectable={true}
              />
            </CalendarContainer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventCalendar;
