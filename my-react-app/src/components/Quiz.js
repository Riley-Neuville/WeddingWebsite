import React, { useState } from "react";
import "../css/Quiz.css";

function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(null); // Track which button was clicked

  const questions = [
    {
      questionText: "What are the names of Riley and Alexis's dogs?",
      answerOptions: [
        { answerText: "Delly and Piper", isCorrect: false },
        { answerText: "Ziggy and Crash", isCorrect: true },
        { answerText: "Coco and Beans", isCorrect: false },
        { answerText: "Naga and Griff", isCorrect: false },
      ],
    },
    {
      questionText:
        "What kind of animal have Riley and Alexis collectively never owned?",
      answerOptions: [
        { answerText: "A Ball Python", isCorrect: false },
        { answerText: "A Giant African Millipede", isCorrect: false },
        { answerText: "A Hamster", isCorrect: false },
        { answerText: "A Chinchilla", isCorrect: true },
      ],
    },
    {
      questionText: "Where was Alexis and Riley's first date?",
      answerOptions: [
        { answerText: "Midtown Sushi", isCorrect: true },
        { answerText: "Mission Taco", isCorrect: false },
        { answerText: "Kaldi's Coffee", isCorrect: false },
        { answerText: "The Moolah Movie Theater", isCorrect: false },
      ],
    },
    {
      questionText:
        "Riley and Alexis both have three siblings and both are the ________ child.",
      answerOptions: [
        { answerText: "First", isCorrect: false },
        { answerText: "Second", isCorrect: false },
        { answerText: "Third", isCorrect: false },
        { answerText: "Fourth", isCorrect: true },
      ],
    },
    {
      questionText:
        "What was the favorite childhood video game of both Riley and Alexis",
      answerOptions: [
        { answerText: "Call of Duty: Modern Warfare 2", isCorrect: false },
        { answerText: "Mario Party", isCorrect: false },
        { answerText: "Crash Bandicoot", isCorrect: true },
        { answerText: "Frogger", isCorrect: false },
      ],
    },
    {
      questionText:
        "Where did Alexis live during their one year of long distance dating?",
      answerOptions: [
        { answerText: "New York City", isCorrect: false },
        { answerText: "Chicago", isCorrect: true },
        { answerText: "Fort Lauderdale", isCorrect: false },
        { answerText: "Milwaukee", isCorrect: false },
      ],
    },
    {
      questionText: "Which team do Alexis and Riley have season tickets to?",
      answerOptions: [
        { answerText: "St.Louis Blues", isCorrect: false },
        { answerText: "St.Louis Cardinals", isCorrect: false },
        { answerText: "St.Louis City SC", isCorrect: true },
        { answerText: "St.Louis Battlehawks", isCorrect: false },
      ],
    },
    {
      questionText: "Where did Riley propose to Alexis?",
      answerOptions: [
        { answerText: "Stockholm, Sweden", isCorrect: true },
        { answerText: "Paris, France", isCorrect: false },
        { answerText: "Madrid, Spain", isCorrect: false },
        { answerText: "St.Louis, Missouri", isCorrect: false },
      ],
    },
    {
      questionText:
        "How many countries have Riley and Alexis visited together?",
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "7", isCorrect: true },
        { answerText: "9", isCorrect: false },
        { answerText: "2", isCorrect: false },
      ],
    },
    {
      questionText:
        "Where did Riley and Alexis first say I love you to eachother?",
      answerOptions: [
        { answerText: "Milwaukee Summerfest Grounds", isCorrect: false },
        { answerText: "St.Louis University", isCorrect: false },
        { answerText: "The St.Louis Zoo", isCorrect: false },
        { answerText: "The St.Louis Botanical Gardens", isCorrect: true },
      ],
    },
    // Add more questions here
  ];

  const handleAnswerOptionClick = (isCorrect, index) => {
    setClickedAnswer({ index, isCorrect }); // Track the clicked button and correctness

    if (isCorrect) {
      setScore(score + 1);
    }

    // Show feedback for 1 second, then move to the next question
    setTimeout(() => {
      setClickedAnswer(null); // Clear clicked answer
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz">
      {showResults ? (
        <div className="results">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={answerOption.answerText}
                  className={
                    clickedAnswer?.index === index
                      ? clickedAnswer.isCorrect
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect, index)
                  }
                  disabled={clickedAnswer !== null} // Disable all buttons after one is clicked
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizComponent;
