/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import requests from '../requests'
import axios from '../axios'
import { IMovie } from '../interfaces'
import '../style/Header.css'

const Header:FC = () =>{
  const [movie, setMovie] = useState<IMovie | null>(null)
  const imageBaseUrl:string = 'https://image.tmdb.org/t/p/original'

  useEffect(()=>{
    const fetchData = async () =>{
        try {
            const {data} = await axios.get(requests[0].fetchUrl)
            const random = Math.floor(Math.random() * data.results.length-1)
            setMovie(data.results[random]);            
          } catch (error) {
            console.log(error, 'error in fetching header data');   
          }
        }
        fetchData();
      },[])
      console.log(movie);

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
      }}
    >
      <div className="banner-content">
        <h1>{movie?.name || movie?.title || movie?.original_title}</h1>
        <div className="buttons">
          <button>Play</button>
          <button>More info</button>
        </div>
        <p>
          {truncate(movie?.overview, 50)}
        </p>
      </div>
    </header>
  )
}

export default Header

