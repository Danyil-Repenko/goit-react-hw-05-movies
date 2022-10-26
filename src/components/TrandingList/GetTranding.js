export async function getTranding(Url) {
    const base = 'https://api.themoviedb.org/3/trending/all/day';
    const api_key = '34cb69d93ca1c9a8ca1b557dff1c5374';
    const getResponse = await fetch(`${base}?api_key=${api_key}`)
    if (!getResponse.ok) {
        throw (new Error(getResponse))
    }
    const parcedResponse = await getResponse.json()
    return parcedResponse;
}