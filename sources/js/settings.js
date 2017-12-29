const GIPHY_API_KEY = 'xxx';
const YOUTUBE_API_KEY = 'xxx';

export default {

  GIF_BY_KEYWORD: (keyword) => `https://api.giphy.com/v1/gifs/random`
                              + `?tag=${keyword}`
                              + `&rating=PG-13`
                              + `&api_key=${GIPHY_API_KEY}`,

  YT_VID_METADATA_BY_VID_ID: (video_id) => `https://www.googleapis.com/youtube/v3/videos`
                                          + `?id=${video_id}`
                                          + `&part=snippet,contentDetails`
                                          + `&key=${YOUTUBE_API_KEY}`
};