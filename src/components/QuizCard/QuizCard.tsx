import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { useLanguage } from "../../components/Translation/languageContext";

interface QuizCardProps {
  quizNum: number;
  quizContent: string;
}

const QuizCard: React.FC<QuizCardProps> = ({ quizNum, quizContent }) => {
  const { language, changeLanguage } = useLanguage();
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    changeLanguage(savedLanguage);
  });

  return (
    <section className="w-auto h-auto 2xs:min-w-48 2xs:max-w-56 xs:min-w-64 xs:max-w-72 2sm:min-w-72 2sm:max-w-80 sm:min-w-[300px] sm:max-w-96 tb:min-w-80 tb:max-w-[488px] lg:min-w-80 lg:max-w-[526px] 2xs:p-4 xs:p-4 p-5 flex flex-col justify-center items-start rounded-2xl bg-orange-500 text-white">
      <p className="2xs:text-sm xs:text-base 2sm:text-base text-lg font-bold">
        <Trans i18nKey="translations:qTitle">질문</Trans>
        {quizNum}
        <Trans i18nKey="translations:qTitleCount">번</Trans>
      </p>
      <span className="2xs:mt-1 2sm:mt-1 xs:mt-1 mt-3 2xs:text-xs xs:text-sm 2sm:text-sm text-base font-light">
        {quizContent}
      </span>
    </section>
  );
};

export default QuizCard;
