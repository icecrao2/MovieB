import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useParams } from "react-router-dom";
import { getDetailMovie } from '../../api/get_movie.js';
import { movie_detail } from '../../hooks/movie_detail.js';

export const Detail = ({ dibed_list }) => {

  const { dibedList, handleDibedList } = dibed_list;
  const { movieDetail, handlemovieDetail } = movie_detail();

  const { id } = useParams();

  useEffect(
    () => {
      async function getMovie() {
        const movie = await getDetailMovie(id);
        handlemovieDetail(movie);
      }
      getMovie();
    },
    []
  );

  console.log(movieDetail);

  return (
    <div>
      <h1>{movieDetail.title}</h1>
    </div>
  );
}