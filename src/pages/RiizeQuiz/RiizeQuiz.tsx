import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import QuizCard from "../../components/QuizCard/QuizCard";
import SelectFooter from "../../components/SelectFooter/SelectFooter";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import cat from "../../assets/images/catGuitar.gif";

interface Question {
  id: number;
  content: string;
  answer: boolean;
  info: string;
}

const RiizeQuiz: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fingerObj, setFingerObj] = useState<any>(null);

  const finger0 = useGLTF("./models/finger0.glb");
  const finger1 = useGLTF("./models/finger1.glb");
  const finger2 = useGLTF("./models/finger2.glb");
  const finger3 = useGLTF("./models/finger3.glb");
  const finger4 = useGLTF("./models/finger4.glb");
  const finger5 = useGLTF("./models/finger5.glb");

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1200);
  }, []);

  useEffect(() => {
    if (incorrectCount === 0) {
      setFingerObj(finger5);
    } else if (incorrectCount === 1) {
      setFingerObj(finger4);
    } else if (incorrectCount === 2) {
      setFingerObj(finger3);
    } else if (incorrectCount === 3) {
      setFingerObj(finger2);
    } else if (incorrectCount === 4) {
      setFingerObj(finger1);
    } else if (incorrectCount === 5) {
      setFingerObj(finger0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [questions] = useState<Question[]>([
    {
      id: 1,
      content: "라이즈의 데뷔곡은 Siren이다",
      answer: false,
      info: "라이즈 데뷔곡은 Get A Guitar🎸",
    },
    {
      id: 2,
      content:
        "라이즈의 뜻은 '함께 성장하고 꿈을 실현해 나아가는 팀'이라는 의미이다",
      answer: true,
      info: "Rise(성장하다) + Realize(실현하다)로 '함께 성장하고 꿈을 실현해 나아가는 팀'이라는 의미이다",
    },
    {
      id: 3,
      content: "노래 LOVE 119에서 라이즈는 1-1-9를 10번 불렀다",
      answer: false,
      info: "가사에서 세어보니까 8번 불렀다",
    },
    {
      id: 4,
      content: "멤버 앤톤이 자주 사용하는 이모지는 🦕이다",
      answer: true,
      info: "브라키오사우르스 캐릭터 '브라키오'랑 닮아서 별명이다🦕",
    },
    {
      id: 5,
      content: "선수 출신인 멤버가 3명이다",
      answer: true,
      info: "성찬: 축구, 원빈: 육상, 앤톤: 수영",
    },
    {
      id: 6,
      content: "노래 Talk Saxy의 소재인 악기는 색소폰이다",
      answer: true,
      info: "Saxy는 색소폰 연주하는 매력적인 섹시한 사람을 뜻한다",
    },
    {
      id: 7,
      content: "라이즈에 대한 웹툰이 있다",
      answer: false,
      info: "카카오페이지에서 'Rise & Realize' 현대 판타지 웹소설이 있다",
    },
    {
      id: 8,
      content: "라이즈는 단체로 몰래 챌린지를 한 적이 있다",
      answer: false,
      info: "라이즈 쇼타로와 앤톤이 세븐틴 대기실 앞에서 몰래 '음악의 신' 챌린지를 했다",
    },
    {
      id: 9,
      content: "라이즈는 자컨에서 에버랜드를 갔다",
      answer: true,
      info: "RIIZE-LAND ❮우리가 왔다 에버랜드!❯ | WE RIIZE EP.7",
    },
    {
      id: 10,
      content: "개발자이자 퀴즈 출제자는 브리즈(BRIIZE)이다",
      answer: false,
      info: "아니다. 하지만 Siren, Get A Guitar, Love119 챌린지를 할 정도로 좋아하고 무대도 자주 본다",
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

  useEffect(() => {
    const incorrectCount = userAnswers.filter(
      (userAnswer, index) => userAnswer !== questions[index].answer
    ).length;
    setIncorrectCount(incorrectCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          setMainPopupContent("아쉬워요🥲");
          setPopupContent("땡!🚨");
        } else if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          if (incorrectCount < 5) {
            setMainPopupContent("🎊축하합니다🎊");
          } else {
            setMainPopupContent("아쉬워요🥲");
          }
        } else {
          setPopupContent("땡!🚨");
        }
      } else {
        setPopupContent("정답🥳");
        setPopupInfo("");
        if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          if (incorrectCount < 5) {
            setMainPopupContent("🎊축하합니다🎊");
          } else {
            setMainPopupContent("아쉬워요🥲");
          }
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopup]);

  useEffect(() => {
    if (incorrectCount === 5 && currentQuestionIndex !== 9) {
      setShowPopup(false);
      setShowMainPopup(true);
      setMainPopupContent("아쉬워요🥲");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // const navigateToMainPage = () => {
  //   navigate("/");
  // };

  return (
    <section className="w-full h-screen bg-black flex flex-col m-auto items-center">
      <Header />
      <div className="mt-10 w-full flex flex-col gap-6 items-center">
        <QuizCard
          quizNum={currentQuestionIndex + 1}
          quizContent={questions[currentQuestionIndex].content}
        />
      </div>
      <div className="2xs:mt-8 xs:mt-6 mt-10 tb:mt-12 lg:mt-20 lg:mb-4">
        <div className="2xs:w-[264px] 2xs:h-[314px] xs:w-[336px] xs:h-[372px] 2sm:w-[348px] 2sm:h-[430px] sm:w-[400px] sm:h-[440px] tb:w-[420px] tb:h-[480px] lg:w-[360px] lg:h-[400px] xl:w-[480px] xl:h-[500px] flex items-center justify-center">
          {!isLoaded ? (
            <div className="w-36 h-36 tb:w-44 tb:h-44 lg:w-48 lg:h-48 flex justify-center items-center rounded-full bg-white">
              <img className="w-24 h-24 tb:w-36 tb:h-36 lg:w-40 lg:h-40" src={cat} alt="" />
            </div>
          ) : (
            <Canvas camera={{ position: [6, 10, -32] }}>
              <OrbitControls />
              <ambientLight intensity={3} />
              <Environment preset="sunset" />
              {incorrectCount === 0 && (
                <primitive scale={9} object={finger5.scene} />
              )}
              {incorrectCount === 1 && (
                <primitive scale={9} object={finger4.scene} />
              )}
              {incorrectCount === 2 && (
                <primitive scale={9} object={finger3.scene} />
              )}
              {incorrectCount === 3 && (
                <primitive scale={9} object={finger2.scene} />
              )}
              {incorrectCount === 4 && (
                <primitive scale={9} object={finger1.scene} />
              )}
              {incorrectCount === 5 && (
                <primitive scale={9} object={finger0.scene} />
              )}
            </Canvas>
          )}
        </div>
      </div>
      <SelectFooter onNextQuestion={handleAnswerSelection} />
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-auto h-auto 2xs:min-w-56 xs:min-w-56 2sm:min-w-64 min-w-80 2xs:max-w-[228px] xs:max-w-[288px] 2sm:max-w-[312px] sm:max-w-[380px] tb:max-w-[380px] lg:max-w-[416px] min-h-32 p-4 bg-white rounded-md flex flex-col items-center justify-center">
            <p className="text-xl lg:text-2xl font-bold">{popupContent}</p>
            <p className="my-2 2xs:text-xs text-sm">{popupInfo}</p>
            <button
              className="2xs:mt-6 xs:mt-6 mt-8 px-4 py-2 text-sm lg:text-xl bg-blue-500 text-white rounded-md"
              onClick={onNextQuestion}
            >
              다음 문제로 이동하기
            </button>
          </div>
        </div>
      )}
      {showMainPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-auto h-auto 2xs:min-w-56 xs:min-w-56 2sm:min-w-64 min-w-80 2xs:max-w-[228px] xs:max-w-[288px] 2sm:max-w-[312px] sm:max-w-[380px] tb:max-w-[380px] lg:max-w-[416px] min-h-32 max-h-48 p-4 bg-white rounded-md flex flex-col items-center justify-center">
            <p className="text-xl lg:text-2xl font-bold">{mainPopupContent}</p>
            {popupContent && popupInfo && (
              <div>
                <p className="my-2 2xs:text-xs text-sm">{popupInfo}</p>
              </div>
            )}
            <a href="/">
              <button className="2xs:mt-6 xs:mt-6 mt-8 px-4 py-2 text-sm lg:text-xl bg-orange-500 text-white rounded-md">
                메인으로 이동하기
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default RiizeQuiz;
