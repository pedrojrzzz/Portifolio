import styled from "styled-components";

export const DivContainer = styled.div`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.colorConfig.backgroundIconColor};
  position: relative;
  border-radius: 7px;
  overflow: hidden;

  &:hover {
    width: ${(props) => props.textSizeContainer};
    transition: 0.3s;
  }

  .icon-container {
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    overflow: hidden;
  }

  .text-container {
    height: 35px;
    padding-right: 4px;
    display: flex;
    flex-basis: auto;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    flex-shrink: 1;
    overflow: hidden;

    & p {
      text-decoration: none;
      color: ${(props) => props.colorConfig.iconColor};
    }
  }
`;
