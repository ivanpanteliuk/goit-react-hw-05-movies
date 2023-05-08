import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background-color: #171c28;
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
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 40px;
`;

export const Wrap = styled.div`
  color: #fff;
`;

export const MovieTitle = styled.h2`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
  color: #ffbd2a;
`;

export const Text = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const TextSpan = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #ffbd2a;
`;

export const Subtitle = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
  margin-top: 50px;
  color: #ffbd2a;
`;

export const StyledTextLink = styled(NavLink)`
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  background-color: #171c28;
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

  &.active {
    background-color: #ffbd2a;
    color: #171c28;
  }
`;

export const AddList = styled.ul`
  display: flex;
  gap: 50px;
`;
