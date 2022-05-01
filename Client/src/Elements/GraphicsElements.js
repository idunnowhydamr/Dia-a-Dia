//Sirve para poner estilos a cada componente
import styled from "styled-components";

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
  margin: 9em auto 0 auto;
`;

export { CardContainer, Container };
