import * as React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {
  Container,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Slideshow from "../components/Slideshow";
import SocialBanner from "../components/SocialBanner";
import ImageParallax from "../components/ImageParallax";
import Footer from "../components/Footer";
import CustomAudioPlayer from "../components/CustomAudioPlayer";
import { IGEmbed } from "react-ig-embed";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

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

      <div className="bg-zinc-100 h-auto m-auto justify-center align-middle pt-16 pb-10">
        <Container className="container rounded">
          <Slide top duration={3000}>
            <Typography
              alignSelf={"center"}
              color={"black"}
              textAlign={"center"}
              fontSize={40}
              fontStyle={"oblique"}
            >
              ¡Un lugar para la familia!
            </Typography>
            <Typography
              alignSelf={"center"}
              color={"black"}
              textAlign={"center"}
              fontSize={25}
              component={"span"}
            >
              Somos una iglesia enfocada en la transformación y Restauración de
              la familia, y llevar al hombre al conocimiento de Dios.
            </Typography>
          </Slide>
        </Container>
      </div>

      <div>
        <ImageParallax />
      </div>

      <div
        style={{ height: "auto" }}
        className="bg-zinc-800 m-auto justify-center align-middle p-16 "
      >
        <Fade left duration={3000}>
          <Typography
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={30}
            fontStyle={"oblique"}
            paddingBottom={5}
          >
            ¡Iglesia CVM Barranquilla te invita a visitarnos de manera
            presencial!
          </Typography>
        </Fade>
        <Fade right duration={3000}>
          <Typography
            alignSelf={"center"}
            color={"whitesmoke"}
            textAlign={"center"}
            fontSize={20}
            component={"span"}
            variant={"body2"}
            paragraph={true}
          >
            Disfruta de la Presencia de Dios en nuestro auditorio. Estamos
            abiertos los domingos en el horario 9:30 AM. Tambien puedes
            disfrutar de nuestros grupos de conexiones: Grupo parejas, Grupo de
            jovenes, Grupo de mujeres, entre otros. Te invitamos tambien a los
            grupos de sanacion y hacedores de disipulos. ¡Te Esperamos!
          </Typography>
        </Fade>
      </div>
      <div
        style={{ height: "auto" }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-20"
      >
        <Slide top>
          <Typography
            alignSelf={"center"}
            color={"black"}
            textAlign={"center"}
            fontStyle={"oblique"}
            variant={"h3"}
          >
            VISIÓN
          </Typography>
          <Typography
            alignSelf={"center"}
            color={"black"}
            textAlign={"center"}
            justifyContent={"center"}
            variant={"subtitle2"}
            fontSize={20}
          >
            Ser una Iglesia que en Cristo restaura y fortalece integralmente a
            toda la familia.
          </Typography>
        </Slide>

        <div className="grid grid-cols-2">
          <div
            style={{ height: "auto" }}
            className=" m-auto justify-center align-middle pt-10"
          >
            <LightSpeed left>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"center"}
                fontStyle={"oblique"}
                paddingBottom={4}
                variant={"h4"}
              >
                VALORES
              </Typography>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"left"}
                fontSize={20}
                variant={"inherit"}
                paragraph={true}
              >
                <Grid container item spacing={2} direction={"column"}>
                  <Grid item spacing={2} direction={"column"}>
                    FAMILIA
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    INTIMIDAD
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    RELACIONES
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    LIDERAZGO
                  </Grid>
                </Grid>
              </Typography>
            </LightSpeed>
          </div>
          <div
            style={{ height: "auto" }}
            className=" m-auto justify-center align-middle p-10 "
          >
            <LightSpeed right>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"center"}
                fontStyle={"oblique"}
                paddingBottom={4}
                variant={"h4"}
              >
                ADN
              </Typography>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"left"}
                fontSize={20}
                variant={"inherit"}
                paragraph={true}
              >
                <Grid container item spacing={2} direction={"column"}>
                  <Grid item spacing={2} direction={"column"}>
                    ADORACIÓN
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    PASIÓN
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    INTEGRIDAD
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    FIDELIDAD
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    ESFUERZO
                  </Grid>
                </Grid>
              </Typography>
            </LightSpeed>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <SocialBanner />
      </div>
      <div
        style={{ height: "auto" }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-20"
      >
        <Fade top duration={2000}>
          <Typography
            alignSelf={"center"}
            color={"black"}
            textAlign={"center"}
            fontStyle={"oblique"}
            variant={"h3"}
          >
            REDES Y DEPARTAMENTOS
          </Typography>
        </Fade>

        <div className="grid grid-cols-2 m-auto w-auto">
          <div
            style={{ height: "auto" }}
            className=" m-auto justify-center align-middle p-10 "
          >
            <Fade left duration={2000}>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"center"}
                fontStyle={"oblique"}
                paddingBottom={4}
                variant={"h4"}
              >
                REDES
              </Typography>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"left"}
                fontSize={20}
                variant={"inherit"}
                paragraph={true}
              >
                <Grid container item spacing={2} direction={"column"}>
                  <Grid item spacing={2} direction={"column"}>
                    PAREJAS
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    JOVENES
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    MUJERES
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    KIDS
                  </Grid>
                </Grid>
              </Typography>
            </Fade>
          </div>
          <div
            style={{ height: "auto" }}
            className=" m-auto justify-center align-middle pt-20 "
          >
            <Fade right duration={2000}>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"center"}
                fontStyle={"oblique"}
                paddingBottom={4}
                variant={"h4"}
              >
                DEPARTAMENTOS
              </Typography>
              <Typography
                alignSelf={"center"}
                color={"black"}
                textAlign={"left"}
                fontSize={20}
                variant={"inherit"}
                paragraph={true}
              >
                <Grid container item spacing={2} direction={"column"}>
                  <Grid item spacing={2} direction={"column"}>
                    ADORACIÓN
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    AUDIOVISUALES
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    INFLUENCERS
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    CONSOLIDACION
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    INTERCESION
                  </Grid>
                  <Grid item spacing={2} direction={"column"}>
                    OBRA SOCIAL
                  </Grid>
                </Grid>
              </Typography>
            </Fade>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{ height: "auto" }}
        className="bg-zinc-800 m-auto justify-center align-middle pt-10 pl-6"
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
        <Grid
          direction="row"
          align="center"
          alignItems="center"
          justify="center"
          sx={{ paddingTop: 5 }}
          spacing={2}
        >
          <Grid
            container
            item
            xs={4}
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <CustomAudioPlayer />
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          justifyContent: "center",
          height: "auto",
        }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-10 pl-6"
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
            width: "100%",
            justifySelf: "center",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingTop: 15,
            height: 1000,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "326px",
              justifySelf: "center",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: 1000,
            }}
          ></div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default HomeScreen;
