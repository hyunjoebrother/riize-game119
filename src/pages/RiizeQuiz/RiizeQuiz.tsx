import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import QuizCard from "../../components/QuizCard/QuizCard";
import SelectFooter from "../../components/SelectFooter/SelectFooter";

interface Question {
  id: number;
  content: string;
  answer: boolean;
  info: string;
}

const RiizeQuiz: React.FC = () => {
  const [questions] = useState<Question[]>([
    {
      id: 1,
      content: "FFFf라이즈 사이렌은 데뷔곡이다",
      answer: false,
      info: "이러이러해서 111정답은 이거랍니당",
    },
    {
      id: 2,
      content: "TTT겟어기타의 기타는 일렉이다",
      answer: true,
      info: "이러이러해서 22정답은 이거랍니당",
    },
    {
      id: 3,
      content: "FFFf우오아ㅏㅇㅇ",
      answer: false,
      info: "이러이러해서 333 정답은 이거랍니당",
    },
    {
      id: 4,
      content: "TTT타입스크리바아아",
      answer: true,
      info: "이러이러해서 444 정답은 이거랍니당",
    },
    {
      id: 5,
      content: "TTT5555리바아아",
      answer: true,
      info: "이러이러해서 555 정답은 이거랍니당",
    },
    {
      id: 6,
      content: "FFFf666바아아",
      answer: false,
      info: "이러이러해서 666 정답은 이거랍니당",
    },
    {
      id: 7,
      content: "FFFf7777바아아",
      answer: false,
      info: "이러이러해서 777 정답은 이거랍니당",
    },
    {
      id: 8,
      content: "FFFf888리바아아",
      answer: false,
      info: "이러이러해서 888 정답은 이거랍니당",
    },
    {
      id: 9,
      content: "TTT9999바아아",
      answer: true,
      info: "이러이러해서 999 정답은 이거랍니당",
    },
    {
      id: 10,
      content: "FFFf101010크리바아아",
      answer: false,
      info: "이러이러해서 101010 정답은 이거랍니당",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showMainPopup, setShowMainPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [mainPopupContent, setMainPopupContent] = useState("");
  const [popupInfo, setPopupInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const incorrectCount = userAnswers.filter(
      (userAnswer, index) => userAnswer !== questions[index].answer
    ).length;
    setIncorrectCount(incorrectCount);
    console.log("틀린 문항 수: ", incorrectCount);
  }, [userAnswers, currentQuestionIndex]);

  useEffect(() => {
    if (showPopup) {
      const incorrectAnswer =
        userAnswers[currentQuestionIndex] !==
        questions[currentQuestionIndex].answer;
      if (incorrectAnswer) {
        setPopupInfo(questions[currentQuestionIndex].info);
        if (incorrectCount === 5 && currentQuestionIndex !== 9) {
          setShowMainPopup(true);
          setMainPopupContent("아쉽습니다.");
          setPopupContent("틀렸습니다!");
        } else if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          if (incorrectCount < 5) {
            setMainPopupContent("축하합니다!");
          } else {
            setMainPopupContent("아쉽습니다.");
          }
        } else {
          setPopupContent("틀렸습니다!");
        }
      } else {
        setPopupContent("정답입니다!");
        setPopupInfo("");
        if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          if (incorrectCount < 5) {
            setMainPopupContent("축하합니다!");
          } else {
            setMainPopupContent("아쉽습니다.");
          }
        }
      }
    }
  }, [showPopup]);

  useEffect(() => {
    if (incorrectCount === 5 && currentQuestionIndex !== 9) {
      setShowPopup(false);
      setShowMainPopup(true);
      setMainPopupContent("아쉽습니다.");
    }
  }, [incorrectCount]);

  const handleAnswerSelection = (selectedAnswer: boolean) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(updatedAnswers);
    setShowPopup(true);
  };

  const onNextQuestion = () => {
    if (currentQuestionIndex === 9) {
      setShowPopup(false);
    } else {
      setShowPopup(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const navigateToMainPage = () => {
    navigate("/");
  };

  return (
    <section className="w-full h-screen bg-black flex flex-col m-auto items-center">
      <Header />
      <div className="mt-10 w-full flex flex-col gap-6 items-center">
        <QuizCard
          quizNum={currentQuestionIndex + 1}
          quizContent={questions[currentQuestionIndex].content}
        />
      </div>
      <div className="my-16">
        <div className="w-96 h-96 bg-red-200">손가락 에셋</div>
      </div>
      <SelectFooter onNextQuestion={handleAnswerSelection} />
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-80 h-32 p-4 bg-white rounded-md flex flex-col items-center justify-center">
            <p className="text-lg font-bold">{popupContent}</p>
            <p className="text-sm">{popupInfo}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={onNextQuestion}
            >
              다음 문제로 이동하기
            </button>
          </div>
        </div>
      )}
      {showMainPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-80 h-32 p-4 bg-white rounded-md flex flex-col items-center justify-center">
            <p className="text-lg font-bold">{mainPopupContent}</p>
            {popupContent && popupInfo && (
              <div>
                <p className="text-sm">{popupInfo}</p>
              </div>
            )}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={navigateToMainPage}
            >
              메인 페이지로 이동하기
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default RiizeQuiz;