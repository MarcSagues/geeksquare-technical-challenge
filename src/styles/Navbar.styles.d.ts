import styled from 'styled-components';

const NavbarContainerDiv = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const NavbarCompanyNameImage = styled.img`
  margin-left: 10%;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export { NavbarContainerDiv, NavbarCompanyNameImage };
