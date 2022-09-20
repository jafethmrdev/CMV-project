import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import { Grid, Typography } from "@mui/material";
function Seccion4() {
  return (
    <>
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
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>PAREJAS</Grid>
                  <Grid item>JOVENES</Grid>
                  <Grid item>MUJERES</Grid>
                  <Grid item>KIDS</Grid>
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
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>ADORACIÓN</Grid>
                  <Grid item>AUDIOVISUALES</Grid>
                  <Grid item>INFLUENCERS</Grid>
                  <Grid item>CONSOLIDACION</Grid>
                  <Grid item>INTERCESION</Grid>
                  <Grid item>OBRA SOCIAL</Grid>
                </Grid>
              </Typography>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seccion4;
