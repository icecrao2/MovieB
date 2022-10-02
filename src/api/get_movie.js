import { api } from '../json/movie_api.js';


export const getNowPlayingMovie = async (
  display = '10',
  start = '1',
  year = new Date().getFullYear(),
) => {

  const api_key = api.api_key;
  const defaultUrl = api.url;
  const language = api.language;
  const now_playing_path = 'now_playing';

  const url = `${defaultUrl}/${now_playing_path}?api_key=${api_key}&language=${language}`;


  const response = await fetch(url);
  const result = await response.json();


  return result;
};