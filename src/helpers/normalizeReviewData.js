export function normalizeReviewData(dataArr) {
  return dataArr.map(({ author, content, id }) => ({ author, content, id }));
}
