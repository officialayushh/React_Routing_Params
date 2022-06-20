import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BackgroundColorChanger = () => {
  const [bg, setBg] = useState("");
  const params = useParams();
  useEffect(() => {
    setBg(params.colorname);
    console.log(bg);
  }, [bg]);
  return <main style={{ height: "100vh", backgroundColor: `${bg}` }}></main>;
};
