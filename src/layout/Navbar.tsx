import React from 'react';
import { NavbarCompanyNameImage, NavbarContainerDiv } from '../styles/Navbar.styles.d';

export default function Navbar() {
  return (
    <NavbarContainerDiv>
      <NavbarCompanyNameImage
        src={'	https://geeksquare.live/static/media/gs_logo.fc14209d07a54586fe81ffddf5cbf8ca.svg'}
      />
    </NavbarContainerDiv>
  );
}
