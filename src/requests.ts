import IRequestApi from "./interfaces/IRequestsApi";
const api_key = process.env.REACT_APP_API_KEY

const requests: IRequestApi[] = [
    {
        title: 'Netflix Originals',
        fetchUrl: `/discover/tv?api_key=${api_key}&with_network=213`,
    },
    {
        title: 'Trending',
        fetchUrl: `/trending/all/week?api_key=${api_key}&language=en-US`,
    },
    {
        title: 'Top Rated',
        fetchUrl: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    },
    {
        title: 'Action Movies',
        fetchUrl: `/discover/movie?api_key=${api_key}&with_genres=28`,
    },
    {
        title: 'Comedy Movies',
        fetchUrl: `/discover/movie?api_key=${api_key}&with_genres=35`,
    },
    {
        title: 'Horror Movies',
        fetchUrl: `/discover/movie?api_key=${api_key}&with_genres=27`,
    },
    {
        title: 'Romance Movies',
        fetchUrl: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    },
    {
        title: 'Documentaries',
        fetchUrl: `/discover/movie?api_key=${api_key}&with_genres=99`,
    },
]


export default requests;