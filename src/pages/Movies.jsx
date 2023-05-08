import { Container, Section } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'services/API-service';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? ''
  );
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        const data = await MoviesAPI.fetchMoviesByQuery(searchQuery);
        setMovies(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  const onSubmit = query => {
    setSearchQuery(query);
    setSearchParams({ query });
  };

  return (
    <Section>
      <Container>
        <Searchbar onSubmit={onSubmit} />
        {error && (
          <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
            Ops, something went wrong
          </p>
        )}
        {isLoading && <Loader />}
        <MoviesGallery moviesArr={movies} />
      </Container>
    </Section>
  );
}
