import { useCallback, useState } from "react"
import QUESTIONS from "../questions.js"
import win from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizCompleted = activeQuestionIndex === QUESTIONS.length;


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswer((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(()=>{
        handleSelectAnswer(null);
    },[handleSelectAnswer])


    if(quizCompleted){
        return(
            <div id="quiz">
                <img src={win}/>
                <h2>Quiz complete!</h2>
            </div>
        )
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    
    //tạo bản sao mảng gốc 0 để xáo trộn (0 làm thay đổi mảng gốc) -
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffleArray(shuffledAnswers);

    return(
        <>
            <div id="quiz">
                <div id="question">
                    <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {/*{QUESTIONS[activeQuestionIndex].answers.map((answer)=>(*/}
                        {shuffledAnswers.map((answers)=>(
                            <li key = {answers} className="answer">
                                <button onClick={()=>handleSelectAnswer(answers)}>
                                    {answers}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>            
            </div>
        </>
    )
}