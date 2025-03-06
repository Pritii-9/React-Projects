import { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
      const [questions, setQuestions] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [loading, setLoading] = useState(true);
      const [gameOver, setGameOver] = useState(false);

      useEffect(() => {
            fetchQuestions();
      }, []);

      const fetchQuestions = async () => {
            try {
                  setLoading(true);
                  setGameOver(false);
                  setCurrentQuestion(0);
                  setScore(0);

                  const response = await axios.get(
                        "https://opentdb.com/api.php?amount=5&type=multiple"
                  );

                  const formattedQuestions = response.data.results.map((q) => ({
                        question: q.question,
                        correct_answer: q.correct_answer,
                        options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
                  }));

                  setQuestions(formattedQuestions);
                  setLoading(false);
            } catch (error) {
                  console.error("Error fetching quiz questions:", error);
            }
      };

      const handleAnswerClick = (selectedOption) => {
            if (selectedOption === questions[currentQuestion].correct_answer) {
                  setScore(score + 1);
            }
            if (currentQuestion + 1 < questions.length) {
                  setCurrentQuestion(currentQuestion + 1);
            } else {
                  setGameOver(true);
            }
      };
      const handleBack = () => {
            if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
            }
      };

      const handleRestart = () => {
            fetchQuestions();
      };


      return (
            <div className="quiz-container">
              {loading ? (
                <h2>Loading Questions...</h2>
              ) : gameOver ? (
                <div>
                  <h2>Game Over! Your score: {score}/{questions.length}</h2>
                  <button onClick={handleRestart} className="restart-btn">Restart Quiz</button>
                </div>
              ) : (
                <div>
                  <h2>Question {currentQuestion + 1} of {questions.length}</h2>
                  <h3 dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
                  <div className="options">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button key={index} onClick={() => handleAnswerClick(option)}>
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="navigation">
                    <button onClick={handleBack} disabled={currentQuestion === 0} className="back-btn">
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        };
        
        export default Quiz;
        