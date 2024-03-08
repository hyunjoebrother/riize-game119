import React, { useState } from "react";
import Guitar from "react-guitar";
import { standard } from "react-guitar-tunings";
import useSound from "react-guitar-sound";

const GetAGuitar: React.FC = () => {
  const [strings, setStrings] = useState([2, 0, 0, 0, 1, 2]); // G code
  const { play } = useSound({
    fretting: strings,
    tuning: standard,
  });

  return (
    <div className="w-full h-auto bg-black flex flex-col m-auto items-center">
      <div className="w-full h-64 flex items-center justify-center">
        <Guitar
          strings={strings}
          onPlay={play}
          onChange={setStrings}
          playOnHover
        />
        ,
      </div>
    </div>
  );
};

export default GetAGuitar;
