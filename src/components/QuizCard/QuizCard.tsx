import React from "react";

interface QuizCardProps {
  quizNum: number;
  quizContent: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ quizNum, quizContent }) => {
  return (
    <section className="w-80 h-20 px-5 flex flex-col justify-center items-start rounded-2xl bg-blue-500 text-white">
      <p className="text-lg font-bold">질문 {quizNum}번</p>
      <span className="text-sm font-thin">{quizContent}</span>
    </section>
  );
};

export default QuizCard;
