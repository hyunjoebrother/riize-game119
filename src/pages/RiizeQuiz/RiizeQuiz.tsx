import React, { useState, useEffect, startTransition } from "react";
import { useTranslation, Trans } from "react-i18next";
import { useLanguage } from "../../components/Translation/languageContext";
import Header from "../../components/Header/Header";
import QuizCard from "../../components/QuizCard/QuizCard";
import SelectFooter from "../../components/SelectFooter/SelectFooter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import cat from "../../assets/images/catGuitar.gif";

interface Question {
  id: number;
  content: string;
  contentEn: string;
  answer: boolean;
  info: string;
  infoEn: string;
}

const RiizeQuiz: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { language, changeLanguage } = useLanguage();
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    } else {
      const defaultLanguage = "kr";
      localStorage.setItem("language", defaultLanguage);
      changeLanguage(defaultLanguage);
      i18n.changeLanguage(defaultLanguage);
    }
  }, [changeLanguage, i18n]);

  const handleToggleLanguage = () => {
    const newLanguage = language === "kr" ? "en" : "kr";
    changeLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    startTransition(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 1200);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fingerObj, setFingerObj] = useState<any>(null);
  const finger5 = useGLTF("./models/finger5Sun.glb");

  useEffect(() => {
    setFingerObj(finger5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (incorrectCount === 1) {
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

  const finger0 = useGLTF("./models/finger0Sun.glb");
  const finger1 = useGLTF("./models/finger1Sun.glb");
  const finger2 = useGLTF("./models/finger2Sun.glb");
  const finger3 = useGLTF("./models/finger3Sun.glb");
  const finger4 = useGLTF("./models/finger4Sun.glb");

  const [questions] = useState<Question[]>([
    {
      id: 1,
      content: "라이즈의 데뷔곡은 Siren이다",
      contentEn: "Riize's debut song is <Siren>",
      answer: false,
      info: "라이즈 데뷔곡은 Get A Guitar🎸",
      infoEn: "Riize's debut song is <Get A Guitar>🎸",
    },
    {
      id: 2,
      content:
        "라이즈의 뜻은 '함께 성장하고 꿈을 실현해 나아가는 팀'이라는 의미이다",
      contentEn:
        "Riize means 'a team that rise together and realize its dreams.'",
      answer: true,
      info: "Rise(성장하다) + Realize(실현하다)로 '함께 성장하고 꿈을 실현해 나아가는 팀'이라는 의미이다",
      infoEn:
        "Riize means Rise+Realize, 'a team that rise together and realize its dreams.'",
    },
    {
      id: 3,
      content: "노래 LOVE 119에서 라이즈는 1-1-9를 10번 불렀다",
      contentEn: "In <Love 119>, Riize sang '1-1-9' 10 times",
      answer: false,
      info: "가사에서 세어보니까 8번 불렀다",
      infoEn: "I counted the lyrics and sang it 8 times",
    },
    {
      id: 4,
      content: "멤버 앤톤이 자주 사용하는 이모지는 🦕이다",
      contentEn: "The emoji that member Anton often uses is 🦕",
      answer: true,
      info: "브라키오사우르스 캐릭터 '브라키오'랑 닮아서 별명이다🦕",
      infoEn:
        "It's a nickname because it resembles the Brachiosaurus character Brachios🦕",
    },
    {
      id: 5,
      content: "선수 출신인 멤버가 3명이다",
      contentEn: "There are 3 members who are athletes",
      answer: true,
      info: "성찬: 축구, 원빈: 육상, 앤톤: 수영",
      infoEn: "Sungchan: football, Wonbin: athlete, Anton: swimming",
    },
    {
      id: 6,
      content: "노래 Talk Saxy의 소재인 악기는 색소폰이다",
      contentEn:
        "The instrument that is the material of <Talk Saxy> is the saxophone",
      answer: true,
      info: "Saxy는 색소폰 연주하는 매력적인 섹시한 사람을 뜻한다",
      infoEn: "'Saxy' means a charming sexy person who plays the saxophone",
    },
    {
      id: 7,
      content: "라이즈에 대한 웹툰이 있다",
      contentEn: "There is a webtoon about Riize",
      answer: false,
      info: "카카오페이지에서 'Rise & Realize' 현대 판타지 웹소설이 있다",
      infoEn:
        "There is a modern fantasy web novel called 'Rise & Realize' on Kakao Page",
    },
    {
      id: 8,
      content: "라이즈는 단체로 다른 아이돌 몰래 챌린지를 한 적이 있다",
      contentEn:
        "Riize has done a challenge with all the members in secret of other idols",
      answer: false,
      info: "라이즈 쇼타로와 앤톤이 세븐틴 대기실 앞에서 몰래 '음악의 신' 챌린지를 했다",
      infoEn:
        "Riize Shotaro&Anton secretly performed the <God of Music> challenge in front of SEVENTEEN's waiting room",
    },
    {
      id: 9,
      content: "라이즈는 자컨에서 에버랜드를 갔다",
      contentEn: "Riize went to Everland in self-produced contents",
      answer: true,
      info: "RIIZE-LAND ❮우리가 왔다 에버랜드!❯ | WE RIIZE EP.7",
      infoEn: "RIIZE-LAND ❮We're here, Everland!❯ | WE RIIZE EP.7",
    },
    {
      id: 10,
      content: "개발자이자 퀴즈 출제자는 브리즈(BRIIZE)이다",
      contentEn: "This is BRIIZE, the person who develop & quiz taker",
      answer: false,
      info: "아니다. 하지만 Siren, Get A Guitar, Love119 챌린지를 할 정도로 좋아하고 무대도 자주 찾아봅니다😊",
      infoEn:
        "Nope. But I 'Siren' 'Get A Guitar' 'Love119' challenge myself and watching the Riize Performances often😊",
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
    startTransition(() => {
      setIncorrectCount(incorrectCount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswers, currentQuestionIndex]);

  useEffect(() => {
    if (showPopup) {
      const incorrectAnswer =
        userAnswers[currentQuestionIndex] !==
        questions[currentQuestionIndex].answer;
      if (incorrectAnswer) {
        if (language === "kr") {
          setPopupInfo(questions[currentQuestionIndex].info);
        } else if (language === "en") {
          setPopupInfo(questions[currentQuestionIndex].infoEn);
        }
        if (incorrectCount === 5 && currentQuestionIndex !== 9) {
          setShowMainPopup(true);
          if (language === "kr") {
            setMainPopupContent("아쉬워요🥲");
            setPopupContent("땡!🚨");
          } else if (language === "en") {
            setMainPopupContent("Thats too bad🥲");
            setPopupContent("Nope!🚨");
          }
          localStorage.setItem("finished", "true");
        } else if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          localStorage.setItem("finished", "true");
          if (incorrectCount < 5) {
            if (language === "kr") {
              setMainPopupContent("🎊축하합니다🎊");
            } else if (language === "en") {
              setMainPopupContent("🎊Congrats🎊");
            }
          } else {
            if (language === "kr") {
              setMainPopupContent("아쉬워요🥲");
            } else if (language === "en") {
              setMainPopupContent("Thats too bad🥲");
            }
          }
        } else {
          if (language === "kr") {
            setPopupContent("땡!🚨");
          } else if (language === "en") {
            setPopupContent("Nope!🚨");
          }
        }
      } else {
        if (language === "kr") {
          setPopupContent("정답🥳");
        } else if (language === "en") {
          setPopupContent("Correct🥳");
        }
        setPopupInfo("");
        if (currentQuestionIndex === 9) {
          setShowMainPopup(true);
          localStorage.setItem("finished", "true");
          if (incorrectCount < 5) {
            if (language === "kr") {
              setMainPopupContent("🎊축하합니다🎊");
            } else if (language === "en") {
              setMainPopupContent("🎊Congrats🎊");
            }
          } else {
            if (language === "kr") {
              setMainPopupContent("아쉬워요🥲");
            } else if (language === "en") {
              setMainPopupContent("Thats too bad🥲");
            }
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
      localStorage.setItem("finished", "true");
      if (language === "kr") {
        setMainPopupContent("아쉬워요🥲");
      } else if (language === "en") {
        setMainPopupContent("Thats too bad🥲");
      }
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

  return (
    <section className="w-full h-screen bg-black flex flex-col m-auto items-center">
      <Header isMain={true} />
      <div className="w-full flex justify-end mr-10 sm:mr-16 tb:mr-32 lg:mr-40">
        <h3
          onClick={handleToggleLanguage}
          className="text-xs 2sm:text-sm sm:text-lg tb:text-xl lg:text-xl text-orange-600 font-bold font-MainFont"
        >
          <Trans i18nKey="translations:English">GET A ENG</Trans>
        </h3>
      </div>
      <div className="mt-4 w-full flex flex-col gap-6 items-center">
        {language === "kr" && (
          <QuizCard
            quizNum={currentQuestionIndex + 1}
            quizContent={questions[currentQuestionIndex].content}
          />
        )}
        {language === "en" && (
          <QuizCard
            quizNum={currentQuestionIndex + 1}
            quizContent={questions[currentQuestionIndex].contentEn}
          />
        )}
      </div>
      <div className="2xs:mt-8 xs:mt-6 mt-10 tb:mt-12 lg:mt-20 lg:mb-4">
        <div className="2xs:w-[264px] 2xs:h-[314px] xs:w-[336px] xs:h-[372px] 2sm:w-[348px] 2sm:h-[430px] sm:w-[400px] sm:h-[440px] tb:w-[420px] tb:h-[480px] lg:w-[360px] lg:h-[400px] xl:w-[480px] xl:h-[500px] flex items-center justify-center">
          {!isLoaded ? (
            <div className="w-36 h-36 tb:w-44 tb:h-44 lg:w-48 lg:h-48 flex justify-center items-center rounded-full bg-white">
              <img
                className="w-24 h-24 tb:w-36 tb:h-36 lg:w-40 lg:h-40"
                src={cat}
                alt=""
              />
            </div>
          ) : (
            <Canvas camera={{ position: [6, 10, -32] }}>
              <OrbitControls />
              <ambientLight intensity={3} />
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
              <Trans i18nKey="translations:NextQuestion">
                다음 문제로 이동하기
              </Trans>
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
                <Trans i18nKey="translations:GoToMain">메인으로 이동하기</Trans>
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default RiizeQuiz;
