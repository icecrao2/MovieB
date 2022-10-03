
import { Routes, Route } from 'react-router-dom';
import { movie_list } from '../hooks/movie_list.js';

import {
  NowPlaying
} from '../pages';


export const MainPage = ({ user }) => {

  //checkAuth();
  const { movieList, handleMovieList } = movie_list();

  return (
    <div style={{
      width: '100%',
      height: '100%'
    }}>
      < Routes >
        <Route path='now_playing'
          element={<NowPlaying user={user} movieList={movieList} handleMovieList={handleMovieList} />} />

        <Route path='two' >

        </Route>
      </ Routes >
    </div>
  )
}