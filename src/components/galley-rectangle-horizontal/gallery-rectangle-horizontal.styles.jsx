import styled from 'styled-components';

export const RectangleHorizontalContainer = styled.div`
  width: 600px;
  height: 300px;
  border: 5px solid green;
  box-sizing: border-box;
  grid-area: ${(props) => props.gridArea};
`;
