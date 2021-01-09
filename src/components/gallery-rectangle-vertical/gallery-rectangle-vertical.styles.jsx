import styled from 'styled-components';

export const RectangleVerticalContainer = styled.div`
  width: 300px;
  height: 600px;
  border: 5px solid black;
  box-sizing: border-box;
  grid-area: ${(props) => props.gridArea};
`;
