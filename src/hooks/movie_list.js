import { useState } from 'react';


export const movie_list = (initial = []) => {

  const [movieList, setMovieList] = useState(initial);

  const handleMovieList = (value) => {
    setMovieList(value);
  }

  return { movieList, handleMovieList };
}