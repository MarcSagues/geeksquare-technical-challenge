import styled from 'styled-components';

const AppContainerDiv = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export { AppContainerDiv };
