import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { MoviesAPI } from 'services/API-service';
import { Container, Section } from 'components/App/App.styled';
import {
  AddList,
  DetailsWrapper,
  GoBackBtn,
  MovieTitle,
  StyledTextLink,
  Subtitle,
  Text,
  TextSpan,
  Wrap,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/movies');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await MoviesAPI.fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <Section>
      <Container>
        {error && (
          <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
            Ops, something went wrong
          </p>
        )}
        {isLoading && <Loader top="50" />}
        <GoBackBtn to={backPath.current}>Go Back</GoBackBtn>
        <DetailsWrapper>
          <img src={movie.imageUrl} alt={movie.title} width="500" />
          <Wrap>
            <MovieTitle>{movie.title + `(${movie.year})`}</MovieTitle>
            <Text>
              <TextSpan>User score:</TextSpan> {movie.userScore}
            </Text>
            <Subtitle>Overview</Subtitle>
            <Text>{movie.overview}</Text>
            <Subtitle>Genres</Subtitle>
            <Text>{movie.genres}</Text>
            <Subtitle>Additional information</Subtitle>
            <AddList>
              <li>
                <StyledTextLink to="cast"> Cast </StyledTextLink>
              </li>
              <li>
                <StyledTextLink to="reviews"> Reviews </StyledTextLink>
              </li>
            </AddList>
          </Wrap>
        </DetailsWrapper>

        <Suspense fallback={<Loader top="10" />}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
}
