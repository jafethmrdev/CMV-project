import * as React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { CssBaseline, Divider, Typography } from "@mui/material";
import Slideshow from "../components/Slideshow";
import SocialBanner from "../components/SocialBanner";
import ImageParallax from "../components/ImageParallax";
import Footer from "../components/Footer";
import CustomAudioPlayer from "../components/CustomAudioPlayer";
import { IGEmbed } from "react-ig-embed";
function HomeScreen() {
  return (
    <>
      <div style={{ height: 80 }}>
        <CssBaseline />
        <ResponsiveAppBar />
      </div>
      <div
        className="bg-zinc-800 "
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Slideshow />
      </div>
      <div
        className="bg-zinc-100 h-96 m-auto justify-center align-middle pt-36"
        sx
      >
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
        >
          ¡Un lugar para la familia!
        </Typography>
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={20}
        >
          <p>
            Somos una iglesia enfocada en la transformación y Restauración de la
            familia, y llevar al hombre al conocimiento de Dios.
          </p>
        </Typography>
      </div>
      <div>
        <ImageParallax />
      </div>

      <div
        style={{ height: 300 }}
        className="bg-zinc-800 m-auto justify-center align-middle p-24 "
      >
        <Typography
          alignSelf={"center"}
          color={"whitesmoke"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
          paddingBottom={5}
        >
          ¡Iglesia CVM Barranquilla te invita a visitarnos de manera presencial!
        </Typography>
        <Typography
          alignSelf={"center"}
          color={"whitesmoke"}
          textAlign={"center"}
          fontSize={20}
        >
          <p className="mx-56">
            Disfruta de la Presencia de Dios en nuestra auditorio. Estamos
            abiertos los domingos en el horario 9:30 AM. Tambien puedes
            disfrutar de nuestros grupos de conexiones: Grupo parejas, Grupo de
            jovenes, Grupo de mujeres, entre otros. Te invitamos tambien a los
            grupos de sanacion y hacedores de disipulos. ¡Te Esperamos!
          </p>
        </Typography>
      </div>
      <div
        className="bg-zinc-100 h-96 m-auto justify-center align-middle pt-36"
        sx
      >
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
        >
          ¡Un lugar para la familia!
        </Typography>
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={20}
        >
          <p>
            Somos una iglesia enfocada en la transformación y Restauración de la
            familia, y llevar al hombre al conocimiento de Dios.
          </p>
        </Typography>
      </div>
      <div className="bg-zinc-800">
        <SocialBanner />
      </div>

      <div
        className="bg-zinc-100 h-96 m-auto justify-center align-middle pt-10 pl-6"
        sx
      >
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
        >
          ¡Alabanzas!
        </Typography>
        <div className="grid grid-cols-3 justify-center pl-44 pt-5">
          <CustomAudioPlayer />
          <CustomAudioPlayer /> <CustomAudioPlayer />
        </div>
      </div>
      <Divider />
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          justifyContent: "center",
          height: 500,
        }}
        className="bg-zinc-100 h-96 m-auto justify-center align-middle pt-10 pl-6"
        sx
      >
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontSize={30}
          fontStyle={"oblique"}
        >
          ¡Ultimas publicaciones!
        </Typography>

        <div
          style={{
            overflow: "hidden",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: 800,
            paddingTop: 15,
            height: 500,
          }}
        >
          <div
            style={{
              overflow: "hidden",
              width: "100%",
              maxWidth: "326px",
              height: 390,
            }}
          >
            <IGEmbed url="https://www.instagram.com/p/Cinxz1nvM2f/" />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;
