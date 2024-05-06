
import React, { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";
import RedoAnimText from "./ReloadAnimeText";


export default function AnimateText({ delay }) {

//   const [done, setDone] = useState(false);
//   const baseText = "Dear Hiring Manager, ";
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest));
//   const displayText = useTransform(rounded, (latest) =>
//     baseText.slice(0, latest)
//   );


  return (
    <span className="">
        {" "}
      <RedoAnimText delay={delay + 1} />
      <CursorBlinker />
    </span>
  );
}
