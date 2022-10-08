
import { Routes, Route } from 'react-router-dom';
import { movie_list } from '../hooks/movie_list.js';
import { dibed_list } from '../hooks/dibed_list.js';
import { useEffect } from 'react';

import {
  NowPlaying
} from '../pages';



export const MainPage = ({ user }) => {

  //checkAuth();

  const { movieList, handleMovieList } = movie_list();

  const dibed = dibed_list();

  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      < Routes >
        <Route path='now_playing'
          element={<NowPlaying user={user}
            movieList={movieList}
            handleMovieList={handleMovieList}
            dibed_list={dibed}
          />} />

        <Route path='two' >

        </Route>
      </ Routes >
    </div>
  )
}