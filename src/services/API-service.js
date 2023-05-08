import { normalizeCastData } from 'helpers/normalizeCastData';
import { normalizeMovieDetailsData } from 'helpers/normalizeMovieDetailsData';
import { normalizeReviewData } from 'helpers/normalizeReviewData';
import { normalizeTrendingAndQueryData } from 'helpers/normalizeTrendingAndQueryData';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '?api_key=4be2754f05f22adf5c9807436c0754eb';
const TRENDING_MOVIES = 'trending/movie/day';

export const MoviesAPI = {
  async fetchTrending() {
    const URL = `${BASE_URL}${TRENDING_MOVIES}${KEY}`;

    const response = await fetch(URL);
    const { results } = await response.json();

    return normalizeTrendingAndQueryData(results);
  },

  async fetchMovieDetails(id) {
    const URL = `${BASE_URL}movie/${id}${KEY}`;
    const response = await fetch(URL);
    const data = await response.json();

    return normalizeMovieDetailsData(data);
  },

  async fetchCast(id) {
    const URL = `${BASE_URL}movie/${id}/credits${KEY}`;

    const response = await fetch(URL);
    const { cast } = await response.json();

    return normalizeCastData(cast);
  },

  async fetchReviews(id) {
    const URL = `${BASE_URL}movie/${id}/reviews${KEY}`;

    const response = await fetch(URL);
    const { results } = await response.json();

    return normalizeReviewData(results);
  },

  async fetchMoviesByQuery(query) {
    const URL = `${BASE_URL}search/movie${KEY}&query=${query}`;

    const response = await fetch(URL);
    const data = await response.json();

    return normalizeTrendingAndQueryData(data.results);
  },
};
