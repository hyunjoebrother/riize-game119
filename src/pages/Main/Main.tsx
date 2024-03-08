import React, { useState, startTransition } from "react";
import Header from "../../components/Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import insta from "../../assets/images/icon-insta.png";
import tiktok from "../../assets/images/icon-tiktok.png";
import twitter from "../../assets/images/icon-twitter.png";
import youtube from "../../assets/images/icon-youtube.png";
import GetAGuitar from "../../components/GetAGuitar/GetAGuitar";
import siren from "../../assets/images/siren.gif";

const Main: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const riizeObj = useGLTF("./models/riizeLogo.glb");

  React.useEffect(() => {
    startTransition(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="w-full h-full bg-black flex flex-col m-auto items-center">
      <Header />
      <section className="flex flex-col gap-6 items-center">
        <div className="w-screen h-screen lg:h-[560px] flex items-center justify-center">
          {isLoaded && (
            <Canvas camera={{ position: [40, 16, 18] }}>
              <OrbitControls />
              <primitive scale={16} object={riizeObj.scene} />
            </Canvas>
          )}
        </div>
        <button className="lg:my-24 w-56 h-14 lg:w-80 lg:h-24 flex flex-col justify-center items-center text-2xl lg:text-4xl rounded-2xl lg:rounded-3xl font-MainFont bg-orange-500 text-white">
          <a href="/riize">PLAY GAME119</a>
        </button>
        {/* <button className="lg:my-24 w-56 h-14 lg:w-80 lg:h-24 flex flex-col justify-center items-center text-2xl lg:text-4xl rounded-2xl lg:rounded-3xl font-MainFont bg-blue-700 text-white">
          <a href="/riize">PLAY ONLINE K-HANDGAME</a>
        </button> */}
      </section>
      <section className="lg:mt-12 lg:px-16 w-full h-screen flex flex-col lg:flex-row lg:gap-3 items-center ">
        <div className="w-full lg:w-1/2 lg:h-64 my-12 flex flex-col items-center justify-start">
          <h3 className="text-4xl text-white mb-24 font-MainFont">
            🎸 Get A Guitar 🎸
          </h3>
          <GetAGuitar />
        </div>
        <div className="w-full lg:w-1/2 lg:h-64 my-12 flex flex-col items-center justify-start">
          <div className="flex flex-col">
            <div>
              <h3 className="text-4xl text-white mb-12 font-MainFont">
                🌟 Memories 🌟
              </h3>
              <ul className="flex flex-col lg:flex-row justify-center list-none gap-4 lg:gap-6">
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
          <div className="lg:mt-24 xl:mt-36">
            <h3 className="mb-12 text-4xl text-white font-MainFont">
              🚨 Siren 🚨
            </h3>
            <a
              href="https://www.youtube.com/watch?v=tZYsvAoSNxQ"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-64 h-48" src={siren} alt="" />
            </a>
          </div>
        </div>
      </section>
      <h3 className="lg:mt-24 lg:mb-12 lg:text-xl text-white font-MainFont">
        <a
          href="https://linkbio.co/6010904ydlS94"
          rel="noreferrer"
          target="_blank"
        >
          CONTACT MEI
        </a>
      </h3>
    </div>
  );
};

export default Main;
