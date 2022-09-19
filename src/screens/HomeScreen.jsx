import * as React from "react";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Slideshow from "../components/Slideshow";
import SocialBanner from "../components/SocialBanner";
import ImageParallax from "../components/ImageParallax";
import Footer from "../components/Footer";
import CustomAudioPlayer from "../components/CustomAudioPlayer";
import { IGEmbed } from "react-ig-embed";
import { Fade } from "@material-ui/core";

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

      <Fade in={true}>
        <div
          className="bg-zinc-100 h-72 m-auto justify-center align-middle pt-24"
          sx
        >
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
          >
            <p>
              Somos una iglesia enfocada en la transformación y Restauración de
              la familia, y llevar al hombre al conocimiento de Dios.
            </p>
          </Typography>
        </div>
      </Fade>

      <div>
        <ImageParallax />
      </div>

      <div
        style={{ height: 300 }}
        className="bg-zinc-800 m-auto justify-center align-middle p-16 "
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
          variant={"inherit"}
          paragraph={true}
        >
          Disfruta de la Presencia de Dios en nuestro auditorio. Estamos
          abiertos los domingos en el horario 9:30 AM.
          <br /> Tambien puedes disfrutar de nuestros grupos de conexiones:
          Grupo parejas, Grupo de jovenes, Grupo de mujeres, entre otros. <br />
          Te invitamos tambien a los grupos de sanacion y hacedores de
          disipulos. ¡Te Esperamos!
        </Typography>
      </div>
      <div
        style={{ height: 600 }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-20"
        sx
      >
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
          variant={"h5"}
        >
          <p>
            Ser una Iglesia que en Cristo restaura y fortalece integralmente a
            toda la familia.
          </p>
        </Typography>

        <div className="grid grid-cols-2">
          <div
            style={{ height: 400 }}
            className=" m-auto justify-center align-middle pt-10"
            sx
          >
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
              <Grid item>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    FAMILIA
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    INTIMIDAD
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    RELACIONES
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    LIDERAZGO
                  </ListItem>
                </List>
              </Grid>
            </Typography>
          </div>
          <div
            style={{ height: 400 }}
            className=" m-auto justify-center align-middle p-10 "
          >
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
              <Grid item>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    ADORACIÓN
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    PASIÓN
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    INTEGRIDAD
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    FIDELIDAD
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    ESFUERZO
                  </ListItem>
                </List>
              </Grid>
            </Typography>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <SocialBanner />
      </div>
      <div
        style={{ height: 600 }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-20"
        sx
      >
        <Typography
          alignSelf={"center"}
          color={"black"}
          textAlign={"center"}
          fontStyle={"oblique"}
          variant={"h3"}
        >
          REDES Y DEPARTAMENTOS
        </Typography>

        <div className="grid grid-cols-2 m-auto w-auto">
          <div
            style={{ height: 400 }}
            className=" justify-center align-middle pt-10"
            sx
          >
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
              <Grid item>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    PAREJAS
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    JOVENES
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    MUJERES
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    KIDS
                  </ListItem>
                </List>
              </Grid>
            </Typography>
          </div>
          <div
            style={{ height: 400 }}
            className=" justify-center align-middle p-10 "
          >
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
              <Grid item>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    ADORACIÓN
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    AUDIOVISUALES
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    INFLUENCERS
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    CONSOLIDACION
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    INTERCESION
                  </ListItem>
                  <ListItem
                    style={{
                      justifyContent: "center",
                      textAlign: "left",
                    }}
                  >
                    OBRA SOCIAL
                  </ListItem>
                </List>
              </Grid>
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{ height: 400 }}
        className="bg-zinc-100 m-auto justify-center align-middle pt-10 pl-6"
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
        <Grid
          direction="row"
          align="center"
          alignItems="center"
          justify="center"
          sx={{ paddingTop: 5 }}
        >
          <Grid container item xs={4} alignItems="center" justify="center">
            <Grid>
              <CustomAudioPlayer />
            </Grid>
          </Grid>
        </Grid>
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
