import logo from "../../assets/images/textLogo.svg";
import handgame from "../../assets/images/handgameLogo.svg";

interface HeaderProps {
  isMain: boolean;
}

const Header: React.FC<HeaderProps> = ({ isMain }) => {
  return (
    <header className="w-full h-auto pt-2 bg-transparent text-2xl text-white flex flex-col ">
      <div className="flex items-center justify-center">
        <a href="/">
          <img
            src={isMain ? logo : handgame}
            alt={isMain ? "RIIZE GAME119" : "Hand Game"}
            className="2xs:w-32 2xs:h-7 xs:w-36 xs:h-8 2sm:w-[172px] 2sm:h-[38px] sm:w-[200px] sm:h-11 tb:w-[248px] tb:h-[52px] lg:w-[280px] lg:h-[62px] cursor-pointer"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
