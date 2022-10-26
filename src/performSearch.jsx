export async function performSearch(modification, query) {
  const baseURL = 'https://api.themoviedb.org/3/';
  const api_key = '34cb69d93ca1c9a8ca1b557dff1c5374';
  const querySearch = query ? `&query=${query}` : '';
  const getResponse = await fetch(
    `${baseURL}${modification}?api_key=${api_key}${querySearch}&page=1`
  );
  if (!getResponse.ok) {
    throw new Error(getResponse);
  }
  const parcedResponse = await getResponse.json();
  return parcedResponse;
}
