import styled from "styled-components";

export const ContainerBody = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${(props) => props.colorConfig.backgroundColor};
  transition: 0.2s;
`;
