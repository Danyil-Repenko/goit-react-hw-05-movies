import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Nav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
