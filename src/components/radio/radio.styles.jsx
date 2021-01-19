import styled from 'styled-components';

export const ToggleSwitchContainer = styled.div`
  font-size: 1.7rem;
  width: 78vw;
  border-radius: 30px;
  border: none;
  background-color: rgba(212, 223, 216, 1);
  height: 4rem;
  padding: 0 0 0.3rem 0;
  margin: 2rem auto;
  margin-bottom: 20px;
  position: relative;
  input[type='radio'] {
    display: none;
  }

  label {
    cursor: pointer;
    width: 49.7%;
    height: 32px;
    display: inline-block;
    padding: 16px 0;
    text-align: center;
    position: relative;
    z-index: 999;
    -webkit-transition: color 0.5s ease-in-out;
    -moz-transition: color 0.5s ease-in-out;
    transition: color 0.5s ease-in-out;
    color: #800020;
  }
  span {
    position: absolute;
    background-color: #9bae98;
    border-radius: 30px;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    top: 0;
    left: 0;
    padding: 0;
    z-index: 1;
    width: 50%;
    height: 100%;
  }
  input:last-of-type:checked ~ span {
    left: 50%;
    color: white;
  }
  input:last-of-type:checked ~ label:last-of-type,
  input:first-of-type:checked ~ label:first-of-type,
  input:checked:nth-of-type(2) ~ label:nth-of-type(2),
  input:checked:nth-of-type(3) ~ label:nth-of-type(3) {
    color: #fff;
  }
`;
