import { Typography } from "@mui/material";
import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import pastores from "../assets/images/pastores.png";
import Pulse from 'react-reveal/Pulse';
const image1 =
  "https://scontent.fbaq5-1.fna.fbcdn.net/v/t39.30808-6/291772806_1617644408622709_3227209625743321848_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFv3OulnMr9iFqkXtgrbbHrJPTT6imS_3gk9NPqKZL_eLe81rltXmvqDS0HhAt5CR1nn8RvXEAa95MnISuUSW0V&_nc_ohc=RYq2EmXovPgAX_loMHN&_nc_ht=scontent.fbaq5-1.fna&oh=00_AT9YtUKavZYheimKWnxcdXRW5VQanCxNTZdrGZTf5uDJYw&oe=632DE6E5";

function ImageParallax() {
  return (
    <div style={styles} className="bg-zinc-800 ">
      <Parallax bgImage={pastores} strength={500}>
        <div style={{ height: 700, width: "100%", paddingTop: 200 }}>
        <Pulse >
          <Typography
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={120}
            fontStyle={"oblique"}
            fontFamily={"'Palace Script MT', sans-serif"}
            paddingBottom={5}
            variant={"h1"}
            style={{ textShadow: "2px 2px 3px black" }}
          >
            ¡Nuestros Pastores!
          </Typography>
          <Typography
            component={"span"}
            variant={"h2"}
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={70}
            fontFamily={"'Palace Script MT', sans-serif"}
            style={{ textShadow: "2px 2px 3px black" }}
          >
            Jose Rosales y Karen Lizarazo
          </Typography>
          </Pulse>
        </div>
      </Parallax>
    </div>
  );
}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100%",
  height: 663,
};

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};
export default ImageParallax;
