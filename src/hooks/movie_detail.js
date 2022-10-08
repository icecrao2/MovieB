import { useState } from 'react';


export const movie_detail = (initial = []) => {

  const [movieDetail, setmovieDetail] = useState(initial);

  const handlemovieDetail = (value) => {
    setmovieDetail(value);
  }

  return { movieDetail, handlemovieDetail };
}