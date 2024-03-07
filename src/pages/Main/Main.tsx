import React from "react";
import Header from "../../components/Header/Header";

const Main: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col m-auto items-center">
      <Header />
      <section className="mt-10 w-full flex flex-col gap-6 items-center">
        <button className="w-48 h-10 px-5 flex flex-col justify-center items-start rounded-2xl bg-orange-500 text-white">
          <a href="/riize">라이즈 퀴즈로</a>
        </button>
      </section>
    </div>
  );
};

export default Main;
