export function normalizeCastData(dataArr) {
  return dataArr
    .filter(el => el.profile_path)
    .map(({ cast_id, character, name, profile_path }) => ({
      id: cast_id,
      character,
      name,
      imageUrl: `https://image.tmdb.org/t/p/w300${profile_path}`,
    }));
}
