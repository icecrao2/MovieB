import { useEffect } from 'react';
import styles from '../../styles/detail/detail.module.css';


import { useParams } from "react-router-dom";
import { getDetailMovie } from '../../api/get_movie.js';
import { movie_detail } from '../../hooks/movie_detail.js';
import screenSizeManager from '../../hooks/check_screen_size.js';

export const Detail = ({ dibed_list }) => {

  const {width: screenWidth} = screenSizeManager();
  const { movieDetail, handlemovieDetail } = movie_detail();

  const { id } = useParams();

  const url = screenWidth > 700 ? 
    'https://image.tmdb.org/t/p/w500/' : 'https://image.tmdb.org/t/p/w400/'

  
  useEffect (
    () => {
      async function getMovie() {
        const movie = await getDetailMovie(id);
        handlemovieDetail(movie);
      }
      getMovie();
    },
    []
  );

  const hrStyle={
    background:'#959595',
    height:'1px',
    border:'0',
  }

  console.log(movieDetail);

  return (
    <div className={styles.main}>
      
      <h1 className={styles.title__main}>영화 상세</h1>
      <hr style={hrStyle}/>

      
      
      <div className={styles.everyDivision}>
        
        <div>
          <img
                  src={`${url}${movieDetail.poster_path}`}></img>
        </div>
        <div className={styles.summaryDivision}>
          
          <h1 className={styles.title}>{movieDetail.title} 
            {
              movieDetail.status ==='Released' ? 
              <span className={styles.status}>(상영중)</span>
              : 
              <span className={styles.status}>(상영예정)</span>
            }
          
          </h1>
          
          <hr style={hrStyle}/>
          
          <div className={styles.companiesContainer}>
            <span className={styles.weight}>{movieDetail.tagline}</span>
          </div>
          
          <hr style={hrStyle}/>
          
          <div className={styles.overviewContainer}>
            <h2 className={styles.secondTitle}>줄거리</h2>
            <p className={styles.overview}>{movieDetail.overview}</p>
          </div>

          <hr style={hrStyle}/>
  
          <div className={styles.releaseContainer}>
            <h2 className={styles.secondTitle}>개봉일</h2>
            <span className={styles.weight}>{movieDetail.release_date}</span>
          </div>

          <hr style={hrStyle}/>
  
          <div className={styles.companiesContainer}>
            <h2 className={styles.secondTitle}>평점</h2>
            <span className={styles.weight}>{movieDetail.vote_average}</span>
          </div>

          <hr style={hrStyle}/>
  
          <div className={styles.companiesContainer}>
            <h2 className={styles.secondTitle}>제작사</h2>
            {
              movieDetail.production_companies ?
              movieDetail.production_companies.map((item) => <span className={styles.companies}>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;${item.name}</span> )
              :
              <span>none</span>
            }
          </div>

          <hr style={hrStyle}/>
          
        </div>
      </div>
    </div>
  );
}