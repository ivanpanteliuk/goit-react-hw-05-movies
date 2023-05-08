export function normalizeMovieDetailsData(dataObj) {
  return {
    title: dataObj.title,
    userScore: Math.floor(Math.ceil(dataObj.vote_average * 100) / 10) + '%',
    overview: dataObj.overview,
    genres: dataObj.genres.map(genre => genre.name).join(', '),
    year: new Date(dataObj.release_date).getFullYear(),
    imageUrl: dataObj.poster_path
      ? `https://image.tmdb.org/t/p/w500${dataObj.poster_path}`
      : 'https://cdn.pixabay.com/photo/2017/03/13/17/25/clapper-2140602_960_720.jpg',
  };
}
