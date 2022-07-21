import React, { Component } from "react";

//Librerias
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // needs additional webpack config!
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import Cookies from "universal-cookie";
import Alert from "sweetalert2";
import axios from "axios";

//Componentes
import Button from "../Commons/Button";
import Modal from "../Commons/Modal";
import Formulario from "./Form.js";
import DeleteForm from "./DeleteForm";
import AddEvent from "./AddEvent";
import DeleteEvent from "./DeleteEvent";
import AddTotal from "./AddTotal";

//Elementos
import {
  CalendarContainer,
  ObjectiveContainer,
  Objective,
  ObjectiveTitle,
} from "../../Elements/CalendarElements";
import "../../CSS/style.css";

//Listas ligadas simples
import linkedList from "./SingleLinkedList"; // Ruta correcta al archivo Js

import esLocale from "@fullcalendar/core/locales/es";
import "../../CSS/style.css";

//URL de la api
const api = axios.create({
  baseURL: `http://localhost:2020/`,
});

//Cookies
const cookies = new Cookies();
const id = cookies.get("id"); //Cookies enviada desde el login
let sll;
let array = [];
class EventCalendar extends Component {
  state = {
    calendarEvents: [],
    events: [],
    events1: [],
    total: [],
    show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    length: 0,
    eventDetail: [
      {
        id: null,
        nombre: null,
        descripcion: null,
        valor: null,
        tipo: null,
        fecha: null,
      },
    ],
  };

  componentDidMount() {
    this.getActives();
    this.getEvents();
    this.getTotal1();
    /**
     * adding dragable properties to external events through javascript
     */
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",

      eventData: function (eventEl) {
        //Propiedades del activo seleccionado
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        cookies.set("idActive", id, { path: "/" }); //Se configura el id del activo para que pueda ser usado en AddEvent.js
        return {
          title: title,
          id: id,
        };
      },
    });
  }
  //Funciones para que abra y cierre cada modal
  toggleModal = () => this.setState({ show: !this.state.show }); //Modal para agregar activo
  toggleModal1 = () => this.setState({ show1: !this.state.show1 }); //Modal para eliminar activo
  toggleModal2 = () => this.setState({ show2: !this.state.show2 }); //Modal para agregar evento al calendario
  toggleModal3 = () => this.setState({ show3: !this.state.show3 }); //Modal para ver detalles del evento
  toggleModal4 = () => this.setState({ show4: !this.state.show4 }); //Modal para agregar el dinero total del usuario

  updateEvent = async (id_event) =>{
    await api.put(`/updateEvent`, {idEvento: id_event})
  };
  //Metodo para obtener los eventos del calendario
  getEvents = async () => {
    //Traer eventos
    await api
      .get(`objetive/${id}`)
      .then((response) => {
        return response.data;
      })
      //Recibimos los datos retornados y se guardan en el parametro
      .then((events) => {
        this.setState({ calendarEvents: events });
        this.actualizarTotal();
      });
  };

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
        if(this.state.total.length === 0){
          this.toggleModal4();
        }

      });
    };

  //Metodo para obtener el total y actualizarlo
  getTotal = async (suma) => {
    //Traer total
    await api
      .get(`total/${id}`)
      .then((response) => {
        return response.data;
      })
      //Recibimos los datos retornados y se guardan en el parametro
      .then((total) => {
        this.setState({ total: total });
        let resultadoFinal = parseFloat(this.state.total[0].total) + parseFloat(suma);
        this.postTotal(resultadoFinal);
        
      });
  };

  postTotal = async (totalFinal) => {
    await api.post('/total', {
      total: totalFinal,
      userid: id
    })
  }

  //Metodo para obtener los activos del usuario.
  getActives = async () => {
    //Obtener listado de activos, antes de que renderice el componente
    await api
      .get(`active/${id}`)
      //Se recibe la respuesta y se retorna
      .then((response) => {
        return response.data;
      })
      //Recibimos los datos retornados y se guardan en el parametro
      .then((actives) => {
        this.setState({ length: actives.length });
        array = [];
        this.setState({ events1: actives });
        for (let i = 0; i < actives.length; i++) {
          if (i === 0) {
            sll = new linkedList(
              actives[0].id,
              actives[0].title,
              actives[0].valor
            );
          } else {
            sll.apend(actives[i].id, actives[i].title, actives[i].valor);
          }

          array.push(
            <Objective
              className="fc-event card-text"
              title={sll.getTheIndex(i).title}
              data={sll.getTheIndex(i).id}
              color={this.colorRGB}
              key={sll.getTheIndex(i).id}
            >
              {sll.getTheIndex(i).title}
            </Objective>
          );
        }

        this.setState({ events: array });
      });
  };

  //1. Recorrer las fechas de los objetivos
  //2. Compara si la fecha actual es igual a la fecha de uno de los objetivos
  //3. Si la fecha es igual entonces crear una variable que almacene la suma
  //4. La suma depende de si el objetivo es una perdida o una ganancia
  //5. Traer el total actual
  //6. guardar el total y la fecha actual

  actualizarTotal = async () => {
    let date = new Date();
    let currentDate = date.toISOString().split("T")[0];
    let acumulado = 0;
    console.log(currentDate);

    this.state.calendarEvents.map((event) => {
      let eventDate = event.start.slice(0, 10);
      console.log(eventDate);
      //Si la fecha actutal es igual a alguna de un objetivo
      if (currentDate=== eventDate && event.cumplido === 0) {
        if (event.accion === "ganancia") {
          acumulado += event.valor;
          
         
        } else {
          acumulado -= event.valor;
        }
        this.updateEvent(event.id);
        
      }
    })
    if(acumulado !== 0){
      this.getTotal(acumulado);
    }
  };
  /**
   * Funcion para generar numero aleatorio y se redondea.
   */

  generarNumero = (numero) => {
    return (Math.random() * numero).toFixed(0);
  };
  /**
   * Funcion para crear color RGB.
   */
  colorRGB = () => {
    var color =
      "(" +
      this.generarNumero(255) +
      "," +
      this.generarNumero(255) +
      "," +
      this.generarNumero(255) +
      ")";
    return "rgb" + color;
  };

  /**
   * when we click on event we are displaying event details
   */
  eventClick = (eventClick) => {
    //Se configuran las variables con los datos recibidos del Metodo getEvents
    this.setState({
      eventDetail: [
        {
          id: eventClick.event.id,
          nombre: eventClick.event.title,
          descripcion: eventClick.event.extendedProps.objetivo,
          valor: eventClick.event.extendedProps.valor,
          tipo: eventClick.event.extendedProps.accion,
          fecha: eventClick.event.start.toString(),
        },
      ],
    });
    //A diferencia de los otros metodos para desplegar,este se debe ejecutar dentro de otro metodo que reciba un parametro con el objeto de evento, que contendra las caracteriticas del evento seleccionado en el calendario
    this.toggleModal3();
  };

  addNewTotal = () =>{
    
  }

  render() {
    return (
      <div className="animated fadeIn p-4 demo-app">
        
        <Row>
          <Col lg={3} sm={3} md={3}>
          {this.addNewTotal()}
            <ObjectiveContainer
              id="external-events"
              className="card text-white bg-dark mb-3"
            >
              <p align="center">
                <div className="card-header">Gastos y Pagos</div>
              </p>

              {this.state.events.map((event) => event)}

              <Modal showw={this.state.show} toggleModal={this.toggleModal}>
                <Formulario />
              </Modal>
              <Modal showw={this.state.show1} toggleModal={this.toggleModal1}>
                <DeleteForm categories={this.state.events1} />
              </Modal>
              <Modal showw={this.state.show2} toggleModal={this.toggleModal2}>
                <AddEvent />
              </Modal>
              <Modal showw={this.state.show3} toggleModal={this.toggleModal3}>
                <DeleteEvent
                  nombre={this.state.eventDetail[0].nombre}
                  descripcion={this.state.eventDetail[0].descripcion}
                  accion={this.state.eventDetail[0].tipo}
                  fecha={this.state.eventDetail[0].fecha}
                  eventoId={this.state.eventDetail[0].id}
                  valor={this.state.eventDetail[0].valor}
                />
              </Modal>
              <Modal showw={this.state.show4} toggleModal={this.toggleModal4}>
                <AddTotal/>
              </Modal>
              <div className="btn-group m-4 justify-content-center">
                <Button
                  onClick={this.toggleModal}
                  buttonText="Agregar"
                  type="submit"
                  className="text-center btn btn-info m-2 rounded"
                />
                <Button
                  onClick={this.toggleModal1}
                  buttonText="Eliminar"
                  type="submit"
                  className="text-center btn btn-danger m-2 rounded"
                />
              </div>
            </ObjectiveContainer>
          </Col>
          
          <Col lg={9} sm={9} md={9}>
            <CalendarContainer id="mycalendartest">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  bootstrap5Plugin,
                ]}
                locale={esLocale}
                defaultView="dayGridMonth"
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                rerenderDelay={10}
                eventDurationEditable={false}
                editable={true}
                droppable={true}
                themeSystem="bootstrap5"
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                //eventDrop={this.toggleModal2}//Cuando el evento existe y se mueve dentro del calendario
                eventReceive={this.toggleModal2} //Cuando se va agregar evento
                eventClick={this.eventClick}
                height="550px"
                eventColor="#378006"
              />
            </CalendarContainer>

          </Col>
          
        </Row>
        
      </div>
    );
  }
}

export default EventCalendar;
