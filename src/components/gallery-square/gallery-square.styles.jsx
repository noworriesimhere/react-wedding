import styled from 'styled-components';

export const SquareContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 5px solid blue;
  box-sizing: border-box;
  grid-area: ${(props) => props.gridArea};
`;
