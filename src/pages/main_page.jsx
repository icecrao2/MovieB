
import { Routes, Route } from 'react-router-dom';

import {
} from '../pages';


export const MainPage = ({ user }) => {

  //checkAuth();

  return (
    <div>
      < Routes >
        <Route path='/'>

        </Route>

        <Route path='two' >
          two!
        </Route>
      </ Routes >
    </div>
  )
}