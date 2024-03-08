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
    <div className="flex justify-center 2xs:gap-6 gap-10 sm:gap-8 tb:gap-12 lg:gap-16">
      <button
        className={`w-[72px] h-[72px] 2sm:w-20 2sm:h-20 sm:w-16 sm:h-16 tb:w-20 tb:h-20 lg:w-20 lg:h-20 bg-green-500 rounded-full text-white font-bold 2xs:text-3xl xs:text-3xl 2sm:text-3xl text-xl ${
          selectedAnswer === true && "opacity-50"
        }`}
        onClick={() => handleSelectAnswer(true)}
        disabled={selectedAnswer !== null}
      >
        O
      </button>
      <button
        className={`w-[72px] h-[72px] 2sm:w-20 2sm:h-20 sm:w-16 sm:h-16 tb:w-20 tb:h-20 lg:w-20 lg:h-20 bg-red-500 rounded-full text-white font-bold 2xs:text-3xl xs:text-3xl 2sm:text-3xl text-xl ${
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
