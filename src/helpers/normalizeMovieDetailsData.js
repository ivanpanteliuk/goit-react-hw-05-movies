export function normalizeMovieDetailsData(dataObj) {
  return {
    title: dataObj.title,
    userScore: Math.floor(Math.ceil(dataObj.vote_average * 100) / 10) + '%',
    overview: dataObj.overview,
    genres: dataObj.genres.map(genre => genre.name).join(', '),
    year: new Date(dataObj.release_date).getFullYear(),
    imageUrl: `https://image.tmdb.org/t/p/w500${dataObj.poster_path}`,
  };
}
