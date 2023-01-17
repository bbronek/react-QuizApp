import styles from './Card.module.css'
import React, {Fragment, useState} from 'react';
import RenderImage from '../../Images/RenderImage';
import QuizSettings from '../../QuizSettings/QuizSettings';

interface CardProps {
    category: string
}

const Card: React.FC<CardProps> = props => {
    const [showSettings, setShowSettings] = useState(false);
    const onClick = () => setShowSettings(!showSettings);

    return (
        <Fragment>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.container}>
                    <RenderImage query={props.category} />
                    <div className={styles.bannerContent}>
                        <p className={styles.text}>{props.category}</p>
                    </div>
                </div>
            </div>
            {showSettings ? <QuizSettings category={props.category}/> : null}
        </Fragment>

    );
}

export default Card;