import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Image,
  ImageWrapper,
  List,
  ListItem,
  StyledLink,
  TitleWrapper,
} from './MoviesGallery.styled';

export default function MoviesGallery({ moviesArr }) {
  const location = useLocation();
  return (
    <List>
      {moviesArr.map(({ id, title, imageUrl }) => (
        <ListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <ImageWrapper>
              <Image src={imageUrl} alt={title} width="370" />
            </ImageWrapper>
            <TitleWrapper>
              <h2>{title}</h2>
            </TitleWrapper>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
}

MoviesGallery.propTypes = {
  moviesArr: PropTypes.array.isRequired,
};
