import { questions } from "../constants";

const FinalResults = ({ attemptedQuestions, score, restartGame }) => {
  return (
    <div>
      <div className=' flex justify-center items-center flex-col py-4 px-24 bg-coral-red rounded-2xl'>
        <h2 className=' text-xl mb-8'>
          You Attempted {attemptedQuestions} out of {questions.length} Questions
        </h2>
        <p className=' text-lg'>
          YOU SCORED {score}/{questions.length} That's{" "}
          {Math.floor((score / questions.length) * 100)}%
        </p>
        <button
          className=' py-2 px-3 rounded-full mt-4 bg-slate-200'
          onClick={() => restartGame()}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default FinalResults;
