import React from "react";
// import { useTranslation, Trans } from 'react-i18next';
// import { useLanguage } from '../Translation/languageContext';
import logo from "../../assets/images/textLogo.svg";

const Header = () => {
  //   const { language, changeLanguage } = useLanguage();
  //   const { i18n } = useTranslation();

  //   const handleToggleLanguage = () => {
  //     const newLanguage = language === 'kr' ? 'en' : 'kr';
  //     changeLanguage(newLanguage);
  //     i18n.changeLanguage(newLanguage);
  //   };

  return (
    <header className="w-full h-auto pt-2 bg-transparent text-2xl text-white flex flex-col ">
      <div className="flex items-center justify-center">
        <a href="/">
          <img
            src={logo}
            alt="RIIZE GAME119"
            className="2xs:w-32 2xs:h-7 xs:w-36 xs:h-8 2sm:w-[172px] 2sm:h-[38px] sm:w-[200px] sm:h-11 tb:w-[248px] tb:h-[52px] lg:w-[280px] lg:h-[62px] cursor-pointer"
          />
        </a>
      </div>
      {/* <div className="scriptFont relative flex justify-end 2xs:text-[12px] xs:text-[14px] 2sm:text-[16px] sm:text-[18px] tb:text-[24px] lg:text-[28px]">
        <button
          className="TransButton underline decoration-[0.6px] text-black"
          onClick={handleToggleLanguage}
        >
          <Trans
            i18nKey={`translations:${language === 'kr' ? 'English' : 'Korean'}`}
          >
            {language === 'kr' ? 'I Don’t Understand But I Luv U' : '한국어'}
          </Trans>
        </button>
      </div> */}
    </header>
  );
};

export default Header;
