import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 90px) / 4);
  background-color: rgb(31, 30, 43);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 18px 6px rgba(255, 31, 31, 1);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 555px;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;'
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 370px;
  padding: 20px;
  background-color: rgb(31, 30, 43);
  color: #fff;
  flex-grow: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
