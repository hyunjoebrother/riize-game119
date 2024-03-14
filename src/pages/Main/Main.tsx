import React, { useState, startTransition } from "react";
import Header from "../../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { SectionsContainer, Section } from "react-fullpage";
import insta from "../../assets/images/icon-insta.png";
import tiktok from "../../assets/images/icon-tiktok.png";
import twitter from "../../assets/images/icon-twitter.png";
import youtube from "../../assets/images/icon-youtube.png";
import GetAGuitar from "../../components/GetAGuitar/GetAGuitar";
import siren from "../../assets/images/siren.gif";

const Main: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [riizeObj, setRiizeObj] = useState<any>(null);
  const loadedObj = useGLTF("./models/riizeLogo.glb");
  const [finished, setFinished] = useState<boolean>(false); // 119 finished

  React.useEffect(() => {
    const storedIsVisited = localStorage.getItem("finished");
    if (storedIsVisited === "true") {
      setFinished(true);
    }
  }, []);

  let options = {
    activeClass: "active",
    anchors: ["rise", "realize"],
    arrowNavigation: false,
    className: "SectionContainer",
    delay: 800,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: false,
  };

  React.useEffect(() => {
    startTransition(() => {
      setIsLoaded(true);
    });
    setRiizeObj(loadedObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionsContainer {...options}>
      <div className="w-full h-full bg-black flex flex-col m-auto items-center">
        <Header isMain={true} />
        <Section>
          <section className="flex flex-col gap-6 items-center">
            <div className="w-screen h-screen mt-4 2xs:h-[340px] xs:h-[380px] 2sm:h-[400px] sm:h-[440px] tb:h-[480px] lg:h-[520px] flex items-center justify-center">
              {isLoaded && (
                <Canvas camera={{ position: [40, 16, 18] }}>
                  <OrbitControls />
                  <primitive scale={16} object={riizeObj.scene} />
                </Canvas>
              )}
            </div>
            {finished ? (
              <div className="flex flex-row 2xs:flex-col 2xs:gap-8 2xs:justify-center justify-between gap-2 sm:gap-8 tb:gap-10 lg:gap-20">
                <div className="flex flex-col gap-2 justify-start items-center text-white">
                  <a href="/riize">
                    <button className="xs:mt-16 2sm:mt-20 sm:mt-28 tb:mt-32 lg:mt-24 2xs:w-40 2xs:h-12 xs:w-40 xs:h-12 2sm:w-44 2sm:h-14 sm:w-56 sm:h-16 tb:w-64 tb:h-20 lg:w-80 lg:h-24 flex flex-col justify-center items-center 2xs:text-lg xs:text-lg 2sm:text-xl text-2xl lg:text-4xl 2sm:rounded-[28px] rounded-3xl lg:rounded-3xl font-MainFont bg-orange-500">
                      PLAY GAME119
                    </button>
                  </a>
                  <p className="2xs:text-[10px] xs:text-xs text-sm tb:text-lg lg:text-xl font-bold">
                    본격 라이즈 OX퀴즈!
                  </p>
                </div>
                <div className="flex flex-col gap-2 justify-start items-center  text-white">
                  <a href="/handgame">
                    <button className="xs:mt-16 2sm:mt-20 sm:mt-28 tb:mt-32 lg:mt-24 2xs:w-40 2xs:h-12 xs:w-40 xs:h-12 2sm:w-44 2sm:h-14 sm:w-56 sm:h-16 tb:w-64 tb:h-20 lg:w-80 lg:h-24 flex flex-col justify-center items-center 2xs:text-[1.125rem] xs:text-[1.125rem] 2sm:text-[1.25rem] text-[1.5rem] lg:text-[2.25rem] leading-[1.2] 2sm:rounded-[28px] rounded-3xl lg:rounded-3xl font-MainFont bg-blue-500 text-white">
                      PLAY
                      <br />
                      K-HANDGAME
                    </button>
                  </a>
                  <p className="2xs:text-[10px] xs:text-xs text-sm tb:text-lg lg:text-xl font-bold">
                    본격 3D 손병호 게임!
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <button className="2xs:my-6 xs:my-16 2sm:my-20 sm:my-28 tb:my-32 lg:my-24 2xs:w-40 2xs:h-12 xs:w-40 xs:h-12 2sm:w-48 2sm:h-14 sm:w-56 sm:h-16 tb:w-64 tb:h-20 lg:w-80 lg:h-24 flex flex-col justify-center items-center 2xs:text-lg xs:text-lg 2sm:text-xl text-2xl lg:text-4xl 2sm:rounded-[28px] rounded-3xl lg:rounded-3xl text-white font-MainFont bg-orange-500">
                  <a href="/riize">PLAY GAME119</a>
                </button>
              </div>
            )}
          </section>
        </Section>
        <Section>
          <section className="2xs:mt-0 xs:mt-0 2sm:mt-0 sm:mt-0 lg:mt-12 lg:px-16 w-full h-screen flex flex-col lg:flex-row 2xs:gap-0 xs:gap-6 2sm:gap-10 sm:gap-6 tb:gap-12 lg:gap-3 items-center justify-center">
            <div className="w-full lg:w-1/2 h-auto lg:h-64 mb-8 flex flex-col items-center justify-start">
              <h3 className="2xs:text-xl xs:text-2xl 2sm:text-2xl sm:text-3xl text-4xl text-white 2xs:mb-4 xs:mb-4 2sm:mb-6 sm:mb-6 tb:mb-10 lg:mb-24 font-MainFont">
                🎸 Get A Guitar 🎸
              </h3>
              <div className="w-full flex flex-col 2xs:items-start xs:items-start sm:items-start tb:items-start">
                <GetAGuitar />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:h-64 lg:my-12 flex flex-row lg:flex-col lg:items-center justify-around lg:justify-start">
              <div className="flex flex-col">
                <div className="2xs:flex 2xs:flex-col 2xs:items-center xs:flex xs:flex-col xs:items-center 2sm:flex 2sm:flex-col 2sm:items-center sm:flex sm:flex-col sm:items-center">
                  <h3 className="2xs:text-xl xs:text-2xl 2sm:text-2xl sm:text-3xl text-4xl text-white 2xs:mb-4 xs:mb-4 2sm:mb-6 sm:mb-6 tb:mb-10 mb-12 font-MainFont">
                    🌟 Memories 🌟
                  </h3>
                  <ul className="flex flex-row justify-center list-none 2xs:gap-1 xs:gap-1 2sm:gap-3 gap-4 lg:gap-6">
                    <li>
                      <a
                        href="https://www.instagram.com/riize_official/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={insta}
                          alt=""
                          className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.tiktok.com/@riize_official"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={tiktok}
                          alt=""
                          className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/riize_official"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={twitter}
                          alt=""
                          className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@RIIZE_official"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={youtube}
                          alt=""
                          className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-7 xs:h-7 2sm:w-8 2sm:h-8 sm:w-10 sm:h-10 tb:w-10 tb:h-10 lg:w-12 lg:h-12"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:mt-24 xl:mt-36 2xs:flex 2xs:flex-col 2xs:items-center xs:flex xs:flex-col xs:items-center 2sm:flex 2sm:flex-col 2sm:items-center sm:flex sm:flex-col sm:items-center">
                <h3 className="2xs:mb-4 xs:mb-4 2sm:mb-6 sm:mb-6 tb:mb-10 mb-12 2xs:text-xl xs:text-2xl 2sm:text-2xl sm:text-3xl text-4xl text-white font-MainFont">
                  🚨 Siren 🚨
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=tZYsvAoSNxQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="2xs:w-14 2xs:h-10 xs:w-18 xs:h-12 2sm:w-22 2sm:h-16 sm:w-28 sm:h-22 tb:w-30 tb:h-24 lg:w-64 lg:h-48"
                    src={siren}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <h3 className="lg:hidden 2xs:mt-6 2xs:mb-14 xs:mt-10 xs:mb-18 2sm:mt-8 2sm:mb-24 sm:mt-10 sm:mb-18 mt-12 mb-20 2xs:text-[10px] xs:text-xs 2sm:text-xs sm:text-sm text-lg text-white font-MainFont">
                <a
                  href="https://linkbio.co/6010904ydlS94"
                  rel="noreferrer"
                  target="_blank"
                >
                  CONTACT MEI
                </a>
              </h3>
            </div>
          </section>
          <h3 className="2xs:hidden xs:hidden 2sm:hidden sm:hidden tb:hidden mt-8 lg:mt-24 lg:mb-28 text-lg lg:text-xl flex justify-center items-center text-white font-MainFont">
            <a
              href="https://linkbio.co/6010904ydlS94"
              rel="noreferrer"
              target="_blank"
            >
              CONTACT MEI
            </a>
          </h3>
        </Section>
      </div>
    </SectionsContainer>
  );
};

export default Main;
