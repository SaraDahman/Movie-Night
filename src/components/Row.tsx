import React, { FC, useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from '../axios';
import { IMovie } from "../interfaces";
import '../style/Row.css'

const Row: FC<{title: string, fetchUrl:string}> = ({title, fetchUrl}) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const imageBaseUrl:string = 'https://image.tmdb.org/t/p/original'

  useEffect(()=>{
    const fetchData = async () => {
        try {
            const response = await axios.get(fetchUrl);
            // console.log(response.data.results);
            setMovies(response.data.results) 
        } catch (error) {
            console.log(error, `error in fetching the ${title} data`);
        }
    }
    fetchData()
  },[fetchUrl, title])

  return (
      <div className="row">
        <h2>{title}</h2>
        <div className="container">
          {movies.map((movie)=> {
            return(
              <LazyLoadImage
              key={movie.id}
              src= {`${imageBaseUrl}${movie.poster_path}`} 
              alt={movie.title} 
              className = 'poster'
              />
            )
          })}
        </div>
      </div>
  )
}

export default Row