import React, { useState } from "react";

interface SelectFooterProps {
  onNextQuestion: (selectedAnswer: boolean) => void;
}

const SelectFooter: React.FC<SelectFooterProps> = ({ onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  const handleSelectAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    onNextQuestion(answer);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        className={`w-16 h-16 bg-green-500 rounded-full text-white font-bold text-xl ${
          selectedAnswer === true && "opacity-50"
        }`}
        onClick={() => handleSelectAnswer(true)}
        disabled={selectedAnswer !== null}
      >
        O
      </button>
      <button
        className={`w-16 h-16 bg-red-500 rounded-full text-white font-bold text-xl ${
          selectedAnswer === false && "opacity-50"
        }`}
        onClick={() => handleSelectAnswer(false)}
        disabled={selectedAnswer !== null}
      >
        X
      </button>
    </div>
  );
};

export default SelectFooter;
