import { getNowPlayingMovie } from '../../api/get_movie.js';
import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getDibedData,
} from '../../firebase/DB/databaseAccess.js';
import { pages } from '../../json/navs.js';
import {
  Link,
} from 'react-router-dom';
import { emailController } from '../../js/localstorage_manager.js';


export const NowPlaying = ({ movieList, handleMovieList, dibed_list }) => {

  const { dibedList, handleDibedList, onClickDibdOn } = dibed_list;
  const user = emailController().emailConverter();

  useEffect(
    () => {
      async function getDibedList() {
        handleDibedList(await getDibedData(user) || []);
      }
      getDibedList();
    },
    []
  );

  useEffect(
    () => {
      async function setMovieList() {
        handleMovieList(await getNowPlayingMovie());
      }
      setMovieList();
    },
    []
  );

  return (
    <main className={styles.main}>

      {movieList.map((movie, index) => {


        return (
          <div key={index} id={movie.id} className={styles.card}>

            <div className={styles.icon}>

              {
                dibedList.includes(movie.id.toString()) ?
                  <span id={movie.id}
                    style={{ color: 'yellow' }}
                    onClick={onClickDibdOn}>
                    <FontAwesomeIcon icon={faStar} size="lg" />
                  </span>
                  :
                  <span id={movie.id}
                    onClick={onClickDibdOn}>
                    <FontAwesomeIcon icon={faStar} size="lg" />
                  </span>

              }



            </div>

            <Link to={`${pages.link}/${movie.id}`} className={styles.link} >
              <img className={styles.poster}
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}></img>
            </Link>
          </div>)
      })}

    </main >
  );
}