import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 20px;
  background-color: #171c28;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;

export const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding: 10px 15px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &:hover {
    color: #ffbd2a;
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 250, 0.2);
    transform: translateX(-100%);
    transition: all 0.2s ease-in-out;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 250, 0.2);
    transform: translateX(100%);
    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    transform: translateX(0);
  }

  &.active {
    background-color: #ffbd2a;
    color: #171c28;
  }

  &.active:hover {
    color: #fff;
  }

  &.active::before {
    background-color: rgba(250, 250, 250, 0.2);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.2s ease-in-out;
  }

  &.active::after {
    background-color: rgba(250, 250, 250, 0.2);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    transition: all 0.2s ease-in-out;
  }

  &.active:hover::before {
    transform: translateX(0);
  }

  &.active:hover::after {
    transform: translateX(0);
  }
`;
