import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import QuestionCard from "./components/QuestionCard";
import FinalResults from "./components/FinalResults";
import { questions } from "./constants";
import Timer from "./components/Timer";

const App = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setscore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(20);

  const optionClicked = (isCorrect) => {
    setAttemptedQuestions(attemptedQuestions + 1);
    if (isCorrect) {
      setscore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResults(true);
    }
  };

  const restartGame = () => {
    setscore(0);
    setAttemptedQuestions(0);
    setCurrentQuestion(0);
    setSeconds(0);
    setMinutes(20);
    setFinalResults(false);
  };

  const submit = () => {
    setFinalResults(true);
  };

  return (
    <main className=' max-container flex justify-center items-center flex-col'>
      <Navbar />
      <h1 className=' text-4xl font-bold font-palanquin mt-6'>Rhema</h1>

      <Timer
        seconds={seconds}
        setSeconds={setSeconds}
        minutes={minutes}
        setMinutes={setMinutes}
        submit={submit}
      />

      {showFinalResults ? (
        <FinalResults
          attemptedQuestions={attemptedQuestions}
          score={score}
          restartGame={restartGame}
        />
      ) : (
        <QuestionCard
          currentQuestion={currentQuestion}
          optionClicked={optionClicked}
          submit={submit}
        />
      )}

      <div className='m-10 rounded-lg bg-white px-6 py-8 shadow-xl shadow-gray-300 ring-1 ring-slate-500'>
        <h1 className='  text-3xl font-medium  tracking-tight'>
          Simple Test System
        </h1>
        <p>
          Simple Setup to help you take your tests, timer starts immediately
          thought so try and do your best
        </p>
      </div>
    </main>
  );
};

export default App;
