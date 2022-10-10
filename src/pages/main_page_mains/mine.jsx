import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import {
  getDibedData,
} from '../../firebase/DB/databaseAccess.js';
import {
  Link,
} from 'react-router-dom';
import { pages } from '../../json/navs.js';
import { getDetailMovie } from '../../api/get_movie.js';
import { emailController } from '../../js/localstorage_manager.js';

export const Mine = ({ movieList, handleMovieList, dibed_list }) => {


  const { dibedList, handleDibedList } = dibed_list;
  const user = emailController().emailConverter();


  useEffect(
    () => {
      handleMovieList([]);

      async function getDibedList() {

        await handleDibedList(await getDibedData(user) || []);

        dibedList.map(async (key) => {
          const movie = await getDetailMovie(key);
          handleMovieList((original) => [...original, movie]);
        });

      }
      getDibedList();
    },
    [user]
  );


  return (
    <main className={styles.main}>

      {movieList.map((movie, index) => {

        return (
          <div key={index} id={movie.id} className={styles.card}>
            <Link to={`${pages.link}/${movie.id}`} className={styles.link} >
              <img className={styles.poster}
                src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}></img>
            </Link>
          </div>)
      })}

    </main >
  );
}