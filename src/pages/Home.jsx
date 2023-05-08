import { useEffect, useState } from 'react';

import { MoviesAPI } from 'services/API-service';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Container, MainTitle, Section } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';

export default function Home() {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await MoviesAPI.fetchTrending();
        setTrendingMoviesArr(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Section>
      <Container>
        {error && (
          <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
            Ops, something went wrong
          </p>
        )}
        <MainTitle>Trending today</MainTitle>
        {isLoading && <Loader top="50" />}
        <MoviesGallery moviesArr={trendingMoviesArr} />
      </Container>
    </Section>
  );
}
