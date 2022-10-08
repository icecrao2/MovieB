import { getNowPlayingMovie } from '../../api/get_movie.js';
import { useEffect } from 'react';
import styles from '../../styles/now_playing/now_playing.module.css';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { writeDibedData } from '../../firebase/DB/databaseAccess.js';

import { useParams } from "react-router-dom";


export const Detail = ({ dibed_list }) => {

  const { dibedList, handleDibedList } = dibed_list;
  const { id } = useParams()

  console.log(id);

  return (
    <div>
    </div>
  );
}