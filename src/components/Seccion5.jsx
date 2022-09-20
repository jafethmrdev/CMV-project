import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomAudioPlayer from "./CustomAudioPlayer";

function Seccion5() {
  return (
    <>
      <div
        style={{ height: "auto" }}
        className="bg-zinc-800 m-auto justify-center align-middle pt-5 pb-5 pl-6"
      >
        <Typography
          alignSelf={"center"}
          color={"whitesmoke"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
        >
          ¡Alabanzas!
        </Typography>
        <div className="w-80 justify-center">
          <CustomAudioPlayer />
        </div>
      </div>
    </>
  );
}

export default Seccion5;
