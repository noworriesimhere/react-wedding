import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 300px);
  grid-template-rows: 300px 300px;
  grid-template-areas:
    '一 一 四 五 七 七 十 十一'
    '二 三 四 六 八 九 九 十一';
`;
