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
    '一 三  四 五 七 十 十 十一 十一'
    '二 二  四 六 八 八 九 十一 十一';

  @media screen and (max-width: 511px) {
    box-sizing: border-box;
    grid-template-columns: 41vw 41vw;
    grid-template-rows: repeat(9, 41vw);
    height: 429vw;
    margin: 6vw 0;
    column-gap: 6vw;
    row-gap: 6vw;
    grid-template-areas:
      '一 二'
      '三 三'
      '四 五'
      '四 六'
      '七 八'
      '七 九'
      '十 十'
      '十一 十一'
      '十一 十一';
  }
`;
