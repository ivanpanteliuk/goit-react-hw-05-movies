import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'services/API-service';
import {
  CastItem,
  CastList,
  CastSpanText,
  CastSubtitle,
  CastText,
  CastTitleWrapper,
} from './Cast.styled';
import { Section } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';

export default function Cast() {
  const { id: movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await MoviesAPI.fetchCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <Section>
      {isLoading && <Loader />}
      {!cast.length && (
        <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
          There is no information about cast yet
        </p>
      )}
      {error && (
        <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
          Ops, something went wrong
        </p>
      )}
      <CastList>
        {cast.map(({ id, character, name, imageUrl }) => (
          <CastItem key={id}>
            <img src={imageUrl} alt={name} width="300" />
            <CastTitleWrapper>
              <CastSubtitle>{name}</CastSubtitle>
              <CastText>
                <CastSpanText>Character: </CastSpanText>
                {character}
              </CastText>
            </CastTitleWrapper>
          </CastItem>
        ))}
      </CastList>
    </Section>
  );
}
