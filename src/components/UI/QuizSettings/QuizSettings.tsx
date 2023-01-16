import React, {Fragment, useState} from "react";
import styles from './QuizSettings.module.css'
const QuizSettings = (props: any) => {
    const [questionsNumber, setQuestionsNumber] = useState(1);
    const [difficulty, setDifficulty] = useState('easy');
    const [closed, setClosed] = useState(false);

    const handleRangeChange = (event: any) => {
        setQuestionsNumber(event.target.value);
    }

    const handleSelectChange = (event: any) => {
        setDifficulty(event.target.value);
    }

    const handleClose = () => setClosed(true);

    return (
        <Fragment>
            {!closed &&
                <div className={styles.settingsBox}>
                    <span id={styles['close']} onClick={handleClose}>X</span>
                    <h2>Quiz Settings</h2>
                    <p>Category: {props.category}</p>

                    <div style={{marginTop: '4rem'}}>
                        <label htmlFor="difficulty">Difficulty: </label>
                        <select name="Difficulty" id="difficulty" onChange={handleSelectChange}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div style={{marginTop: '3rem'}}>
                        <label htmlFor="questionsLimit">Limit Questions (between 1 and 20) </label>
                        <input type="range"
                               value={questionsNumber}
                               id="questionsNumber"
                               name="questionsLimit"
                               min="1"
                               max="20"
                               step="1"
                               onChange={handleRangeChange}>
                        </input>
                        <output>{questionsNumber}</output>
                    </div>

                    <button className={styles.button}>Start</button>
                </div>
            }
        </Fragment>
    );
}

export default QuizSettings;