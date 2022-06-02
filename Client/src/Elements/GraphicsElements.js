//Sirve para poner estilos a cada componente
import styled, {css} from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }

`;
const CardContainer = styled.div`
  width: 20rem;
  margin: 2em auto 0 auto;
  text-align:center;
`;

const Modal = styled.div`
    width:500px;
    display:none;
    background:blue;
${props =>
  props.styleLine === "false" &&
  css`
    display:flex;
  `}
`;

const TotalContainer = styled.div`
  text-align: center;
`;

export { CardContainer, Container, Modal, TotalContainer};
