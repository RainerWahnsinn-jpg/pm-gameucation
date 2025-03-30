import { useState, useEffect } from 'react';
import games from '../assets/data/pm-games.json';
import Layout from './Layout';

export default function Exercise() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");

  const questions = games.quizBattle; // Dynamisch geladen aus JSON

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setFeedback("✅ Richtig!");
    } else {
      setFeedback("❌ Leider falsch. Versuche es nochmal!");
    }
  };

  return (
    <div className="exercise-container">
      <h2>{questions[currentQuestion].question}</h2>
      <ul>
        {questions[currentQuestion].answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(index)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      {feedback && <div>{feedback}</div>}
    </div>
  );
}
