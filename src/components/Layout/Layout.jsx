import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledNavLink } from './Layout.styled';
import { Container } from 'components/App/App.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/movies"> Movies </StyledNavLink>
          </Nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader top="50" />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
