import { questions } from "../constants";

// {questions[0].text}

const QuestionCard = ({ currentQuestion, optionClicked, submit }) => {
  return (
    <div>
      <div className=' flex flex-col gap-4 py-4 px-6 bg-coral-red rounded-2xl max-w-xl max-md:max-w-sm max-sm:max-w-xs'>
        <p className=' break-words'>
          <span> {questions[currentQuestion].id}</span>.{" "}
          {questions[currentQuestion].question}
        </p>
        <ol className=' flex flex-col list-alpha list-inside gap-2'>
          {questions[currentQuestion].options.map((option) => (
            <li
              key={option.id}
              className=' bg-white py-1 px-2 rounded-full cursor-pointer break-words'
              onClick={() => optionClicked(option.isCorrect)}
            >
              {option.text}
            </li>
          ))}
        </ol>
        <button
          className=' py-2 px-3 rounded-full mt-4 bg-slate-200'
          onClick={() => submit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
