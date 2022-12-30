/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
import requests from '../requests'
import axios from '../axios'
import { IMovie } from '../interfaces'
import '../style/Header.css'

const Header:FC = () =>{
  const [movie, setMovie] = useState<IMovie | null>(null);
  const imageBaseUrl:string = 'https://image.tmdb.org/t/p/original';

  // const [movieUrl, setMovieUrl] = useState<string | null>(null);
  //   const opts = {
  //     playerVars: {
  //       autoplay: 1,
  //       loop: 1,
  //       controls: 0,
  //     },
  //   }
  useEffect(()=>{
    const fetchData = async () =>{
        try {
            const {data} = await axios.get(requests[1].fetchUrl)
            const random = Math.floor(Math.random() * data.results.length-1)

            const mov = data.results[random]
            setMovie(mov);
            // const url = await movieTrailer(mov.name || mov.title || mov.original_title)  
            
            // console.log(mov);

            // const urlParams = new URLSearchParams(new URL(url).search)
            // const videoId = urlParams.get('v')

            // setMovieUrl(videoId)
            // console.log(url, typeof videoId);
            
          } catch (error) {
            console.log(error, 'error in fetching header data');   
          }
        }
        fetchData();
      },[])

      const truncate = (str:string | undefined, n:number) => {
        if(str){
          const strArr = str.split(' ');
          return strArr.length > n ? strArr.slice(0, n-1).join(' ') + '...' : str;
        }
      }
      
  return (
    <header className='banner'
      style={{
        backgroundSize :'cover',
        backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
        backgroundPosition: 'top'
      }}
    >
      <div className="banner-content">
        <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
        <div className="buttons">
          <button>
            <i className="fa-solid fa-play"></i>
            Play
          </button>
          <button>
            <i className="fa-solid fa-circle-info"></i>            More info
          </button>
        </div>
        <p>
          {truncate(movie?.overview, 50)}
        </p>
      </div>
      {/* <YouTube videoId={movieUrl } opts={opts} className='video'/> */}
    </header>
  )
}

export default Header

