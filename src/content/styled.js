import styled from "styled-components";

export const Paragraph = styled.p`
  color: ${(props) => props.colorConfig.textColor};

  .intro-text {
    font-weight: inherit;
    font-size: 14pt;
    font-family: Verdana, sans-serif;
    white-space: nowrap;
    overflow: hidden;
  }

  .typing-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 200px;
    animation: typing 3s steps(100);
  }

  .cursor-input {
    display: inline-block;
    position: absolute;
    right: 0;
    width: 2px;
    height: 22px;
    background-color: white;
    margin-left: 2px;
    animation: blink 0.5s linear infinite alternate;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes typing {
    from {
      width: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    to {
      width: 194px;
    }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-bottom: 30px;

  .div-project {
    // Padrão pra todos projetos
    height: 180px;
    width: 180px;
    margin-bottom: 20px;
    border: 1px solid ${(props) => props.colorConfig.borderColor};
    border-radius: 10px;

    &:hover {
      display: absolute;
      cursor: pointer;
    }

    h2 {
      color: ${(props) => props.colorConfig.textColor};
    }

    p {
      color: ${(props) => props.colorConfig.textColor};
    }
  }
`;
