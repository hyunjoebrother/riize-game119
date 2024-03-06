import React from "react";
import Header from "../../components/Header/Header";
import QuizCard from "../../components/QuizCard/QuizCard";

const Main = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Header />
      <p className="text-pink-600 text-4xl">ㅎㅇ</p>
      <section className="flex flex-col gap-6">
        <QuizCard quizNum={1} quizContent="라이즈 사이렌은 데뷔곡이다" />
        <QuizCard quizNum={2} quizContent="겟어기타의 기타는 일렉이다" />
        <QuizCard quizNum={3} quizContent="우오아ㅏㅇㅇ" />
        <QuizCard quizNum={4} quizContent="타입스크리바아아" />
      </section>
    </div>
  );
};

export default Main;
