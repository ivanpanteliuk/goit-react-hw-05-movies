export function normalizeTrendingAndQueryData(dataArr) {
  return dataArr.map(({ id, title, poster_path }) => ({
    id,
    title,
    imageUrl: poster_path
      ? `https://image.tmdb.org/t/p/w400${poster_path}`
      : 'https://cdn.pixabay.com/photo/2017/03/13/17/25/clapper-2140602_960_720.jpg',
  }));
}
