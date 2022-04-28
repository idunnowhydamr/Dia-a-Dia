//Sirve para poner estilos a cada componente
import styled, { css } from "styled-components";

const CalendarContainer = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 1px 0px 13px 9px rgba(0, 0, 0, 0.17);
  margin: 6.5em auto 0 auto;
  max-width: 75%;
`;

const ObjectiveContainer = styled.div`
  padding: 0;
  width: auto;
  position: absolute;
  z-index: 2;
  border: none;
  margin: 6.5rem;
  background: rgb(0, 252, 255);
  background: linear-gradient(
    0deg,
    rgba(0, 252, 255, 0.6337885495995272) 0%,
    rgba(16, 0, 255, 0.7542367288712359) 100%
  );
  box-shadow: 3px 0px 19px 8px rgba(0, 0, 0, 0.71);
  display: flex;
  height: auto;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 10px;
`;

const ObjectiveTitle = styled.h1`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8830882694874825) 0%,
    rgba(29, 29, 29, 0.7542367288712359) 100%
  );
  padding: 5px;
  color: #fff;
  display: block;
  font-weight: 700;
`;

const Objective = styled.div`
  border-radius: 10px;
  margin: 1em 0;
  cursor: move;
  box-shadow: 0px 10px 13px -7px #000000,
    50px 0px 21px 4px rgba(255, 255, 255, 0);
  border: 1px solid black;
  font-size: 15px;
  text-align: center;
  ${(props) =>
    css`
      background: ${props.color};
    `}
`;

export { CalendarContainer, ObjectiveContainer, Objective, ObjectiveTitle };
