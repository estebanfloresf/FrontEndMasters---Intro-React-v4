import React from 'react';
import { Link } from '@reach/router';
import styled, { keyframes } from 'react-emotion';
import colors from './colors';

const Container = styled('header')`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

// under other styled calls
const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpyGlass = styled('span')`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const NavBar = () => (
	<Container>
		<NavLink to="/">Adopt Me!</NavLink>
		<NavLink to="/search-params">
			<SpyGlass aria-label="search" role="img">
				🔍
			</SpyGlass>
		</NavLink>
	</Container>
);

export default NavBar;
