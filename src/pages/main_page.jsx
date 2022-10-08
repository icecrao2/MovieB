
import { Routes, Route } from 'react-router-dom';
import { movie_list } from '../hooks/movie_list.js';
import { dibed_list } from '../hooks/dibed_list.js';

import {
  NowPlaying,
  Detail,
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
          element={<NowPlaying
            movieList={movieList}
            handleMovieList={handleMovieList}
            dibed_list={dibed}
          />
          } />

        <Route path='detail/:id' element={
          <Detail
            dibed_list={dibed}
          />
        } >

        </Route>
      </ Routes >
    </div>
  )
}