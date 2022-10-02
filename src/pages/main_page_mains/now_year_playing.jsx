import { getNowPlayingMovie } from '../../api/get_movie.js';
import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const NowPlaying = ({ movieList, handleMovieList }) => {


  useEffect(
    () => {
      async function setMovieList() {
        const data = await getNowPlayingMovie();
        handleMovieList(data.results);
      }
      setMovieList();
    },
    []
  );

  console.log(movieList);
  
  return (
    <main className={styles.main}>
      
      {movieList.map((movie, index)=>{
        return (
          <div key={index} id={movie.id} className={styles.card}>
            <div className={styles.icon}>
              <span id={movie.id}><FontAwesomeIcon icon={faStar} size="lg" /></span>
            </div>
            <img className={styles.poster} 
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}></img>
          </div>)
      })}
        
    </main>
  );
}