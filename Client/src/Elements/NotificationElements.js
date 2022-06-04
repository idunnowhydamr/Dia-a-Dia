//Sirve para poner estilos a cada componente
import styled, { css } from "styled-components";

//Se trae aca para editar los iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  success: "#1ed12d"
};

const BellIcon = styled(FontAwesomeIcon)`
font-size: 30px;
${props =>
  props.valid === "true" &&
  css`
    color: ${colors.success};
  `}
`;

export {
    BellIcon
};