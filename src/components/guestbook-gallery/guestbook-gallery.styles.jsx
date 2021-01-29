import styled from 'styled-components';

const getColumns = (props) => {
  return props.columns;
};

export const GalleryContainer = styled.div`
  margin: 0 2rem;
  display: grid;
  height: 600px;
  grid-template-columns: repeat(${getColumns}, 188px);
  grid-template-rows: repeat(3, 188px);
  column-gap: 14px;
  row-gap: 14px;
  grid-auto-flow: column;

  @media screen and (max-width: 511px) {
    box-sizing: border-box;
    grid-template-columns: repeat(3, 28vw);
    grid-template-rows: repeat(${getColumns}, 28vw);
    height: 100%;
    width: 88vw;
    margin: 4vw 0;
    column-gap: 2vw;
    row-gap: 2vw;
    grid-auto-flow: row;
  }
`;
