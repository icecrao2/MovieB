
import { Routes, Route } from 'react-router-dom';

import {
  Testing,
  LoginPage,
} from '../pages';
export const MainPage = () => {


  return (
    < Routes >
      <Route path='one' element={
        <Testing />}>
      </Route>

      <Route path='two' >
        two!
      </Route>
    </ Routes >
  )
}