//Sirve para poner estilos a cada componente
import styled from "styled-components";


const CalendarContainer = styled.div`
    background: white;
    border-radius: 5px;
    box-shadow: 1px 0px 13px 9px rgba(0,0,0,0.17);
    margin: 6.5em auto 0 auto;
    max-width: 75%;
`;

const ObjectiveContainer = styled.div`
  padding: 10px;
  width: auto;
  maxHeight: -webkit-fill-available;
  position: absolute;
  z-index: 2;
  border: 1px solid #ccc;
  background: #eee;
  overflow: scroll;
`;

const Objective = styled.div`
  margin: 1em 0;
  cursor: move;
  background: blue;
`;



export {
    CalendarContainer,
    ObjectiveContainer,
    Objective
};
