import React, { useState } from "react";
import "./Quiz.css";

import QuestionList from "./QuestionList";

function Quiz() {
  const questions = [
    {
      question: "What is capital of India?",
      options: ["Mumbai", "Banglore", "Delhi", "Haryana"],
      answer: "Delhi",
    },

    {
      question: "What is the world's fastest bird?  ",
      options: ["Eagle", "Hummingbird", "Peregrine falcon", "Ostrich"],
      answer: "Peregrine falcon",
    },

    {
      question: "What is a group of crows called?",
      options: ["Crwoo", "Shalo", "A murder", "Crowl"],
      answer: "A murder",
    },

    {
      question: "How many hearts does an octopus have?",
      options: ["One", "Two", "Three", "Four"],
      answer: "Three",
    },
    {
      question: "Who was the first Disney princess?",
      options: ["Mickey", "Mouse", "Snow White", "Robert"],
      answer: "Snow White",
    },
    {
      question: "Who are you?",
      options: ["Animal", "Human", "Being", "Soul"],
      answer: "Human",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const handleClick = (option) => {
    setCurrentAnswer(option);
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };
  return (
    <div className="App">
      {currentQuestionIndex < questions.length ? (
        <div>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? "button-disable" : "button"}
            onClick={handleNextQuestion}
          >
            Next Que.
          </button>
        </div>
      ) : (
        <div className="score">Your Score is:{score}</div>
      )}
    </div>
  );
}

export default Quiz;
