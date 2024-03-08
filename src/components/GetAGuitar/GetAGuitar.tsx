import React, { startTransition, useState } from "react";
import Guitar from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";

const GetAGuitar: React.FC = () => {
  const [strings, setStrings] = useState([2, 0, 0, 0, 1, 2]); // G code
  const { play } = useSound({
    fretting: strings,
    tuning: standard,
  });

  const handleChange = (newStrings: number[]) => {
    // startTransition으로 비동기 처리
    startTransition(() => {
      setStrings(newStrings);
    });
  };

  return (
    <div className="w-full h-auto bg-black flex flex-col m-auto items-center">
      <div className="w-full h-64 flex items-center justify-center">
        <Guitar
          strings={strings}
          onPlay={play}
          onChange={handleChange}
          playOnHover
        />
        ,
      </div>
    </div>
  );
};

export default GetAGuitar;
