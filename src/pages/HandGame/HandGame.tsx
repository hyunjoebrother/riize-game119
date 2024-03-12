import React, { useState, useEffect, startTransition } from "react";
import Header from "../../components/Header/Header";
import QuizCard from "../../components/QuizCard/QuizCard";
import Footer from "../../components/Footer/Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import cat from "../../assets/images/catGuitar.gif";
const HandGame: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [innerCount, setInnerCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("finished", "true");

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
    if (innerCount === 1) {
      setFingerObj(finger4);
    } else if (innerCount === 2) {
      setFingerObj(finger3);
    } else if (innerCount === 3) {
      setFingerObj(finger2);
    } else if (innerCount === 4) {
      setFingerObj(finger1);
    } else if (innerCount === 5) {
      setFingerObj(finger0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerCount]);

  const finger0 = useGLTF("./models/finger0Sun.glb");
  const finger1 = useGLTF("./models/finger1Sun.glb");
  const finger2 = useGLTF("./models/finger2Sun.glb");
  const finger3 = useGLTF("./models/finger3Sun.glb");
  const finger4 = useGLTF("./models/finger4Sun.glb");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setInnerCount((prevCount) => prevCount + 1);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    if (currentQuestionIndex === 4) {
      setShowPopup(true);
    }
  };

  return (
    <section className="w-full h-screen bg-black flex flex-col m-auto items-center">
      <Header isMain={false} />
      <div className="mt-10 w-full flex flex-col gap-6 items-center">
        <QuizCard
          quizNum={currentQuestionIndex + 1}
          quizContent="[플레이어의 질문에 해당하면 손가락을 접으세요!]"
        />
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
              {innerCount === 0 && (
                <primitive scale={9} object={finger5.scene} />
              )}
              {innerCount === 1 && (
                <primitive scale={9} object={finger4.scene} />
              )}
              {innerCount === 2 && (
                <primitive scale={9} object={finger3.scene} />
              )}
              {innerCount === 3 && (
                <primitive scale={9} object={finger2.scene} />
              )}
              {innerCount === 4 && (
                <primitive scale={9} object={finger1.scene} />
              )}
              {innerCount === 5 && (
                <primitive scale={9} object={finger0.scene} />
              )}
            </Canvas>
          )}
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className="py-2 tb:py-3 lg:py-3 2xs:w-28 xs:w-[128px] 2sm:w-36 sm:w-40 tb:w-44 lg:w-48 bg-red-500 rounded-full text-white font-bold 2xs:text-lg xs:text-xl 2sm:text-2xl text-2xl"
      >
        접어!
      </button>
      <Footer />

      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="w-auto h-auto 2xs:min-w-56 xs:min-w-56 2sm:min-w-64 min-w-80 2xs:max-w-[228px] xs:max-w-[288px] 2sm:max-w-[312px] sm:max-w-[380px] tb:max-w-[380px] lg:max-w-[416px] min-h-32 p-4 bg-white rounded-md flex flex-col items-center justify-center">
            <p className="text-center text-xl lg:text-2xl font-bold">
            🥲<br />손가락을 모두 접었습니다!
            </p>
            <a href="/">
              <button className="2xs:mt-4 xs:mt-4 mt-6 px-4 py-2 text-sm lg:text-xl bg-blue-500 text-white font-bold rounded-md">
                메인으로 이동하기
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default HandGame;
