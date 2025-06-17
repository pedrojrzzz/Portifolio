import styled from "styled-components";

export const Container = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .content-404 {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //border: 1px solid purple;

    h1 {
      color: ${(props) => props.colorConfig.textColor};
      font-size: 15rem;
    }
  }
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 1rem;
  //border-radius: 5px;
  border: ${(props) => props.colorConfig.borderColor};
  background-color: ${(props) => props.colorConfig.backgroundTextContent};
  box-shadow: 5px 5px purple;

  /* &:hover {
    transform: scale(1.01);
    background-color: ${(props) => props.colorConfig.hoverIcon};
  } */

  /* a {
    text-decoration: none;
    color: ${(props) => props.colorConfig.textColor};
  } */
`;
