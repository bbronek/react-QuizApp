import styles from './QuizQuestions.module.css'
import React, {Fragment, useState} from 'react';
import QuizResults from "./QuizResults";

interface QuizQuestionProps {
    questions: Array<any>
}

const shuffleArray = (array:Array<string>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

const QuizQuestions: React.FC<QuizQuestionProps> = props => {
    const [closedQuestions, setClosedQuestions] = useState(false);
    const [points, setPoints] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [answers, setAnswers] = useState(shuffleArray([props.questions[questionId]['correctAnswer']].concat(props.questions[questionId]['incorrectAnswers'])))
    const [chosenAnswer, setChosenAnswer] = useState(answers[0])
    const [isLastQuestion, setLastQuestion] = useState(false);

    const onChangeAnswer = (event: any) => {
        setChosenAnswer(event.target.value);
    }

    const onSubmitClick = () => {
        if (chosenAnswer === props.questions[questionId]['correctAnswer']) {
            setPoints(points + 1);
        }

        if (questionId + 1 === props.questions.length) {
            setLastQuestion(true);
            setClosedQuestions(true);
            return;
        }

        setQuestionId(questionId + 1);
        setAnswers([props.questions[questionId + 1]['correctAnswer']].concat(props.questions[questionId + 1]['incorrectAnswers']));
    }
    console.log(props.questions);
    const handleCloseQuestions = () => setClosedQuestions(true);

    return (
        <Fragment>
            {!closedQuestions &&
                <div className={styles.questionBox}>
                    <span id={styles['close']} onClick={handleCloseQuestions}>X</span>
                    <h4>Points: {points}/{props.questions.length}</h4>
                    <h5>Question {questionId + 1} / {props.questions.length}</h5>
                    <h3>Question: {props.questions[questionId]['question']}</h3>
                    <div onChange={onChangeAnswer}>
                        <input style={{display: 'block'}} type='radio' value={answers[0]} name='answer' defaultChecked/> {answers[0]}
                        <input style={{display: 'block'}} type='radio' value={answers[1]} name='answer' /> {answers[1]}
                        <input style={{display: 'block'}} type='radio' value={answers[2]} name='answer' /> {answers[2]}
                        <input style={{display: 'block'}} type='radio' value={answers[3]} name='answer' /> {answers[3]}
                    </div>
                    <button className={styles.button} onClick={onSubmitClick}>Submit</button>
                </div>
            }
            {isLastQuestion &&
                <QuizResults points={points} possiblePoints={props.questions.length}/>
            }
        </Fragment>

    );
}

export default QuizQuestions;