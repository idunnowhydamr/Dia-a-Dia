//Sirve para poner estilos a cada componente
import styled, { css } from "styled-components";


const Cover = styled.div`
    margin-bottom:190px;
    height: 100px;
  }
`;

const ContainerCover = styled.div`
    max-width: 1200px;
    margin: 12.5% auto;
    padding-left: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-size: cover;
    background-position: bottom;
  }
`;

const ContainerInfo = styled.div`
  max-width: 400px;
  margin-top: 20px;
  z-index: 2;
  }
`;

const CoverH1 = styled.h1`
  max-width: 400px;
  font-size: 60px;
  font-weight: 900;
  color: #000;
  }
`;
const CoverH2 = styled.h2`
  font-size: 60px;
  font-weight: 900;
  color: #FEBA0B;
  margin-top: -30px;
  }
`;

const PInfo = styled.p`
  margin-top: 10px;
  color: #000;
  }
`;

const Ul = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Li = styled.li`
    margin: 0px 20px;
`;


export {
    Cover,
    ContainerCover,
    ContainerInfo,
    CoverH1,
    CoverH2,
    PInfo,
    Ul,
    Li
};
