import styles from '../../styles/navigation/navigation.module.css';
import '../../styles/navigation/navigation.css';
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  NavLink,
} from 'react-router-dom';

import { nav } from '../../json/navs.js';

export const Navigation = () => {


  return (

    <nav className={styles.navigation}>
      <h1 className = {styles.titleLogo}>
        <FontAwesomeIcon icon={faClapperboard} />
      </h1>
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
    </nav>

  )

}

