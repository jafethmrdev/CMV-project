import { Typography } from "@mui/material";
import React from "react";
import iconFacebook from "../assets/iconFacebook.svg";
import iconInstagram from "../assets/iconInstagram.svg";
import iconYoutube from "../assets/iconYoutube.svg";

function SocialBanner() {
  return (
    <div className="h-28 flex justify-center align-middle self-center">
      <Typography
        alignSelf={"center"}
        color={"whitesmoke"}
        textAlign={"center"}
        fontSize={20}
      >
        Ahora nos puedes seguir en nuestras redes sociales:
      </Typography>
      <a
        href="https://www.facebook.com/Iglesiacvmbquilla"
        className="justify-center align-middle self-center"
        target="_blank"
      >
        <img src={iconFacebook} width={50} className="mx-3" />
      </a>
      <a
        href="https://www.instagram.com/iglesiacvmbaq/"
        className="justify-center align-middle self-center"
        target="_blank"
      >
        <img src={iconInstagram} width={50} className="mx-3" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCC7CmQLQLHva3r_29glhjPg"
        className="justify-center align-middle self-center"
        target="_blank"
      >
        <img src={iconYoutube} width={60} className="mx-3" />
      </a>
    </div>
  );
}

export default SocialBanner;
