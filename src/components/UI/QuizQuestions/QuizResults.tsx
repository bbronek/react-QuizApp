import styles from "./QuizQuestions.module.css";
import React, {Fragment, useState} from "react";

const QuizResults = (points:any, possiblePoints:any) => {
    const [closedResults, setClosedResults] = useState(false);
    const handleCloseResults = () => setClosedResults(true);

    return (
        <Fragment>
            {!closedResults &&
                <div className={styles.resultsBox}>
                    <span id={styles['close']} onClick={handleCloseResults}>X</span>
                    <h2>Your Results:</h2>
                    <h4>Points: {points}/{possiblePoints}</h4>
                    <h3>{Math.round(points/possiblePoints* 100)}%</h3>
                    <button className={styles.button} onClick={handleCloseResults}>Close</button>
                </div>
            }
        </Fragment>
    );
}

export default QuizResults;