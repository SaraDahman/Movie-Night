import IRequestApi from "./interfaces/IRequestsApi";
const api_key = process.env.REACT_APP_API_KEY

const requests: IRequestApi = {
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
    comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
    actionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
    horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
    romanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
    documentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`,
    netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_network=213`,
}

export default requests;