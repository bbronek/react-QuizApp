import {Fragment, useRef} from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
      <Fragment>
          <div className={styles.header}>
              <a href="#" className={styles.logo}>QuizApp</a>
              <div className={styles.headerRight}>
                  <a href="#about">About</a>
              </div>
          </div>
      </Fragment>
    );
}

export default Header;