import { getNowPlayingMovie } from '../../api/get_movie.js';
import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { writeDibedData } from '../../firebase/DB/databaseAccess.js';
import { pages } from '../../json/navs.js';
import {
  Link,
} from 'react-router-dom';

export const NowPlaying = ({ user, movieList, handleMovieList }) => {


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


  //포스터 클릭 핸들러
  const onClickPoster = (evt) => {
    console.log(evt.target);
  }

  //찜하기 버튼 핸들러
  const onClickDibdOn = (evt) => {
    writeDibedData(user.email.replace('.', '*'), evt.currentTarget.id);
    evt.currentTarget.style.color = 'yellow';
  }


  return (
    <main className={styles.main}>

      {movieList.map((movie, index) => {
        return (
          <div key={index} id={movie.id} className={styles.card}>

            <div className={styles.icon}>
              <span id={movie.id}
                onClick={onClickDibdOn}>
                <FontAwesomeIcon icon={faStar} size="lg" />
              </span>
            </div>

            <Link to={`${pages.link}/${movie.id}`} className={styles.link} >
              <img onClick={onClickPoster} className={styles.poster}
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}></img>
            </Link>
          </div>)
      })}

    </main >
  );
}