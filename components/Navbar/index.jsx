import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components'
import { Logo } from '../Logo';
import { Login } from './login';
import { NavLinks } from './navLinks';
import { MobileNavLinks } from './mobileNavLinks';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.14);
  display: flex;
  align-items: center;
  padding: 0 1.5em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;

`;

const RightSection = styled.div`
  display: flex;
`;

const DeviceSize = {
  mobile: 784,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
}

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile })
  return <NavbarContainer>
    <LeftSection>
      <Logo />
    </LeftSection>
    <MiddleSection>
      {!isMobile && <NavLinks />}
    </MiddleSection>
    <RightSection>
      {!isMobile && <Login />}
      {isMobile && <MobileNavLinks />}
    </RightSection>
  </NavbarContainer>
}