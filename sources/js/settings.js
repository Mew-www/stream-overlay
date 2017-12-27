const GIPHY_API_KEY = '';

export default {
  GIF_BY_KEYWORD: (keyword) => `https://api.giphy.com/v1/gifs/random`
    + `?api_key=${GIPHY_API_KEY}`
    + `&tag=${keyword}`
    + `&rating=PG-13`
};