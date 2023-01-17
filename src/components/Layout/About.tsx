import {Fragment} from "react";
import styles from './About.module.css';
const About = () => {
    return (
        <Fragment>
            <div  id='about' className={styles.container}>
                <p className={styles.aboutText}>About:</p>
                <p className={styles.info}>
                    QuizApp is based on:
                    <a href={'https://www.flickr.com/services/api/flickr.photos.search.html'} target='_blank'> Flickr photo search API </a>
                     and
                    <a href={'https://the-trivia-api.com/'} target='_blank'> The Trivia API</a>
                </p>
            </div>
        </Fragment>
    )
}

export default About;