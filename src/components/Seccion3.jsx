import React from "react";

import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import { Grid, Typography } from "@mui/material";
function Seccion3() {
  return (
    <>
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
            variant={"body2"}
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
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>FAMILIA</Grid>
                  <Grid item>INTIMIDAD</Grid>
                  <Grid item>RELACIONES</Grid>
                  <Grid item>LIDERAZGO</Grid>
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
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item>ADORACIÓN</Grid>
                  <Grid item>PASIÓN</Grid>
                  <Grid item>INTEGRIDAD</Grid>
                  <Grid item>FIDELIDAD</Grid>
                  <Grid item>ESFUERZO</Grid>
                </Grid>
              </Typography>
            </LightSpeed>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seccion3;
