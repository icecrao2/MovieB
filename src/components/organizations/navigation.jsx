import styles from '../../styles/navigation/navigation.module.css';
import '../../styles/navigation/navigation.css';
import { faClapperboard, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  NavLink,
} from 'react-router-dom';

import { nav } from '../../json/navs.js';
import screenSizeManager from '../../hooks/check_screen_size.js';
import { clickMenuBar } from '../../js/nav_style.js';

export const Navigation = () => {

  const {width: screenWidth} = screenSizeManager();
  
  
  return (

    <nav className={styles.navigation}>
      <h1 className={styles.titleLogo}>
        <FontAwesomeIcon icon={faClapperboard} />
      </h1>

      {screenWidth <= 600 ? (
      
        <ul className='mobileUl'>
          {
            nav.map((link, index) => {
              return (
                <li style={{width:screenWidth}} className='mobileLi' key={index}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "unActiveLink"
                    }
                  >{link.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      ) : (
        <ul className={styles.ul}>
          {
            nav.map((link, index) => {
              return (
                <li className={styles.li} key={index}>
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "unActiveLink"
                    }
                  >{link.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      )}

      {screenWidth <= 600 ? (
        <a href="#" className={styles.menuBar} onClick={clickMenuBar}>
          <FontAwesomeIcon icon={faBars} />
        </ a>
      ) : ''}
    </nav>

  )

}

