import { Section } from 'components/App/App.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'services/API-service';
import { RevListItem, RevSubtitle, RevText } from './Reviews.styled';
import Loader from 'components/Loader/Loader';

export default function Reviews() {
  const { id: movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await MoviesAPI.fetchReviews(movieId);
        setReviews(data);
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
      {!reviews.length && (
        <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
          We don't have any reviews for this movie
        </p>
      )}
      {error && (
        <p style={{ fontSize: '40px', color: '#fff', textAlign: 'center' }}>
          Ops, something went wrong
        </p>
      )}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <RevListItem key={id}>
            <RevSubtitle>Author: {author}</RevSubtitle>
            <RevText>{content}</RevText>
          </RevListItem>
        ))}
      </ul>
    </Section>
  );
}
