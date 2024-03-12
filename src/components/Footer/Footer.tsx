import React from "react";
import {
  shareKakao,
  shareTwitter,
  handleCopyClipBoard,
} from "../../assets/libs/share";
import kakao from "../../assets/images/icon-kakao.png";
import twitter from "../../assets/images/icon-twitter.png";
import clip from "../../assets/images/icon-clip.png";

const Footer: React.FC = () => {
  return (
      <div className="w-full h-full 2xs:my-8 xs:my-6 2sm:my-6 my-10 py-4 bg-black flex flex-row 2xs:gap-6 xs:gap-8 2sm:gap-10 gap-12 lg:gap-28 justify-center">
        <div className="flex flex-col gap-4 text-center text-white 2xs:text-[10px] text-xs font-light justify-start items-center">
          <h3>
            <p className="2xs:text-xs text-sm font-bold">튜토리얼 하러가기</p>
            RIIZE GAME119
          </h3>
          <div>
            <a href="/">
              <button className="2xs:px-3 px-4 py-2 2xs:text-xs text-sm bg-orange-500 text-white font-bold rounded-md">
                메인으로 이동하기
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 text-white 2xs:text-xs text-sm font-bold justify-start items-center">
          <h3>친구한테 SNS 공유하기</h3>
          <ul className="flex flex-row justify-end list-none gap-4 lg:gap-3">
            <li onClick={() => shareKakao()}>
              <img
                src={kakao}
                alt=""
                className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 2sm:w-8 2sm:h-8 sm:w-9 sm:h-9 tb:w-8 tb:h-8 lg:w-9 lg:h-9"
              />
            </li>
            <li onClick={() => shareTwitter()}>
              <img
                src={twitter}
                alt=""
                className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 2sm:w-8 2sm:h-8 sm:w-9 sm:h-9 tb:w-8 tb:h-8 lg:w-9 lg:h-9"
              />
            </li>
            <li onClick={() => handleCopyClipBoard("https://saengcaday.com")}>
              <img
                src={clip}
                alt=""
                className="cursor-pointer 2xs:w-6 2xs:h-6 xs:w-8 xs:h-8 2sm:w-8 2sm:h-8 sm:w-9 sm:h-9 tb:w-8 tb:h-8 lg:w-9 lg:h-9"
              />
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Footer;
