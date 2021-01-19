import styled from 'styled-components';

export const GalleryContainer = styled.div`
  margin: 0 80px;
  display: grid;
  height: 600px;
  grid-template-columns: repeat(9, 285px);
  grid-template-rows: 285px 285px;
  column-gap: 30px;
  row-gap: 30px;
  grid-template-areas:
    '二 二  四 五 七 七 九 十一 十一'
    '一 三  四 六 八 十 十 十一 十一';

  @media screen and (max-width: 780px) {
    box-sizing: border-box;
    grid-template-columns: 41vw 41vw;
    grid-template-rows: repeat(9, 41vw);
    height: 429vw;
    margin: 6vw 0;
    column-gap: 6vw;
    row-gap: 6vw;
    grid-template-areas:
      '一 三'
      '二 二'
      '六 四'
      '五 四'
      '八 七'
      '九 七'
      '十 十'
      '十一 十一'
      '十一 十一';
  }
`;
